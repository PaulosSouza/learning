package models

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type User struct {
	Id        bson.ObjectId `bson:"_id"`
	Name      string        `json:"name" bson:"name"`
	Gender    string        `json:"gender" bson:"gender"`
	Age       int           `json:"age" bson:"age"`
	CreatedAt time.Time     `bson:"createdAt"`
}
