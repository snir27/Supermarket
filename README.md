# Supermarket

This is a Supermarket project built using React.

## Connecting to MongoDB

In order to connect to your own MongoDB database, you will need to add your database 
connection information to the .env file in the root folder of the project. Specifically, you will need to 
add a `MONGO_URI` variable with your database connection string in the following format:

`MONGO_URI=mongodb+srv://<username>:<password>@mysupermarket.tswfylf.mongodb.net/<database name>?retryWrites=true&w=majority`
Make sure to replace `<username>`, `<password>`, and `<database name>` with your own database credentials. This will allow the Supermarket project to connect to your own database.

## Running the project

To run the project, follow these steps:

1. Navigate to the `client/src` folder in your terminal.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the client application.

To start the server, follow these steps:

1. Navigate to the root folder of the project in your terminal.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the

## Description

Supermarket is a project built using React, Express, Node.js, and Mongoose. It is a virtual shopping platform that allows users to easily browse and purchase products online. The React frontend provides an interactive and user-friendly interface, while the Express backend handles the routing and logic for managing the shopping cart and handling payments. The MongoDB database is used to store the products, users, and order information, and the Mongoose library is used to easily model and interact with the data. Overall, Supermarket offers a convenient and streamlined way for users to shop for groceries and other household items without having to physically visit a store.
