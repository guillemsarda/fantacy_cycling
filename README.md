# Fantacycling

Fantacycling is a fantasy cycling application for lovers of the sport to compete throughout the entire cycling season. 

Together with my colleagues we refactored this project. Our main tasks were to implement TypeScript in both Front-end and Back-end, rearrange the Back-end to improve readability and add Web Sockets in the Front-end for real time interactions.


## Getting Started
To install the required dependancies, run npm i from the client folder and from the Server folder.

To set up the hosted Elephany SQL database, create an account on Elephant SQL and create a new instance with the free plan. Once the instance is created, you will can click on it and see details such as the url that will be added to a .env file in the following steps.

To set up Auth0, create an account on Auth0. Create a new Single Page Application. On the settings tab you will find the domain name and client id. Scroll to the Application URIs section and add http://localhost:3000/home to the Allowed Callback URLs, add http://localhost:3000 to the Allowed Logout URLs, to the Allowed Web Origins, and to the Allowed Orgins(CORS) sections. Then hit save changes at the bottom.

To configure these connections, create two .env files, one in the client folder an one in the Server folder and copy the following and add the correct values for the auth0 domain and client id, as well as the elephant sql uri.

```bash
REACT*APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
REACT*APP_AUTH0_CLIENTID=YOUR_AUTH0_CLIENT_ID
REACT_APP_AUTH0_REDIRECT_URL=http://localhost:3000/home
DATABASE_URI=YOUR_ELEPHANT_SQL_URL
```

Finally, to initially add all riders to the database, uncomment line 22 of Server/index.ts, run npm run build, then run node .. This will take a few minutes. You will see rider-names, team names, and upcoming race names in the console. It is complete when you see complete in the console and it stops logging. At this point you can comment out line 22 again, run the build again (npm run build) and then start the server again with node .. Move to the client folder and start it with npm start.

Every night at midnight the webscrapers will run and add any missing riders to the database, update their scores, and update each user's score accordingly.

## Tech stack added to the original one:
- Typescript
- Socket.io

## Contributors
- Santiago L. Mesa Villa: [GitHub](https://github.com/LeoEmVee) - [LinkedIn](https://www.linkedin.com/in/santi-mesa-villa/)
- Brandon Dickson: [GitHub](https://github.com/brandond98) - [LinkedIn](https://www.linkedin.com/in/brandonjdickson/)
