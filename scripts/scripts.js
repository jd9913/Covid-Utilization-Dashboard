
//THIS FILE IS FOR TRANSFER TO WEBEOC


        const baseURL = "https://webeoc.maricopa.gov/eoc7/api/rest.svc";
        const boardURL = "/board/HCCapacity/display/dashboardData";
              
          function getData() {
       
            var data = new XMLHttpRequest();
            data.open('GET', baseURL + boardURL, false);
        
            data.onload = function () {
        
                if (this.status == 200) {
        
                    let allData = JSON.parse(this.responseText);
        
                    populateAllVariables(allData);
                }
            }
        
            data.send();
        };


//global variables for linking to webEOC data

let dataLineChartED = []; //array to hold daily data to generate line chart for ED patients 4/2020-current
let dataLineChartAd = []; //array to hold daily data to generate line chart for Admit 4/2020-current
let dataLineChartInp = []; //array to hold daily data to generate line chart for Inpatients 4/2020-current

let dateFilter = '4/12/2020';  //date after which data is rendered.

//number threshold levels so that the numbers can change colors based on their value

let EDDataHighThreshold = ""; //threshold at which number changes color
let EDDataLowThreshold = "";
let AdmitDataHighThreshold = "";//threshold at which number changes color
let AdmitDataLowThreshold = "";
let InptDataHighThreshold = "";//threshold at which number changes color
let InptDataLowThreshold = "";



//colors for the graphs

const color1 = '#FF00FF';
const color2 = '#00FACC';
const color3 = '#FFCC00';
const fontColor = '#504F4F';



//Pie Charts
const medSurgGraphEl = $('#medSurgBeds');  //Referencing the block for Medical Surgical bed data.
const icuGraphEl = document.getElementById('IcuBeds'); //referencing the block for ICU data
const ventGraphEl = $('#vents'); //referencing the block for ventilator data
const pieChartLabels = ["Available", "COVID-19 +", "Other"];


//Line graph

const covidLineEl = document.getElementById('covidLine'); //referencing the block for the three covid positive lines
let lineGraphLabels = []; //x axis labels for line dataset, Dates
let lineGraphLineED = ['COVID + ED']; //line labels for ED patients line
let lineGraphLineAd = ['COVID + Admits']; //line labels for Admitted patients lines
let lineGraphLineInp = ['COVID + Inpatients']; //line label for inpatients line


//current date in header

function getCurrentDay() {
    const event = new Date(Date.now());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let currentDay = event.toLocaleDateString(undefined, options);

    $('#currentDay').text(currentDay);
}


//place the current day/date in the header field

getCurrentDay();

//grab the data from a board
getData();


function populateAllVariables(allData1) {

    

    let validDates = allData1.filter(function (data, i) {

        return new Date(dateFilter) <= new Date(data.DataDate);
    })


    // })

    let allData = validDates.sort(function (a, b) {

        let date1 = new Date(a.DataDate);
        let date2 = new Date(b.DataDate);

        return (date1 - date2);//sort string ascending   
    })


    dataLineChartED = allData.map((data) => {

        return (data.edCovidPts);
    });


    dataLineChartAd = allData.map((data) => {

        return (data.covid_Admissions);
    });


    dataLineChartInp = allData.map((data) => {

        return (data.covid_Inpatients);
    });



    lineGraphLabels = allData.map((data) => {


        return new Date(data.DataDate);

    });



    //filtering for medsurge data to populate pie charts
    let medsurgDataAvail = allData.map((data) => {

        return [(data.medSurgBed_Avail), (new Date(data.DataDate))];
    });

    //console.log(medsurgDataAvail);

    function medsurgPieAvail() {
        let max1 = medsurgDataAvail.reduce((a, b) => {

            // console.log(a);
            // console.log(b);

            return a[1] > b[1] ? a : b;
        });

        //console.log(max1);

        return [max1[0]];
    }

    let medsurgDataPos = allData.map((data) => {
        return [(data.medSurg_InUseCovid), (new Date(data.DataDate))];
    });

    function medsurgPiePos() {
        let max1 = medsurgDataPos.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }

    let medsurgDataOther = allData.map((data) => {
        return [(data.MedSurg_InUseOther), (new Date(data.DataDate))];
    });


    function medsurgPieOther() {
        let max1 = medsurgDataOther.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }


    let icuDataAvail = allData.map((data) => {
        return [(data.icuAdult_Avail), (new Date(data.DataDate))];
    });


    function icuPieAvail() {
        let max1 = icuDataAvail.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }

    let icuDataPos = allData.map((data) => {
        return [(data.icuAdult_InUseCovid), (new Date(data.DataDate))];
    });


    function icuPiePos() {
        let max1 = icuDataPos.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }


    let icuDataOther = allData.map((data) => {
        return [(data.icuAdult_InUseOther), (new Date(data.DataDate))];
    });


    function icuPieOther() {
        let max1 = icuDataOther.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }

    let ventDataAvail = allData.map((data) => {
        return [(data.vent_Avail), (new Date(data.DataDate))];
    });

    function ventPieAvail() {
        let max1 = ventDataAvail.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }


    let ventDataPos = allData.map((data) => {
        return [(data.vent_InUseCovid), (new Date(data.DataDate))];
    });


    function ventPiePos() {
        let max1 = ventDataPos.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }

    let ventDataOther = allData.map((data) => {
        return [(data.vent_InUseOther), (new Date(data.DataDate))];
    });


    function ventPieOther() {
        let max1 = ventDataOther.reduce((a, b) => { return a[1] > b[1] ? a : b; });

        return [max1[0]];
    }


    //function to change date from UTC to common date

    let dateLabel = [];//needs to be in this place or line map does not work and time labels do not populate (don't know why)

    let time = lineGraphLabels.map(function (label, index, dateLabel) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateLabel = new Date(lineGraphLabels[index]).toLocaleDateString(undefined, options);

        return dateLabel;
    });


    //functions to get the single points of data for numbers;

    let adSingle = allData.map((data) => {

        return [(data.covid_Admissions), (new Date(data.DataDate))];
    });


    let inpSingle = allData.map((data) => {
        return [(data.covid_Inpatients), (new Date(data.DataDate))];
    });


    let edSingle = allData.map((data) => {
        return [(data.edCovidPts), (new Date(data.DataDate))];

    });

    //reduces the object to the greatest DataDate(in UTC milliseconds) and returns only the value at index 0 which is value that is wanted

    function edMax() {

        let max1 = edSingle.reduce((a, b) => {
            return a[1] > b[1] ? a : b;
        });

        return parseInt(max1[0])  //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;
    }

    function adMax() {
        let max1 = adSingle.reduce((a, b) => {
            // console.log(a);
            // console.log(b);
            return a[1] > b[1] ? a : b;
        });
        // console.log(max1);
        return parseInt(max1[0]) //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;

    }

    function inptMax() {
        let max1 = inpSingle.reduce((a, b) => {
            return a[1] > b[1] ? a : b;
        });
        return parseInt(max1[0]); //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;
    }


    let dataEDNumber = edMax();//number of daily + patients seen in ED
    let dataAdNumber = adMax();// number of daily + patients admitted
    let dataInptNumber = inptMax(); //number of daily + patients as inpatients

    let dataMSPie = [medsurgPieAvail(), medsurgPiePos(), medsurgPieOther()];   //array to hold daily data to generate pie chart for medical surgical beds
    let dataIcuPie = [icuPieAvail(), icuPiePos(), icuPieOther()];  //array to hold daily data to generate pie chart for ICU beds
    let dataVentPie = [ventPieAvail(), ventPiePos(), ventPieOther()];  //array to hold daily data to generate pie chart for ventilated patients



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

    let options = {
        // bezierCurve: true,
        // animation: true,
        // animationEasing: "easeOutQuart",
        // showScale: true,
        // tooltipEvents: ["mousemove", "touchstart", "touchmove"],
        // tooltipCornerRadius: 3,
        // pointDot: true,
        // pointDotRadius: 4,
        // datasets:
        //     { fill: false, },
        // scaleShowLine: true,
        // animationEasing: "easeOutBounce",
        // animateRotate: true,
        // animateScale: true,
        // responsive: true,
        // legend: {
        //     display: true,
        //     position: 'bottom',
        //     Labels: {
        //         fontColor: fontColor,
        //         fontFamily: "'Arial','sans-serif', 'Helvetica'",
        //         fontSize: 10,
        //        generateLabels: true,

        //     }
        // }

    };

    let lineOptions = {

        tooltipEvents: ["mousemove", "touchstart", "touchmove"],
        pointDot: true,
        pointDotRadius: 4,
        layout: {
            padding: 0,
        },
        responsive: true,
        legend: {
            display: true,
            position: 'bottom',

            Labels: {
                fontColor: fontColor,
                fontFamily: "'Arial','sans-serif', 'Helvetica'",
                fontSize: 10,
                generateLabels: true,
            }
        }
    };

    // med surg graph


    var medSurgGraph = new Chart(MSctx, {
        type: "pie",
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: "Medical Surgical Bed Capacity Daily Snapshot",
                data: dataMSPie,
                backgroundColor: [color1, color2, color3],

            }]

        },
        options: lineOptions
    });


    var ICUGraph = new Chart(ICUctx, {

        // ICU bed graph

        type: "pie",
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: "ICU Bed Capacity Daily Snapshot",
                data: dataIcuPie,
                backgroundColor: [color1, color2, color3],


            }]
        },
        options: lineOptions
    });

    // ventilated patients graph
    var ventGraph = new Chart(Ventctx, {
        type: "pie",
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: "Ventilated Capacity Daily Snapshot",
                backgroundColor: [color1, color2, color3],
                data: dataVentPie,

            }]
        },
        options: lineOptions
    });

    console.log(dataLineChartAd);

    var lineGraphTime = new Chart(Linectx, {

        type: "line",
        data: {

            labels: time,


            datasets: [
                {
                    label: lineGraphLineED,
                    borderColor: color1,
                    fill: false,
                    data: dataLineChartED

                },

                {
                    label: lineGraphLineInp,
                    borderColor: color2,
                    fill: false,
                    data: dataLineChartInp
                },
                {
                    label: lineGraphLineAd,
                    borderColor: color3,
                    fill: false,
                    data: dataLineChartAd
                }
            ]

        },
        options: lineOptions
    });

}