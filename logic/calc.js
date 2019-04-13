// Itarate over indexes and calc an array, unpacking {itarate} items for every index
function reduce(indexes, func, params) {
    return indexes.reduce((accum, i) => {
        let p = params;
        p.map(param => {
            if (param instanceof Object) {
                if (param.interate) {
                    return param.value[i];
                }
            }
            return param;
        });

        accum.push(func(...p));
        return accum;
    }, []);
}


class calcValuesBuilder {
    oCapatitor(value)     { this.oCapatitor     = value; return this; }
    tAnnualArr(value)     { this.tAnnualArr     = value; return this; }
    thEl(value)           { this.thEl           = value; return this; }
    sReference(value)     { this.sReference     = value; return this; }
    vRappliedArr(value)   { this.vRappliedArr   = value; return this; }
    vRatedArr(value)      { this.vRatedArr      = value; return this; }
    eA(value)             { this.eA             = value; return this; }
    boardAmdArr(value)    { this.boardAmdArr    = value; return this; }
    yTCy(value)           { this.yTCy           = value; return this; }
    nAnnualCy(value)      { this.nAnnualCy      = value; return this; }
    oCyArr(value)         { this.oCyArr         = value; return this; }
    tCyclingArr(value)    { this.tCyclingArr    = value; return this; }
    maxCyclingArr(value)  { this.maxCyclingArr  = value; return this; }
    yMech(value)          { this.yMech          = value; return this; }
    gRMSArr(value)        { this.gRMSArr        = value; return this; }
    placement(value)      { this.placement      = value; return this; }
    applicationArr(value) { this.applicationArr = value; return this; }
    ruggedising(value)    { this.ruggedising    = value; return this; }
    sensitivity(value)    { this.sensitivity    = value; return this; }
}


function calculate (values) {
    
    let oCapatitor     = values.oCapatitor;
    let tAnnualArr     = values.tAnnualArr;
    let thEl           = values.thEl;
    let sReference     = values.sReference;
    let vRappliedArr   = values.vRappliedArr;
    let vRatedArr      = values.vRatedArr;
    let eA             = values.eA;
    let boardAmdArr    = values.boardAmdArr;
    let yTCy           = values.yTCy;
    let nAnnualCy      = values.nAnnualCy;
    let oCyArr         = values.oCyArr;
    let tCyclingArr    = values.tCyclingArr;
    let maxCyclingArr  = values.maxCyclingArr;
    let yMech          = values.yMech;
    let gRMSArr        = values.gRMSArr;
    let placement      = values.placement;
    let applicationArr = values.applicationArr;
    let ruggedising    = values.ruggedising;
    let sensitivity    = values.sensitivity;


    let phasesArr = Array.from(domsHolder.phaseBlocks.keys());


    let thermoElectroArr = reduce(phasesArr, calcThermoElectro, [
        thEl,
        sReference,
        {iterate: true, value: vRappliedArr},
        {iterate: true, value: vRatedArr},
        eA,
        {iterate: true, value: boardAmdArr}
    ]);

    let tCyArr = reduce(phasesArr, calcTCy, [
        yTCy,
        nAnnualCy,
        {iterate: true, value: tAnnualArr},
        {iterate: true, value: oCyArr},
        sReference,
        {iterate: true, value: tCyclingArr},
        {iterate: true, value: maxCyclingArr}
    ]);

    let mechanicalArr = reduce(phasesArr, calcMechanical, [
        yMech,
        {itarate: true, value: gRMSArr}
    ]);

    let inducedArr = reduce(phasesArr, calcInduced, [
        placement,
        {itarate: true, value: applicationArr},
        ruggedising,
        sensitivity
    ]);


    let physical = calcPhysical(
        oCapatitor,
        tAnnualArr,
        thermoElectroArr,
        tCyArr,
        mechanicalArr,
        inducedArr
    );


    return physical;
}
