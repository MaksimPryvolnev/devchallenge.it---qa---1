# devchallenge.it-qa-1
## Guide:
1. Install node version 8.11.0 or enter command for node version manager `$ nvm install 8.11.0`
2. Install dependencies by running command in the project directory `$ yarn install` or `$ npm i` if you are using npm
3. Run tests by entering command in the project directory `$ yarn run test:local` or `$ npm run test:local`

## Run the wildfly and selenium server, build Jenkins with NodeJS:
1. Install latest Docker and Docker Compose
2. Run build command - `$ sudo docker-compose up`
3. Run container initialisation command - `$ sudo docker-compose up`

## Jenkins
1. Jenkins listens port 5000 so open it `http://localhost:5000`
2. Security is off so you can run commands without loging in
3. Run