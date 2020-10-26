const allData = require('././data/hospital.json');






let dataEDNumber = 0;//number of daily + patients seen in ED
let dataAdNumber = 0;// number of daily + patients admitted
let dataInptNumber = 0; //number of daily + patients as inpatients


class SingleValue {
    constructor(dataid, dataPoint) {

        this.dataid = dataid;
        this.dataPoint = dataPoint;

    }
}

const dataEDNumber = new SingleValue();
const dataAdNumber = new SingleValue();
const dataInptNumber = new SingleValue();