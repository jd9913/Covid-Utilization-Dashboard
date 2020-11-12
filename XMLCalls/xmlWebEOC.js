
const baseURL = "https://webeoc.maricopa.gov/eoc7/api/rest.svc";
const boardURL = "/board/Hospital_Capacity/display/dashboardData";

getData();

           
        
        function getData() {

  

    var data = new XMLHttpRequest();
    data.open('GET', baseURL + boardURL, true);

    data.onload = function () {

        if (this.status == 200) {

            let allData = JSON.parse(this.responseText);

            populateAllVariables(allData);
        }
    }

    data.send();
    
};



// example code:

// datalabels: {
//     formatter: (value, ctx) => {
//         let datasets = ctx.chart.data.datasets;
//         if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
//             let sum = datasets[0].data.reduce((a, b) => a + b, 0);
//             let percentage = Math.round((value / sum) * 100) + '%';
//             console.log(percentage);
//             return percentage;
//         } else {
//             return percentage;
//         }
//     }
// }