package main

import (
	"fmt"
	"net/http"

	"github.com/PaulosSouza/crud-mongo-api/controllers"
	"github.com/julienschmidt/httprouter"
	mgo "gopkg.in/mgo.v2"
)

func main() {
	router := httprouter.New()
  uc := controllers.NewUserController(getSession())

  router.GET("/user/:id", uc.GetUser)
  router.POST("/user", uc.CreateUser)
  router.DELETE("/user/:id", uc.DeleteUser)

	fmt.Println("Running on localhost:9000")
  http.ListenAndServe("localhost:9000", router)
}

func getSession() *mgo.Session {
	s, err := mgo.Dial("mongodb://localhost:27017")

	if err != nil {
		panic(err)
	}

	return s
}
