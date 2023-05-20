
let projectData = {};

const port = 5004;
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');


const app = express ();


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('website'));

//create a get root to recieve the data from openweather api and store it inside projectData
app.post('/getForecast', async function (req, res) {
    const body = await req.body;
    projectData = body;
    console.log(projectData);
    res.status(200).send(projectData);
});

//get route that sends project data
app.get('/viewForecast', function (req, res) {
    res.send(projectData);
});


app.listen(port,  function () {
    console.log("Listening to port ", port);
});