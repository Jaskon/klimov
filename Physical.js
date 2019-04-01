//Класс Physical
class Physical {
    //Конструктор класса Physical
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity) {
        //Свойства класса Physical
        this.oCapacitor = oCapacitor;
        this.eA = eA;
        this.Seference = Seference;
        this.thEl = thEl;
        this.yMech = yMech;
        this.tCy = tCy;
        this.Sensitivity = Sensitivity;
    }
    //Метод класса Physical
    eat() {
        return 1;
    }
}
//Подкласс TAnnual класса Physical
class TAnnual extends Physical {
    //Конструктор класса TAnnual
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity, tAnnual, kol){
        super(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity);
        //Свойства класса TAnnual
        this.tAnnual = new Array();
        this.kol = kol;
    }
    //Метод класса TAnnual
    getVoice(kol, tAnnual) {
        var kol = prompt("Введите количество","");
        if(kol>5){
            document.getElementById("answer").innerHTML =  "Введено слишком большое количество";
        }
        else {
            for (var i = 0; i < this.kol; i++) {

                this.tAnnual[i] = +prompt("Введите число", "");
            }
            var s = 0;
            for (i = 0; i < this.kol; i++) {
                s += this.tAnnual[i];
            }
            document.getElementById("answer").innerHTML = "summ=" + s;
        }
    }
}
//Подкласс TermoElectro класса Physical
class TermoElectro extends Physical {
    //Конструктор класса TermoElectro
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity, Vappied, Vrated, boardAmd) {
        super(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity);
        //Свойства класса TermoElectro
        this.Vappied = Vappied;
        this.Vrated = Vrated;
        this.boardAmd = boardAmd;
    }
    //Метод класса TermoElectro
    getVoice() {
        var a = this.thEl * ((1/this.Seference*(this.Vappied/this.Vrated)))*Math.exp(11604*this.eA*(1/293-1/(this.boardAmd + 273)));
        return a;
    }
};
//Подкласс TcY класса Physical
class TcY extends Physical {
    //Конструктор класса TcY
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity, NannualCy, QcY, Tcycling, maxCycling) {
        super(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity);
        //Свойства класса TcY
        this.NannualCy = NannualCy;
        this.QcY = QcY;
        this.Tcycling = Tcycling;
        this.maxCycling = maxCycling;
    }
    //Метод класса TcY
    getVoc() {
        var b = this.tCy*(12*this.NannualCy/this.tAnnual)*(Math.min(this.QcY, 2)/this.Seference)*(this.Tcycling/20)^1.9*Math.exp(1414*(1/313-1/(this.maxCycling+273)));
        return b;
    }
};
//Подкласс Mechanical класса Physical
class Mechanical extends Physical {
    //Конструктор класса Mechanical
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity, gRMS) {
        super(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity);
        //Свойства класса Physical
        this.gRMS = gRMS;
    }
    //Метод класса Mechanical
    getVocI() {
        var c = this.yMech * Math.pow((this.gRMS*2),2);
        return c;
    }
};
//Подкласс Induced класса Physical
class Induced extends Physical {
    //Конструктор класса Induced
    constructor(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity, Placement, Application, Ruggedising) {
        super(oCapacitor, eA, Seference, thEl, yMech, tCy, Sensitivity);
        //Свойства класса Induced
        this.Placement = Placement;
        this.Application = Application;
        this.Ruggedising = Ruggedising;
    }
    //Метод класса Induced
    getVocE() {
        var d = Math.pow((this.Placement * this.Application * this.Ruggedising),(0.511 * Math.log(this.Sensitivity)));
        return d;
    }
};
//Создание объекта TermoElectro
var tannual = new TAnnual(10, 23, 2,1, 3,4,2,3, 5);
//Создание объекта TcY
var physical = new Physical(2, 12, 13, 5, 1, 6, 7);
console.log(physical);
//Создание объекта TermoElectro
var termoElectro = new TermoElectro(10, 23, 2,1, 3,4,2,3,2,2,2,2);
//Создание объекта TcY
var tcY = new TcY(2, 12, 13, 5, 1, 6, 7, 8, 12,3,3,2);
//Создание объекта mechanical
var mechanical = new Mechanical(5, 43,1, 5, 2,2,12,1,1,3);
//Создание объекта induced
var induced = new Induced(5,1, 31, 3,3,2,2, 7, 8, 8, 6, 3);
console.log(termoElectro.oCapacitor);
console.log(tcY.getVoc());
console.log(termoElectro);








function calcPhysical(oCapacitor, tAnnaulArr, thermoElectroArr, tCyArr, mechanicalArr, inducedArr) {
    let sum = Array.from(tAnnaulArr.keys()).reduce((accum, i) => {
        return accum + (tAnnaulArr[i] / 8760) * (thermoElectroArr[i] + tCyArr[i] + mechanicalArr[i]) * inducedArr[i];
    }, 0);

    return oCapacitor * sum;
}


function calcThermoElectro(thEl, sReference, vRapplied, vRated, eA, boardAmd) {
    return thEl * Math.pow((1 / sReference) * (vRapplied / vRated), 3) * Math.exp(11604 * eA * (1 / 293) - (1 / boardAmd + 273));
}


function calcTCy(yTCy, nAnnualCy, tAnnual, oCy, sReference, tCycling, maxCycling) {
    return yTCy * (12 * nAnnualCy / tAnnaul) * Math.pow(Math.min(oCy, 2) / sReference, 1/3) * Math.pow(tCycling / 20, 1.9) * Math.exp(1414 * ((1 / 313) - (1 / (maxCycling + 273))));
}


function calcMechanical(yMech, gRMS) {
    return yMech * Math.pow(gRMS / 0.5, 1.5);
}


function calcInduced(placement, application, ruggedising, sensitivity) {
    return Math.pow(placement * application * ruggedising, 0.511 * Math.log(sensitivity));
}


// Test data

let phases = 3;
let phasesArr = Array.from(phases.keys());


// Data from doms. Will be gotten from 'ThermoElectro' class getters (or from te.dom directly?)
let tAnnaulArr = [1, 2, 3];
let thEl = 4;
let sReference = 4;
let vRappliedArr = [1, 2, 3];
let vRatedArr = [1, 2, 3];
let eA = 4;
let boardAmdArr = [1, 2, 3];

let thermoElectroArr = phasesArr.reduce((accum, i) => {
    accum.push(calcThermoElectro(thEl, sReference, vRappliedArr[i], vRatedArr[i], eA, boardAmdArr[i]));
    return accum;
}, []);    // Check if this reduce work


let yTCy = 4;
let nAnnualCy = 4;
let tAnnaulArr = [1, 2, 3];    // Repeated?

let oCyArr = [1, 2, 3];
let tCyclingArr = [1, 2, 3];
let maxCyclingArr = [1, 2, 3];

let tCyArr = phasesArr.reduce((accum, i) => {
    accum.push(calcTCy(yTCy, nAnnualCy, tAnnaulArr[i], oCy, sReference, tCyclingArr[i], maxCyclingArr[i]));
    return accum;
}, []);


let yMech = 4;
let gRMSArr = [1, 2, 3];

let mechanicalArr = phasesArr.reduce((accum, i) => {
    accum.push(calcMechanical(yMech, gRMSArr));
    return accum;
}, []);


let placement = 4;
let applicationArr = [1, 2, 3];
let ruggedising = 4;
let sensitivity = 4;

let inducedArr = phasesArr.reduce((accum, i) => {
    accum.push(calcInduced(placement, applicationArr[i], ruggedising, sensitivity));
}, []);


calcPhysical(5, tAnnaulArr, thermoElectroArr, tCyArr, mechanicalArr, inducedArr);
