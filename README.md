Medium Article Scraper and Viewer

This project is a web application that allows users to input a topic and scrapes articles related to that topic from Medium. It displays the top 5 related articles on the page, and users can click on an article to view it directly on Medium.


Prerequisites
•	Node.js: Ensure you have Node.js installed (version 14 or higher recommended). Download Node.js
•	npm: npm is included with Node.js. Verify it by running npm -v in your terminal.
•	Git: Version control system to clone the repository and deploy to services like Heroku. Download Git

Setup Instructions
Cloning the Repository
First, clone the repository to your local machine:

git clone https://github.com/vaishnavi-bollam/project---Medium-Scraper
cd medium-scraper


Running the Backend Locally
Navigate to the backend directory:cd backend

Install dependencies:
npm install


Start the server:
node index.js

Navigate to the frontend directory:
cd ../frontend


Install dependencies:
npm install


Start the React application:
npm start 

Testing the Application Locally
Open your browser and go to http://localhost:3000.
Enter a topic in the search bar and click "Search".
The app will display the top 5 articles related to the topic from Medium.
