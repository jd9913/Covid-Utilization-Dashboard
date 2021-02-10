
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

//XML call for the thresholds data.  Tested and working in WebEOC
            
function getThresholds(){     

const boardURL2 = "/board/HCCapacity/display/thresholds";
              
          function getData() {
       
            var data = new XMLHttpRequest();
            data.open('GET', baseURL + boardURL2, false);
        
            data.onload = function () {
        
                if (this.status == 200) {
        
                    let thresholdData = JSON.parse(this.responseText);
        
                    console.log(thresholdData);
                }
            }
        
            data.send();
        };
    }