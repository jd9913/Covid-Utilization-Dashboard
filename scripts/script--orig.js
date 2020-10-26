//global variables for linking to webEOC data

const dataEDNumber = [300];//number of daily + patients seen in ED


const dataAdNumber = [200];// number of daily + patients admitted


const dataInptNumber = [100]; //number of daily + patients as inpatients


const dataMSPie = [841, 517, 3573];   //array to hold daily data to generate pie chart for medical surgical beds
const dataIcuPie = [220, 232, 428];  //array to hold daily data to generate pie chart for ICU beds
const dataVentPie = [891, 121, 323];  //array to hold daily data to generate pie chart for ventilated patients

const dataLineChartED = [213, 456, 4898, 4535, 458, 465, 158, 5654, 546]; //array to hold daily data to generate line chart for ED patients 4/2020-current
const dataLineChartAd = [6546, 4642, 4565, 789, 423, 68, 489, 654]; //array to hold daily data to generate line chart for Admit 4/2020-current
const dataLineChartInp = [658, 898, 435, 898, 74, 4598, 6543, 6, 9879]; //array to hold daily data to generate line chart for Inpatients 4/2020-current


//number threshold levels so that the numbers can change colors based on their value

const EDDataHighThreshold = 500; //threshold at which number changes color
const EDDataLowThreshold = 150;
const AdmitDataHighThreshold = 100;//threshold at which number changes color
const AdmitDataLowThreshold = 50;
const InptDataHighThreshold = 300;//threshold at which number changes color
const InptDataLowThreshold = 100;



$(document).ready(
    function () {

        //Pie Charts
        const medSurgGraphEl = $('#medSurgBeds');  //Referencing the block for Medical Surgical bed data.
        const icuGraphEl = document.getElementById('IcuBeds'); //referencing the block for ICU data
        const ventGraphEl = $('#vents'); //referencing the block for ventilator data
        const pieChartLabels = ["Available", "COVID-19 +", "Other"];


        //Line graph

        const covidLineEl = document.getElementById('covidLine'); //referencing the block for the three covid positive lines
        const lineGraphLabels = ["day1", "day2", "day3", "day4", "day5"]; //x axis labels for line dataset, Dates
        const lineGraphLineED = []; //line labels for ED patients line
        const lineGraphLineAd = []; //line labels for Admitted patients lines
        const linegraphlineInp = []; //line label for inpatients line



        //current date in header

        function getCurrentDay() {
            const currentDay = moment().format('dddd, MMMM Do, YYYY');
            $('#currentDay').text(currentDay);
        }
        console.log(currentDay);


        //place the current day/date in the header field

        getCurrentDay();


        //For loops to get the last value in the field

        function positivePtsED() {
            let EDNumberLength = dataEDNumber.length;
            for (var i = 0; i < EDNumberLength; i++) {
                var item = dataEDNumber[i];

                console.log('Ed Number is ' +item);

            }
        }


        function positiveAdmissions() {
            let AdmitNumberLength = dataAdNumber.length;
            for (var i = 0; i < AdmitNumberLength; i++) {
                var item = dataAdNumber[i];
                console.log('Admit number is '+item);
            }
        }

        function positiveInpatients() {
            let InptNumberLength = dataInptNumber.length;
            for (var i = 0; i < InptNumberLength; i++) {
                var item = dataInptNumber[i];
                console.log("inpt number is " +item);
            }
        }

        positivePtsED();



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
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: dataLineChartED
                    },
                    {
                        label: lineGraphLineAd,
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: dataLineChartAd
                    },

                    {
                        label: linegraphlineInp,
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: dataLineChartInp
                    }]

            }

        });
    });
