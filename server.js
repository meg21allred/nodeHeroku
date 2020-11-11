const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const app = express();

//app.listen(5000);
app.listen(process.env.PORT);

app.use(express.static('public'));

//for parsing app.xwww-
app.use(bodyParser.urlencoded({extended: true}));
//for parsing application/json
app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(upload.array());

app.set("views", "views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send('this is the home page');
})

app.post('/getRate', (req, res) => {
    let formData = req.body;

    console.log(req.body);
    let rate = calculateRate(formData);
    let param = {rate: rate};
    res.render('getRate', param);
})


function calculateRate(data) {
    let weight = data.weight;
    let packageType = data.packageType;
    let rate;

    if (packageType == "stamped") {
        rate = calStamped(weight);
    } else if (packageType == "metered") {
        rate = calMetered(weight);
    } else if (packageType == "flats") {
        rate = calFlats(weight);
    } else if (packageType == "first-class") {
        rate = calFirstClass(weight);
    }

    
    return rate;
}


function calStamped(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = .55;
            break;
        case (weight <= 2):
            rate = .70;
            break;
        case (weight <= 3):
            rate = .85;
            break;
        case (weight <= 3.5):
            rate = 1.00;
            break;
        default:
            rate = "Weight is greater then category capacity";
            break;
    }

    return rate;
}

function calMetered(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = .50;
            break;
        case (weight <= 2):
            rate = .65;
            break;
        case (weight <= 3):
            rate = .80;
            break;
        case (weight <= 3.5):
            rate = .95;
            break;
        default:
            rate = "Weight is greater then category capacity";
            break;
    }

    return rate;
}

function calFlats(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = 1.00;
            break;
        case (weight <= 2):
            rate = 1.20;
            break;
        case (weight <= 3):
            rate = 1.40;
            break;
        case (weight <= 4):
            rate = 1.60;
            break;
        case (weight <= 5):
            rate = 1.80;
            break;
        case (weight <= 6):
            rate = 2.00;
            break;
        case (weight <= 7):
            rate = 2.20;
            break;
        case (weight <= 8):
            rate = 2.40;
            break;
        case (weight <= 9):
            rate = 2.60;
            break;
        case (weight <= 10):
            rate = 2.80;
            break;
        case (weight <= 11):
            rate = 3.00;
            break;
        case (weight <= 12):
            rate = 3.20;
            break;
        case (weight <= 13):
            rate = 3.40;
            break;
        default:
            rate = "Weight is greater then category capacity";
            break;
    }

    return rate;
}

function calFirstClass(weight) {

    let rate;

    switch (true) {
        case (weight <= 4):
            rate = 3.80;
            break;
        case (weight <= 8):
            rate = 4.60;
            break;
        case (weight <= 12):
            rate = 5.30;
            break;
        case (weight <= 13):
            rate = 5.90;
            break;
        default:
            rate = "Weight is greater then category capacity";
            break;
    }
    return rate;
}