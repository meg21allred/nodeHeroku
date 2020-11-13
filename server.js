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
    let zone = data.zone;
    let rate;

    if (packageType == "stamped") {
        rate = calStamped(weight);
    } else if (packageType == "metered") {
        rate = calMetered(weight);
    } else if (packageType == "flats") {
        rate = calFlats(weight);
    } else if (packageType == "first-class") {
        rate = calFirstClass(weight, zone);
    }

    
    return rate;
}


function calStamped(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = "$" + 0.55.toFixed(2);
            break;
        case (weight <= 2):
            rate = "$" + 0.70.toFixed(2);
            break;
        case (weight <= 3):
            rate = "$" + 0.85.toFixed(2);
            break;
        case (weight <= 3.5):
            rate = "$" + 1.00.toFixed(2);
            break;
        default:
            rate = "...greater then category capacity";
            break;
    }

    return rate;
}

function calMetered(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = "$" + 0.50.toFixed(2);
            break;
        case (weight <= 2):
            rate = "$" + 0.65.toFixed(2);
            break;
        case (weight <= 3):
            rate = "$" + 0.80.toFixed(2);
            break;
        case (weight <= 3.5):
            rate = "$" + 0.95.toFixed(2);
            break;
        default:
            rate = "...greater then category capacity";
            break;
    }

    return rate;
}

function calFlats(weight) {

    let rate;

    switch (true) {
        case (weight <= 1 ) :
            rate = "$" + 1.00.toFixed(2);
            break;
        case (weight <= 2):
            rate = "$" + 1.20.toFixed(2);
            break;
        case (weight <= 3):
            rate = "$" + 1.40.toFixed(2);
            break;
        case (weight <= 4):
            rate = "$" + 1.60.toFixed(2);
            break;
        case (weight <= 5):
            rate = "$" + 1.80.toFixed(2);
            break;
        case (weight <= 6):
            rate = "$" + 2.00.toFixed(2);
            break;
        case (weight <= 7):
            rate = "$" + 2.20.toFixed(2);
            break;
        case (weight <= 8):
            rate = "$" + 2.40.toFixed(2);
            break;
        case (weight <= 9):
            rate = "$" + 2.60.toFixed(2);
            break;
        case (weight <= 10):
            rate = "$" + 2.80.toFixed(2);
            break;
        case (weight <= 11):
            rate = "$" + 3.00.toFixed(2);
            break;
        case (weight <= 12):
            rate = "$" + 3.20.toFixed(2);
            break;
        case (weight <= 13):
            rate = "$" + 3.40.toFixed(2);
            break;
        default:
            rate = "...greater then category capacity";
            break;
    }

    return rate;
}

function calFirstClass(weight, zone) {

    let rate;

    if (zone == "1&2") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 3.80.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.60.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.30.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 5.90.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone == "3") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 3.85.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.65.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.35.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 5.95.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone == "4") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 3.90.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.70.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.40.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 6.05.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone == "5") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 3.95.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.75.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.45.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 6.15.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone = "6") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 4.00.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.80.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.50.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 6.20.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone == "7") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 4.05.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 4.90.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.65.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 6.40.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } else if (zone == "8" || zone =="9") {
        switch (true) {
            case (weight <= 4):
                rate = "$" + 4.20.toFixed(2);
                break;
            case (weight <= 8):
                rate = "$" + 5.00.toFixed(2);
                break;
            case (weight <= 12):
                rate = "$" + 5.75.toFixed(2);
                break;
            case (weight <= 13):
                rate = "$" + 6.50.toFixed(2);
                break;
            default:
                rate = "...greater then category capacity";
                break;
        }
    } 
    
    return rate;
}