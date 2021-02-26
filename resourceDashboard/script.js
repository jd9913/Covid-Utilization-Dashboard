const getData = () => {
	$.getJSON("../data/hospital.json", (hospitalData) => {
		let hospitalDataClean = Object.values(hospitalData);
		console.log(hospitalData);
		console.log(hospitalDataClean);

		populateAllVariables(hospitalDataClean);
	});
};

let dataLineChartMS = []; //array to hold daily data to generate line chart for ED patients 4/2020-current
let dataLineChartVent = []; //array to hold daily data to generate line chart for Admit 4/2020-current
let dataLineChartIcu = []; //array to hold daily data to generate line chart for Inpatients 4/2020-current

let dateFilter = "4/12/2020";

$("#lineDateFilter").text(dateFilter);

//colors for the graphs

const color1 = "#ff6e54";
const color2 = "#444e86";
const color3 = "#dd5182";
const color4 = "#955196";
const fontColor = "#003f5c";

//Pie Charts
const medSurgGraphEl = $("#medSurgBeds"); //Referencing the block for Medical Surgical bed data.
const icuGraphEl = document.getElementById("IcuBeds"); //referencing the block for ICU data
const ventGraphEl = $("#vents"); //referencing the block for ventilator data
const pieChartLabels = ["Available", "COVID-19 +", "Other"];

//Line graph

const covidLineEl = document.getElementById("covidLine"); //referencing the block for the three covid positive lines
let lineGraphLabels = []; //x axis labels for line dataset, Dates
let lineGraphLineMS = ["Med/Surg Covid +"]; //line labels for MS In use Covid line
let lineGraphLineVent = ["Vent Covid +"]; //line labels for Vent in use Covid lines
let lineGraphLineIcu = ["ICU Covid +"]; //line label for icu in use covid line

//current date in header

function getCurrentDay() {
	const event = new Date(Date.now());
	const options = { year: "numeric", month: "long", day: "numeric" };
	let currentDay = event.toLocaleDateString(undefined, options);

	$("#currentDay").text("Today's Date: " + currentDay);
}

//place the current day/date in the header field

getCurrentDay();

getData();

function populateAllVariables(allData1) {
	let validDates = allData1.filter(function (data) {
		return new Date(dateFilter) <= new Date(data.DataDate);
	});

	let allData = validDates.sort(function (a, b) {
		let date1 = new Date(a.DataDate);
		let date2 = new Date(b.DataDate);

		return date1 - date2; //sort string ascending
	});

	dataLineChartMS = allData.map((data) => {
		return data.medSurg_InUseCovid;
	});

	dataLineChartVent = allData.map((data) => {
		return data.vent_InUseCovid;
	});

	dataLineChartIcu = allData.map((data) => {
		return data.icuAdult_InUseCovid;
	});

	lineGraphLabels = allData.map((data) => {
		return new Date(data.DataDate);
	});

	function popLastDate() {
		const options = { year: "numeric", month: "short", day: "numeric" };

		const lastDate1 = lineGraphLabels.slice(-1);
		const D = new Date(lastDate1);

		const lastDate =
			D.getMonth() + 1 + "/" + D.getDate() + "/" + D.getFullYear();

		$("#lastDataDate").text("DATA SNAPSHOT AS OF: " + lastDate);
	}

	popLastDate();

	//filter and reduce the arrays to pull the latest bed capacity numbers to match the date on the pie charts

	let msCapacityAll = allData.map((data) => {
		return [data.medSurg_Capacity, new Date(data.DataDate)];
	});

	function msCapacityNum() {
		let max1 = msCapacityAll.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}
	let msCapacity = msCapacityNum();

	$("#msCapacity").text(msCapacity);

	let icuCapacityAll = allData.map((data) => {
		return [data.icuAdult_Capacity, new Date(data.DataDate)];
	});
	function icuCapacityNum() {
		let max1 = icuCapacityAll.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});
		return [max1[0]];
	}

	let icuCapacity = icuCapacityNum();

	$("#icuCapacity").text(icuCapacity);

	let ventCapacityAll = allData.map((data) => {
		return [data.vent_Capacity, new Date(data.DataDate)];
	});

	function ventCapacityNum() {
		let max1 = ventCapacityAll.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});
		return [max1[0]];
	}
	let ventCapacity = ventCapacityNum();

	$("#ventCapacity").text(ventCapacity);

	//filtering for medsurge data to populate pie charts
	let medsurgDataAvail = allData.map((data) => {
		return [data.medSurgBed_Avail, new Date(data.DataDate)];
	});

	function medsurgPieAvail() {
		let max1 = medsurgDataAvail.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let medsurgDataPos = allData.map((data) => {
		return [data.medSurg_InUseCovid, new Date(data.DataDate)];
	});

	function medsurgPiePos() {
		let max1 = medsurgDataPos.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let medsurgDataOther = allData.map((data) => {
		return [data.MedSurg_InUseOther, new Date(data.DataDate)];
	});

	function medsurgPieOther() {
		let max1 = medsurgDataOther.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let icuDataAvail = allData.map((data) => {
		return [data.icuAdult_Avail, new Date(data.DataDate)];
	});

	function icuPieAvail() {
		let max1 = icuDataAvail.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let icuDataPos = allData.map((data) => {
		return [data.icuAdult_InUseCovid, new Date(data.DataDate)];
	});

	function icuPiePos() {
		let max1 = icuDataPos.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let icuDataOther = allData.map((data) => {
		return [data.icuAdult_InUseOther, new Date(data.DataDate)];
	});

	function icuPieOther() {
		let max1 = icuDataOther.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let ventDataAvail = allData.map((data) => {
		return [data.vent_Avail, new Date(data.DataDate)];
	});

	function ventPieAvail() {
		let max1 = ventDataAvail.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let ventDataPos = allData.map((data) => {
		return [data.vent_InUseCovid, new Date(data.DataDate)];
	});

	function ventPiePos() {
		let max1 = ventDataPos.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	let ventDataOther = allData.map((data) => {
		return [data.vent_InUseOther, new Date(data.DataDate)];
	});

	function ventPieOther() {
		let max1 = ventDataOther.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return [max1[0]];
	}

	//function to change date from UTC to common date

	let dateLabel = []; //needs to be in this place or line map does not work and time labels do not populate (don't know why)

	let time = lineGraphLabels.map(function (label, index, dateLabel) {
		const options = { year: "numeric", month: "short", day: "numeric" };
		dateLabel = new Date(lineGraphLabels[index]).toLocaleDateString(
			undefined,
			options
		);

		return dateLabel;
	});

	//functions to get the single points of data for numbers;

	let ventSingle = allData.map((data) => {
		return [data.vent_InUseCovid, new Date(data.DataDate)];
	});

	let icuSingle = allData.map((data) => {
		return [data.icuAdult_InUseCovid, new Date(data.DataDate)];
	});

	let msSingle = allData.map((data) => {
		return [data.medSurg_InUseCovid, new Date(data.DataDate)];
	});

	//reduces the object to the greatest DataDate(in UTC milliseconds) and returns only the value at index 0 which is value that is wanted

	function msMax() {
		let max1 = msSingle.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return parseInt(max1[0]); //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;
	}

	function ventMax() {
		let max1 = ventSingle.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});

		return parseInt(max1[0]); //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;
	}

	function icuMax() {
		let max1 = icuSingle.reduce((a, b) => {
			return a[1] > b[1] ? a : b;
		});
		return parseInt(max1[0]); //function being reduced has 2 key/value pairs in each object.  reducing to max in value index 1 then returning value index 0;
	}

	let dataMSNumber = msMax(); //number of daily + patients seen in ED
	let dataVentNumber = ventMax(); // number of daily + patients admitted
	let dataIcuNumber = icuMax(); //number of daily + patients as inpatients

	let dataMSPie = [medsurgPieAvail(), medsurgPiePos(), medsurgPieOther()]; //array to hold daily data to generate pie chart for medical surgical beds
	let dataIcuPie = [icuPieAvail(), icuPiePos(), icuPieOther()]; //array to hold daily data to generate pie chart for ICU beds
	let dataVentPie = [ventPieAvail(), ventPiePos(), ventPieOther()]; //array to hold daily data to generate pie chart for ventilated patients

	//To insert the numbers into the appropriate block

	function getMSNumber() {
		//referencing the block for the numbers at the top
		$("#covidMSNumber").text(dataMSNumber);
	}

	function getVentNumber() {
		//referencing the block for the numbers at the top
		$("#covidVentNumber").text(dataVentNumber);
	}

	function getIcuNumber() {
		//referencing the block for the numbers at the top
		$("#covidIcuNumber").text(dataIcuNumber);
	}

	//call the functions to insert the daily number fields above the graphs

	getMSNumber();
	getVentNumber();
	getIcuNumber();

	//4 graph data references
	var MSctx = medSurgGraphEl;
	var ICUctx = icuGraphEl;
	var Ventctx = ventGraphEl;
	var Linectx = covidLineEl;

	// Global + Custom Chart Config Options

	let options = {
		tooltipEvents: ["mousemove", "touchstart", "touchmove"],
		pointDot: true,
		pointDotRadius: 4,
		layout: {
			padding: 0,
		},
		responsive: true,
		legend: {
			display: true,
			position: "bottom",

			// Labels: {
			//     fontColor: fontColor,
			//     fontFamily: "'Arial','sans-serif', 'Helvetica'",
			//     fontSize: 10,
			//     generateLabels: true,
			// }
		},

		plugins: {
			labels: {
				showActualPercentages: true,
				position: "outside",
				fontColor: fontColor,
			},
		},
	};

	let lineOptions = {
		scales: {
			x: [
				{
					id: "x",
					type: "time",
					display: true,
				},
				{
					ticks: {
						time: {
							stepSize: 7,
							unit: "week",
						},
					},
				},
			],
			yAxes: [
				{
					ticks: {
						stepSize: 150,
						beginAtZero: true,
					},
				},
			],
		},

		tooltipEvents: ["mousemove", "touchstart", "touchmove"],
		pointDot: true,
		pointDotRadius: 4,
		layout: {
			padding: 0,
		},
		responsive: true,
		legend: {
			display: true,
			position: "bottom",

			Labels: {
				fontColor: fontColor,
				fontFamily: "'Arial','sans-serif', 'Helvetica'",
				fontSize: 10,
				generateLabels: true,
			},
		},
	};

	// med surg graph

	var medSurgGraph = new Chart(MSctx, {
		type: "pie",
		data: {
			labels: pieChartLabels,
			datasets: [
				{
					label: "Medical Surgical Bed Capacity Daily Snapshot",
					data: dataMSPie,
					backgroundColor: [color1, color2, color3],
				},
			],
		},
		options: options,
	});

	var ICUGraph = new Chart(ICUctx, {
		// ICU bed graph

		type: "pie",
		data: {
			labels: pieChartLabels,
			datasets: [
				{
					label: "ICU Bed Capacity Daily Snapshot",
					data: dataIcuPie,
					backgroundColor: [color1, color2, color3],
				},
			],
		},
		options: options,
	});

	// ventilated patients graph
	var ventGraph = new Chart(Ventctx, {
		type: "pie",
		data: {
			labels: pieChartLabels,
			datasets: [
				{
					label: "Ventilated Capacity Daily Snapshot",
					backgroundColor: [color1, color2, color3],
					data: dataVentPie,
				},
			],
		},
		options: options,
	});

	var lineGraphTime = new Chart(Linectx, {
		type: "line",
		data: {
			labels: time,

			datasets: [
				{
					label: lineGraphLineMS,
					borderColor: color1,
					fill: false,
					data: dataLineChartMS,
				},

				{
					label: lineGraphLineIcu,
					borderColor: color2,
					fill: false,
					data: dataLineChartIcu,
				},
				{
					label: lineGraphLineVent,
					borderColor: color3,
					fill: false,
					data: dataLineChartVent,
				},
			],
		},
		options: lineOptions,
	});
}
