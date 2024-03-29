package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"io"
	"net/http"
	"time"
)

type (
	TodoItem struct {
		ID          bson.ObjectId `bson:"_id,omitempty"`
		Description string        `bson:"description"`
		Done        bool          `bson:"done"`
		CreatedAt   time.Time     `bson:"created_at"`
	}

	Todo struct {
		Description string `json:"description"`
	}
)

const (
	hostname         string = "127.0.0.1"
	databaseName     string = "sample_todos"
	uniqueCollection string = "todos"
)

var session, _ = mgo.Dial(hostname)
var connection = session.DB(databaseName).C(uniqueCollection)

func AddTodo(w http.ResponseWriter, r *http.Request) {
	var todo Todo

	err := json.NewDecoder(r.Body).Decode(&todo)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println("adding a todo")

	var todoItem TodoItem = TodoItem{
		ID:          bson.NewObjectId(),
		Description: todo.Description,
		CreatedAt:   time.Now(),
		Done:        false,
	}
	_ = connection.Insert(todoItem)

	result := TodoItem{}
	_ = connection.Find(bson.M{
		"description": todo.Description,
	}).One(&result)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}

func GetIncompleteTodo(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get Incomplete Todo")

	var ItemsIncomplete []TodoItem
	_ = connection.Find(bson.M{"done": false}).All(&ItemsIncomplete)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(ItemsIncomplete)
}

func GetCompletedTodo(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get Completed Todo")

	var ItemsCompleted []TodoItem
	_ = connection.Find(bson.M{"done": true}).All(&ItemsCompleted)
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(ItemsCompleted)
}

func GetTodoByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get todo by ID")
	var result TodoItem

	vars := mux.Vars(r)
	id := vars["id"]
	_ = connection.Find(bson.M{"_id": bson.ObjectIdHex(id)}).One(&result)
	json.NewEncoder(w).Encode(result)
}

func GetAllTodo(w http.ResponseWriter, r *http.Request) {
  fmt.Println("Get all todos")
  var todos []TodoItem

  _ = connection.Find(bson.M{}).All(&todos)

	w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(todos)
}

func MarkDone(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Mark as done")

	vars := mux.Vars(r)
	id := bson.ObjectIdHex(vars["id"])

	err := connection.Update(bson.M{"_id": id}, bson.M{"$set": bson.M{"done": true}})
	if err != nil {
		io.WriteString(w, `"updated": false, "error": `+err.Error()+`}`)
	} else {
		io.WriteString(w, `"updated": true`)
	}
}

func DeleteItem(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Delete Item")

	vars := mux.Vars(r)
	id := bson.ObjectIdHex(vars["id"])
	err := connection.RemoveId(id)
	if err != nil {
		io.WriteString(w, `"removed": false, "error": `+err.Error()+`}`)
	} else {
		io.WriteString(w, `"removed": true`)
	}
}

func Health(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, `{"alive": true}`)
}

func main() {
	fmt.Println("Starting todolist backend")
	fmt.Println("Creating mongo session")
	session.SetMode(mgo.Monotonic, true)
	defer session.Close()
	router := mux.NewRouter()

	router.HandleFunc("/todo", AddTodo).Methods("POST")
  router.HandleFunc("/todo", GetAllTodo).Methods("GET")
	router.HandleFunc("/todo-completed", GetCompletedTodo).Methods("GET")
	router.HandleFunc("/todo-incompleted", GetIncompleteTodo).Methods("GET")
	router.HandleFunc("/todo/{id}", GetTodoByID).Methods("GET")
	router.HandleFunc("/todo/{id}", MarkDone).Methods("PATCH")
	router.HandleFunc("/todo/{id}", DeleteItem).Methods("DELETE")
	router.HandleFunc("/health", Health).Methods("GET")

	handler := cors.New(cors.Options{
		AllowedMethods: []string{"POST", "GET", "DELETE", "PATCH"},
	}).Handler(router)

	fmt.Println("Server is running on 8000 port")
	http.ListenAndServe(":8000", handler)
}
