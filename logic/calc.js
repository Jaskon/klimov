// Iterate over indexes and calc an array, unpacking {iterate} items for every index
function reduce(indexes, func, params) {
    return indexes.reduce((accum, i) => {
        let p = params;
        p = p.map(param => {
            if (param instanceof Object) {
                if (param.iterate) {
                    return param.value[i];
                }
            }
            return param;
        });

        accum.push(func(...p));
        return accum;
    }, []);
}

// Checking condition (on all elements)
function anyFailed(elems, condition) {
    for (let i = 0; i < elems.length; i++) {
        if (!condition(elems[i])) {
            return i;
        }
    }
    return false;
}

function zipToObjs(arr) {
    return arr.value.map((value, i) => {
        return { value: value, uiObj: arr.uiObj[i] };
    });
}

// For generize
function pushErr(errors, uiObj, message) {
    errors.push({ uiObj, message });
}

function isNumber(value) {
    return !(!(typeof value == 'number') || isNaN(value));
}


class calcValuesBuilder {
    // Physical

    oCapacitor(value, uiObj)           { this.oCapacitor           = { value, uiObj }; return this; }
    thEl(value, uiObj)                 { this.thEl                 = { value, uiObj }; return this; }
    sReference(value, uiObj)           { this.sReference           = { value, uiObj }; return this; }
    eA(value, uiObj)                   { this.eA                   = { value, uiObj }; return this; }
    yTCy(value, uiObj)                 { this.yTCy                 = { value, uiObj }; return this; }
    nAnnualCy(value, uiObj)            { this.nAnnualCy            = { value, uiObj }; return this; }
    yMech(value, uiObj)                { this.yMech                = { value, uiObj }; return this; }
    placement(value, uiObj)            { this.placement            = { value, uiObj }; return this; }
    sensitivity(value, uiObj)          { this.sensitivity          = { value, uiObj }; return this; }
    tAnnualArr(value, uiObj)           { this.tAnnualArr           = { value, uiObj }; return this; }
    vRappliedArr(value, uiObj)         { this.vRappliedArr         = { value, uiObj }; return this; }
    vRatedArr(value, uiObj)            { this.vRatedArr            = { value, uiObj }; return this; }
    boardAmdArr(value, uiObj)          { this.boardAmdArr          = { value, uiObj }; return this; }
    oCyArr(value, uiObj)               { this.oCyArr               = { value, uiObj }; return this; }
    tCyclingArr(value, uiObj)          { this.tCyclingArr          = { value, uiObj }; return this; }
    maxCyclingArr(value, uiObj)        { this.maxCyclingArr        = { value, uiObj }; return this; }
    gRMSArr(value, uiObj)              { this.gRMSArr              = { value, uiObj }; return this; }
    // Array of arrays (marks)
    applicationPMarksArr(value, uiObj) { this.applicationPMarksArr = { value, uiObj }; return this; }
    // Array of marks
    ruggedisingPMarks(value, uiObj)    { this.ruggedisingPMarks    = { value, uiObj }; return this; }


    //PM

    qaManufacturer(value, uiObj)       { this.qaManufacturer       = { value, uiObj }; return this; }
    qaComponent(value, uiObj)          { this.qaComponent          = { value, uiObj }; return this; }
    zer(value, uiObj)                  { this.zer                  = { value, uiObj }; return this; }


    // Process

    specificationMarks(value, uiObj)   { this.specificationMarks   = { value, uiObj }; return this; }
    designMarks(value, uiObj)          { this.designMarks          = { value, uiObj }; return this; }
    manufactAsemblMarks(value, uiObj)  { this.manufactAsemblMarks  = { value, uiObj }; return this; }
    integrEquipMarks(value, uiObj)     { this.integrEquipMarks     = { value, uiObj }; return this; }
    integrSystetMarks(value, uiObj)    { this.integrSystetMarks    = { value, uiObj }; return this; }
    exploitationMarks(value, uiObj)    { this.exploitationMarks    = { value, uiObj }; return this; }
    advancedMarks(value, uiObj)        { this.advancedMarks        = { value, uiObj }; return this; }
}


function calculate(v) {

    // Physical
    let oCapacitor           = v.oCapacitor.value;
    let tAnnualArr           = v.tAnnualArr.value;
    let thEl                 = v.thEl.value;
    let sReference           = v.sReference.value;
    let vRappliedArr         = v.vRappliedArr.value;
    let vRatedArr            = v.vRatedArr.value;
    let eA                   = v.eA.value;
    let boardAmdArr          = v.boardAmdArr.value;
    let yTCy                 = v.yTCy.value;
    let nAnnualCy            = v.nAnnualCy.value;
    let oCyArr               = v.oCyArr.value;
    let tCyclingArr          = v.tCyclingArr.value;
    let maxCyclingArr        = v.maxCyclingArr.value;
    let yMech                = v.yMech.value;
    let gRMSArr              = v.gRMSArr.value;
    let placement            = v.placement.value;
    let sensitivity          = v.sensitivity.value;
    let applicationPMarksArr = v.applicationPMarksArr.value;
    let ruggedisingPMarks    = v.ruggedisingPMarks.value;
    // PM
    let qaManufacturer       = v.qaManufacturer.value;
    let qaComponent          = v.qaComponent.value;
    let zer                  = v.zer.value;
    //Process
    let specificationMarks   = v.specificationMarks.value;
    let designMarks          = v.designMarks.value;
    let manufactAsemblMarks  = v.manufactAsemblMarks.value;
    let integrEquipMarks     = v.integrEquipMarks.value;
    let integrSystetMarks    = v.integrSystetMarks.value;
    let exploitationMarks    = v.exploitationMarks.value;
    let advancedMarks        = v.advancedMarks.value;





    // Errors array to return in case if something happened
    let errors = [];


    //////////////////////////////
    //   Check all conditions   //
    //////////////////////////////


    // All number fields should exist and should be numbers
    if (!isNumber(nAnnualCy)) { pushErr(errors, v.nAnnualCy.uiObj,      v.nAnnualCy.uiObj.name + ' должно быть числом') }
    zipToObjs(v.tAnnualArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должна быть числом') }
    });
    zipToObjs(v.vRappliedArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должно быть числом') }
    });
    zipToObjs(v.vRatedArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должно быть числом') }
    });
    zipToObjs(v.boardAmdArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должна быть числом') }
    });
    zipToObjs(v.oCyArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должна быть числом') }
    });
    zipToObjs(v.tCyclingArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должна быть числом') }
    });
    zipToObjs(v.maxCyclingArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должна быть числом') }
    });
    zipToObjs(v.gRMSArr).forEach((one, i) => {
        if (!isNumber(one.value)) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) +  ' должно быть числом') }
    });

    // Throw exception with all the errors found
    if (errors.length > 0) {
        throw errors;
    }

    // > 0
    if (nAnnualCy <= 0) { pushErr(errors, nAnnualCy, v.nAnnualCy.uiObj) }
    zipToObjs(v.tAnnualArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' ' + (i+1) + ' должна быть больше нуля') }
    });
    zipToObjs(v.vRappliedArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должно быть больше нуля') }
    });
    zipToObjs(v.tAnnualArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть больше нуля') }
    });
    zipToObjs(v.vRatedArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должно быть больше нуля') }
    });
    zipToObjs(v.oCyArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть больше нуля') }
    });
    zipToObjs(v.gRMSArr).forEach((one, i) => {
        if (one.value <= 0) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть больше нуля') }
    });

    // Temperature
    zipToObjs(v.boardAmdArr).forEach((one, i) => {
        if (one.value < -55 || one.value > 125) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть между -55 и 180') }
    });
    zipToObjs(v.tCyclingArr).forEach((one, i) => {
        if (one.value > 180) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть меньше 180') }
    });
    zipToObjs(v.maxCyclingArr).forEach((one, i) => {
        if (one.value > 125) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' должна быть меньше 125') }
    });
    zipToObjs(v.tCyclingArr).forEach((one, i) => {
        if (one.value < -273) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' не может быть меньше абсолютного нуля') }
    });
    zipToObjs(v.maxCyclingArr).forEach((one, i) => {
        if (one.value < -273) { pushErr(errors, one.uiObj, one.uiObj.name + ' фазы ' + (i+1) + ' не может быть меньше абсолютного нуля') }
    });

    // Throw exception with all the errors found
    if (errors.length > 0) {
        throw errors;
    }





    /////////////////////////
    //      Calculate      //
    /////////////////////////


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
        {iterate: true, value: gRMSArr}
    ]);

    let applicationArr = reduce(phasesArr, calcApplication, [
        {iterate: true, value: applicationPMarksArr}
    ]);

    let ruggedising = calcRuggedising(ruggedisingPMarks);

    let inducedArr = reduce(phasesArr, calcInduced, [
        placement,
        {iterate: true, value: applicationArr},
        ruggedising,
        sensitivity
    ]);


    let physical = calcPhysical(
        oCapacitor,
        tAnnualArr,
        thermoElectroArr,
        tCyArr,
        mechanicalArr,
        inducedArr
    );



    let partGrade = calcPartGrade(qaManufacturer, qaComponent, zer);


    let pM = calcPM(
        partGrade
    );


    processGradeMarksArray = [
        { contributionPhase: 0.08, marks: specificationMarks },
        { contributionPhase: 0.16, marks: designMarks },
        { contributionPhase: 0.2,  marks: manufactAsemblMarks },
        { contributionPhase: 0.1,  marks: integrEquipMarks },
        { contributionPhase: 0.1,  marks: integrSystetMarks },
        { contributionPhase: 0.18, marks: exploitationMarks },
        { contributionPhase: 0.18, marks: advancedMarks }
    ];

    // 0.08 * (calcAuditMark(specificationMarks) / calcMaxAuditMark(specificationMarks[0].pos, helpers.extractOneField(specificationMarks, 'value')));
    let processGrade = processGradeMarksArray.reduce((accum, one) => {
        let sum = one.contributionPhase * (calcAuditMark(one.marks) / calcMaxAuditMark(one.marks[0].pos, helpers.extractOneField(one.marks, 'value')));
        return accum + sum;
    }, 0);


    let process = calcProcess(
        processGrade
    );


    return physical * pM * process;
}
