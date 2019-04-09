// Formulas


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
let tAnnualArr = [1, 2, 3];
let thEl = 4;
let sReference = 4;
let vRappliedArr = [1, 2, 3];
let vRatedArr = [1, 2, 3];
let eA = 4;
let boardAmdArr = [1, 2, 3];

let yTCy = 4;
let nAnnualCy = 4;

let oCyArr = [1, 2, 3];
let tCyclingArr = [1, 2, 3];
let maxCyclingArr = [1, 2, 3];

let yMech = 4;
let gRMSArr = [1, 2, 3];

let placement = 4;
let applicationArr = [1, 2, 3];
let ruggedising = 4;
let sensitivity = 4;


let thermoElectroArr = phasesArr.reduce((accum, i) => {
    accum.push(calcThermoElectro(thEl, sReference, vRappliedArr[i], vRatedArr[i], eA, boardAmdArr[i]));
    return accum;
}, []);    // Check if this reduce work


let tCyArr = phasesArr.reduce((accum, i) => {
    accum.push(calcTCy(yTCy, nAnnualCy, tAnnualArr[i], oCy, sReference, tCyclingArr[i], maxCyclingArr[i]));
    return accum;
}, []);


let mechanicalArr = phasesArr.reduce((accum, i) => {
    accum.push(calcMechanical(yMech, gRMSArr));
    return accum;
}, []);


let inducedArr = phasesArr.reduce((accum, i) => {
    accum.push(calcInduced(placement, applicationArr[i], ruggedising, sensitivity));
}, []);


calcPhysical(5, tAnnualArr, thermoElectroArr, tCyArr, mechanicalArr, inducedArr);
