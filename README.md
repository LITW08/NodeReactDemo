# NodeReactDemo

Here are the steps to get started with Node/React/Knex:

```
mkdir my-app
cd my-app
npm init -y
npm i express knex tedious
knex init
create-react-app client-app
```

That will create the backend structure and the front end app. Create a file in the top level (Server side) code called app.js, and put your express code there. 
Then, add the following line to the top of your `package.json` inside of your `client-app` folder

```
  "proxy": "http://localhost:4000",
```

To run the application, you'll need to console windows open. One at the top level (server) side, where you'll run `nodemon app.js` and one inside of the `client-app` folder where
you'll run `npm start`. This will launch your browser at `http://localhost:3000` which will display your React app, but where you'll also be able to make requests to your backend
using just `/api/...`

For Knex, first you'll need to do `knex init` at the top level (server side) folder. This will create a knexfile.js. Edit it to look like my version. Once that's done,
you can run `knex migrate:make add_some_table` to generate new migrations. To then run the migrations, you need to run `knex migrate:latest`
