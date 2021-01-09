# SHL E-COMMERCE TASK 

OBJECTIVE:

The task is to create a checkout system/cart that confirms the following discount/promotion rule
interface.
Pseudo Code:
co = Checkout.new(rules)
co.scan(item)
co.scan(item)
price = co.total
discount = co.total_discounts

Product Items

Item Price
A Rs 30
B Rs 20
C Rs 50
D Rs 15
Promotions
● If 3 of Item A is purchased, the price of all three is Rs 75(i.e multiples of 3 discount)
● If 2 of Item B is purchased, the price of both is Rs 35(i.e multiples of 2 discount)
● If the total basket price(after previous discounts) is over Rs 150, the basket receives an
additional discount of Rs 20.
Example Test Data

Basket Price
A, B, C Rs 100

B, A, B, A, A Rs 110
C, B, A, A, D, A, B Rs 155
C, A, D, A , A Rs 140

Technologies Used :

Backend : 
    Nodejs [express Framework],Php [Frontend Rendering]
Frontend : 
    HTML5,Jquery

versions : 
    node v.14
    php :7.x

How to Run the Project : 

Docker Container :
    Run through Docker container :
        Step 1: Build Docker
            sudo docker build -t shl-task-services .

        Step 2 :List Docker Image
            sudo docker images
            sudo docker run --name shl-task-services -p 2082 -d shl-task-services

Manull Run :

Step1: Install the package dependancy
    Go to the root directory - do npm install in the terminal

Step 2 : Run the Migrations
    Create the database [database name should be configured in the ENV]
    
    Migrations:
        npx knex migrate:latest 
            or
        npm run knex migrate:latest

    Refer : sql file available in database directory.

Step 3 : Add category and product Items 
    Postman collections : https://www.getpostman.com/collections/d936e510b9c936a71470
    baseurl : http://localhost:2082/api/v1/

    Note : PORT Might be change based on outbound rules in the server.

Step 4: Run The Application :
    Development Mode : 
        npm run dev
    Production Mode :
        npm start

Step :5 Debugging 
    Application logs captured and stored in the logsfiles- logs/ directory
