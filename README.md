# Effizient
# Aim:
The Task is to create a UI for SOP(Statement Of Purpose) Generator. The UI and the program are having the
following capabilities:
1. Web based UI where the user can input information regarding his/her education details.
2. The information is stored and sent to the backend
3. An email is generated and sent to the user on the email address they provide in
the form with all the information they entered in the UI.
# Tech Stack used:
I've used the following technologies to run this program
1. Front-end: React.js , HTML , CSS , Javascript , Material UI
2. Back-end: node.js , express.js , Mongodb
# Process:
1. For the UI the front-end technologies played a huge part, with Material UI i have created the input fields much interactive and customisable.
2. Coming to backend, i've used mongodb to store the frontend data with CORS which integrates front-end and back-end.
3. When the user enters his details, after submitting the form, the data will store in mongodb.
4. The user will get a customised SOP via mail. I used nodemailer in this case.
5. For generating pdf, i used PdfKit.

# How to use:
1. First create a new folder on your computer,
2. open folder in VS Code, open terminal.
3. git clone this repository link : https://github.com/Chandana147/Effizient.git
4. "npm i" in terminal, this will install all the packages i've used. install nodemon, cors, express, axios, nodemailer.
6. for frontend directory use : npm start
7. for backend directory use : nodemon server.js
8. then you'll get the output in your localhost:3000

That's it! You should now be able to explore the SOP Generator on your local machine. If you happen to have any issues, please make sure you have Node.js installed and that you've followed the steps correctly.
