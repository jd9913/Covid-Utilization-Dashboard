
const baseURL = "https://webeoc.maricopa.gov/eoc7/api/rest.svc";
const boardURL = "/board/Hospital_Capacity/display/dashboardData";

//for credentials for external XML call

function openWebEocSession(creds) {

    creds = {
        'username': username,
        'password': password,
        'position': position,
        'incident': incident
    };



    var data = new XMLHttpRequest();
    data.open('POST', baseURL + '/sessions', false);
    data.withCredentials = true;
    data.setRequestHeader('Content-type', 'application/json');
    Origin: https://www.maricopa.gov;

    data.send(creds);
};

// for external XML call

function getData() {
    openWebEocSession();
    var data = new XMLHttpRequest();
    data.open('GET', baseURL + boardURL, true);
    data.onload = function () {
        if (this.status == 200) {
            let allData = JSON.parse(this.responseText);
            populateAllVariables(allData);
        }
    }
    data.send();


}

getData();


//for internal to webEOC

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
}


.//for getting the file code as example data

function getData() {

    var data = new XMLHttpRequest();
    data.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let allData = JSON.parse(this.responseText);
        }
    };

    data.open('GET', "./Data/simulatedData.json", true);
    data.send();

    populateAllVariables(allData);
}


function getData() {
    var data = new XMLHttpRequest();
    data.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            allData = JSON.parse(this.responseText);
        }
    };
    data.open('GET', 'http://localhost:8000/simulatedData.json', true);
    data.send();
    populateAllVariables(allData);
}

