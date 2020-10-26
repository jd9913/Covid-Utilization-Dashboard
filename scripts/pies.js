



const allData = require('././data/hospital.json');




let dataMSPie = [];   //array to hold daily data to generate pie chart for medical surgical beds
let dataIcuPie = [];  //array to hold daily data to generate pie chart for ICU beds
let dataVentPie = [];  //array to hold daily data to generate pie chart for ventilated patients


//Pie Charts
const medSurgGraphEl = $('#medSurgBeds');  //Referencing the block for Medical Surgical bed data.
const icuGraphEl = document.getElementById('IcuBeds'); //referencing the block for ICU data
const ventGraphEl = $('#vents'); //referencing the block for ventilator data
const pieChartLabels = ["Available", "COVID-19 +", "Other"];