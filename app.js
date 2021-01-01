require('dotenv').config();
const port = process.env.PORT;
const express = require("express");
var app = express();
const cors = require('cors');
const router = express.Router();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//configurations -DB
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const { Model } = require('objection');
Model.knex(database);

const responseCode = require('./app/helpers/Responsecode');
const responseHelper = require('./app/helpers/Responsehelper');

const logdate = new Date().toLocaleDateString().replace(/\//g, "_");
const logger = require('pino')({ level: 'debug' }, './logs/' + logdate + '.log');

//Global- declaration
global.router = router;
global.statusCode = responseCode;
global.resposne = responseHelper;
global.Model = Model;
global.logger = logger;

const categoryRoute = require('./app/routes/Category'); //Category Route

app.use('/v1/category', categoryRoute);

app.get('/', (req, res) => res.status(responseCode.HTTP_OK).json({ message: "Server is healthy!." }));

//App Listen Port
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;