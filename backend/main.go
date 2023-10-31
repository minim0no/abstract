package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)



func main() {
	fmt.Println("Starting application...")

	// Create a new instance of the router
	r := gin.Default()

	// Set up the routes
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	// Start the application
	r.Run()
}