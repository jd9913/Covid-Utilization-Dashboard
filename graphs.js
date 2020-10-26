//let generateGraphs = require('./scripts/script.js').default;
const fs = require('fs');

//use XHR HTTP Request for WebEOC call



function getRawData() {

    let allData = fs.readFileSync("./data/hospital.json", function (err, rawdata) {
        if (err) {

            return console.log(err);
        }
        let allData = JSON.parse(rawdata);

        populateAllVariables(allData)

        console.log(allData);

    });



    //global variables for linking to webEOC data

    let dataEDNumber = [];//number of daily + patients seen in ED


    let dataAdNumber = [];// number of daily + patients admitted


    let dataInptNumber = []; //number of daily + patients as inpatients


    let dataMSPie = [841, 517, 3573];   //array to hold daily data to generate pie chart for medical surgical beds
    let dataIcuPie = [220, 232, 428];  //array to hold daily data to generate pie chart for ICU beds
    let dataVentPie = [891, 121, 323];  //array to hold daily data to generate pie chart for ventilated patients

    let dataLineChartED = [213, 456, 4898, 4535, 458, 465, 158, 5654, 546]; //array to hold daily data to generate line chart for ED patients 4/2020-current
    let dataLineChartAd = [6546, 4642, 4565, 789, 423, 68, 489, 654]; //array to hold daily data to generate line chart for Admit 4/2020-current
    let dataLineChartInp = [658, 898, 435, 898, 74, 4598, 6543, 6, 9879]; //array to hold daily data to generate line chart for Inpatients 4/2020-current


    //number threshold levels so that the numbers can change colors based on their value

    let EDDataHighThreshold = 500; //threshold at which number changes color
    let EDDataLowThreshold = 150;
    let AdmitDataHighThreshold = 100;//threshold at which number changes color
    let AdmitDataLowThreshold = 50;
    let InptDataHighThreshold = 300;//threshold at which number changes color
    let InptDataLowThreshold = 100;





    function populateAllVariables(allData) {


        dataLineChartED = Object.keys(allData).map(function (key) {
            return (Number(allData[key].EDPosPts));
        });
        dataLineChartAd = Object.keys(allData).map(function (key) {
            return (Number(allData[key].COVIDpositiveAdmits));
        });
        dataLineChartInp = Object.keys(allData).map(function (key) {
            return (Number(allData[key].COVIDpositiveInpatients));
        });

        lineGraphLabels = Object.keys(allData).map(function (key) {
            return [(Number(allData[key].dataid)), (Date.parse(allData[key].DataDate))];

        });
        dataEDNumber1 = Object.keys(allData).map(function (key) {
            return [(allData[key].dataid), (Number(allData[key].EDPosPts))];
        });

        dataAdNumber1 = Object.keys(allData).map(function (key) {
            return (allData[key].COVIDpositiveAdmits);
        });
        dataInptNumber1 = Object.keys(allData).map(function (key) {
            return (allData[key].COVIDpositiveInpatients)
        });


        //For loops to get the last value in the field

        /*function positivePtsED() {
            let EDNumberLength = dataEDNumber.length;
            for (var i = 0; i < EDNumberLength; i++) {
                var item = dataEDNumber[i];
        
                console.log('Ed Number is ' + item);
        
            }
        }
        
        
        function positiveAdmissions() {
            let AdmitNumberLength = dataAdNumber.length;
            for (var i = 0; i < AdmitNumberLength; i++) {
                var item = dataAdNumber[i];
                console.log('Admit number is ' + item);
            }
        }
        
        function positiveInpatients() {
            let InptNumberLength = dataInptNumber.length;
            for (var i = 0; i < InptNumberLength; i++) {
                var item = dataInptNumber[i];
                console.log("inpt number is " + item);
            }
        }
        
        positivePtsED();*/








        console.log(lineGraphLabels);





    }
};
getRawData();
