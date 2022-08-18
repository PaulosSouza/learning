package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/PaulosSouza/crud-mongo-api/models"
	"github.com/julienschmidt/httprouter"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type UserController struct {
	session *mgo.Session
}

func NewUserController(s *mgo.Session) *UserController {
	return &UserController{session: s}
}

func (uc UserController) GetUser (w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	usersCol := uc.session.DB("crud-mongo-api").C("users")
	id := p.ByName("id")

	if !bson.IsObjectIdHex(id) {
		w.WriteHeader(http.StatusNotFound)
	}

	oid := bson.ObjectIdHex(id)

	user := models.User{}

	if err := usersCol.FindId(oid).One(&user); err != nil {
		w.WriteHeader(404)
		return
	}

	uj, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "%s\n", uj)
}

func (uc UserController) CreateUser (w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	usersCol := uc.session.DB("crud-mongo-api").C("users")
	user := models.User{
		Id: bson.NewObjectId(),
		CreatedAt: time.Now(),
	}

	json.NewDecoder(r.Body).Decode(&user)

	usersCol.Insert(&user)

	uj, err := json.Marshal(user)

	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	fmt.Fprintf(w, "%s\n", uj)
}

func (uc UserController) DeleteUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	usersCol := uc.session.DB("crud-mongo-api").C("users")
	id := p.ByName("id")

	if !bson.IsObjectIdHex(id) {
		w.WriteHeader(404)
		return
	}

	oid := bson.ObjectIdHex(id)

	if err := usersCol.RemoveId(oid); err != nil {
		w.WriteHeader(404)
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, "Deleted user", oid, "\n")
}
