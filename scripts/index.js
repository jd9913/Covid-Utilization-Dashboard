const fs = require('fs');

fs.readFile('hospital.json', function (err, data) {
    //check for errors
    if (err) throw err;

    const allData = JSON.parse(data);
    console.log(allData);
})

const file = require('file-system');
const requirejs = require('requirejs');
//file contains non graph data, form data and HTML data.




//number threshold levels so that the numbers can change colors based on their value

let EDDataHighThreshold = 500; //threshold at which number changes color
let EDDataLowThreshold = 150;
let AdmitDataHighThreshold = 100;//threshold at which number changes color
let AdmitDataLowThreshold = 50;
let InptDataHighThreshold = 300;//threshold at which number changes color
let InptDataLowThreshold = 100;



//current date in header

function getCurrentDay() {
    const event = new Date(Date.now());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let currentDay = event.toLocaleDateString(undefined, options);

    $('#currentDay').text(currentDay);
}


//place the current day/date in the header field

getCurrentDay();
populateAllVariables();



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
        return (Number(allData[key].dataid)), (Date.parse(allData[key].DataDate));

    });
    dataEDNumber1 = Object.keys(allData).map(function (key) {
        return (allData[key].dataid), (Number(allData[key].EDPosPts));
    });

    dataAdNumber1 = Object.keys(allData).map(function (key) {
        return (allData[key].COVIDpositiveAdmits);
    });
    dataInptNumber1 = Object.keys(allData).map(function (key) {
        return (allData[key].COVIDpositiveInpatients)
    });

    var labelDates = new Date(lineGraphLabels);


    console.log(lineGraphLabels);




    function getSingleDate(lineGraphLabels) {

        let singleDate = [];

        for (let i = 0; i > lineGraphLabels.length; i++) {

            if (Math.max(lineGraphLabels[i].DataDate)) {

                singleDate.push(lineGraphLabels[i].dataid, lineGraphLabels[i].DataDate);
            };


            // singleDate = [dataid,(Math.max(...lineGraphLabels))];

            // const newSingle = [dataid, singleDate];

            console.log(newSingle);


        };
    };
    getSingleDate();






    function getSingleNumbers(dataEDNumber1, dataAdNumber1, dataInptNumber1) {






        newSingle = dataEDNumber1;

        dataEDNumber = EDPosPts;





        function getSingleNumbers(dataEDNumber1, dataAdNumber1, dataInptNumber1, newSingle) {

            newSingle = dataEDNumber1;

            dataEDNumber = EDPosPts;




            dataAdNumber = dataAdNumber1.filter(function (item) {
                dataid.singleDate = dataid.dataAdNumber1
            });
            return dataAdNumber;



            dataInptNumber = dataInptNumber1.filter(function (item) {
                dataid.singleDate = dataid.dataInptNumber1
            });
            return dataInptNumber;


        };

        getSingleNumbers();

        console.log(dataEDNumber, dataAdNumber, dataInptNumber);




        console.log(labelDates);


        console.log(lineGraphLabels);

        console.log('new Array' + currentNumDate);
        console.log('EDNum: ' + dataEDNumber1);
        //console.log(typeof dataEDNumber);
        //console.log('EDLine: ' + dataLineChartED);
        //console.log(typeof dataLineChartED);
        //console.log('AdmitLine: ' + dataLineChartAd);
        //console.log(typeof dataLineChartAd);
        //console.log('Inp Line: ' + dataLineChartInp);
        //console.log('labels: ' + lineGraphLabels);
        console.log(allData);



        //To insert the numbers into the appropriate block

        function getEDNumber() {
            //referencing the block for the numbers at the top
            $('#covidEDNumber').text(dataEDNumber);

            $('#covidEDNumber').removeClass();

            if (dataEDNumber > EDDataHighThreshold) {
                document.getElementById('covidEDNumber').className += "highClass";
            } else if (dataEDNumber > EDDataLowThreshold) {
                document.getElementById('covidEDNumber').className += "medClass";
            } else {

                document.getElementById('covidEDNumber').className += "lowClass";
            }
        };


        function getAdmitNumber() {
            //referencing the block for the numbers at the top
            $('#covidAdmitNumber').text(dataAdNumber);

            $('#covidAdmitNumber').removeClass();

            if (dataAdNumber > AdmitDataHighThreshold) {
                document.getElementById('covidAdmitNumber').className += "highClass";
            } else if (dataAdNumber > AdmitDataLowThreshold) {
                document.getElementById('covidAdmitNumber').className += "medClass";
            } else {

                document.getElementById('covidAdmitNumber').className += "lowClass";
            }
        };


        function getInptNumber() {
            //referencing the block for the numbers at the top
            $('#covidInptNumber').text(dataInptNumber)

            $('#covidInptNumber').removeClass();

            if (dataInptNumber > InptDataHighThreshold) {
                document.getElementById('covidInptNumber').className += "highClass";
            } else if (dataInptNumber > InptDataLowThreshold) {
                document.getElementById('covidInptNumber').className += "medClass";
            } else {

                document.getElementById('covidInptNumber').className += "lowClass";
            }
        }



        //call the functions to insert the daily number fields above the graphs

        getEDNumber();
        getAdmitNumber();
        getInptNumber();


        //4 graph data references
        var MSctx = medSurgGraphEl;
        var ICUctx = icuGraphEl;
        var Ventctx = ventGraphEl;
        var Linectx = covidLineEl;



        // Global + Custom Chart Config Options

        var options = {
            bezierCurve: false,
            animation: true,
            animationEasing: "easeOutQuart",
            showScale: false,
            tooltipEvents: ["mousemove", "touchstart", "touchmove"],
            tooltipCornerRadius: 3,
            pointDot: true,
            pointDotRadius: 4,
            datasetFill: true,
            scaleShowLine: true,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: true
        };

        // med surg graph


        var medSurgGraph = new Chart(MSctx, {
            type: "pie",
            data: {
                labels: pieChartLabels,
                datasets: [{
                    label: "Medical Surgical Bed Capacity Daily Snapshot",
                    data: dataMSPie,
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],

                }]

            },
            options: options
        });



        var ICUGraph = new Chart(ICUctx, {

            // ICU bed graph

            type: "pie",
            data: {
                labels: pieChartLabels,
                datasets: [{
                    label: "ICU Bed Capacity Daily Snapshot",
                    data: dataIcuPie,
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],


                }]
            },
            options: options
        });


        // ventilated patients graph
        var ventGraph = new Chart(Ventctx, {
            type: "pie",
            data: {
                labels: pieChartLabels,
                datasets: [{
                    label: "Ventilated Capacity Daily Snapshot",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
                    data: dataVentPie,

                }]
            },
            options: options
        });

        var lineGraphTime = new Chart(Linectx, {

            type: "line",
            data: {
                labels: lineGraphLabels,

                datasets: [
                    {
                        label: lineGraphLineED,
                        fillColor: "rgba(65,89,207,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: dataLineChartED
                    },
                    {
                        label: lineGraphLineAd,
                        fillColor: "rgba(65,207,136,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: dataLineChartAd
                    },

                    {
                        label: lineGraphLineInp,
                        fillColor: "rgba(168,34,135,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: dataLineChartInp
                    }]

            },
        });

    };
};



