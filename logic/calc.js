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


class calcValuesBuilder {
    // Physical

    oCapatitor(value, errObj)           { this.oCapatitor           = { value, errObj }; return this; }
    thEl(value, errObj)                 { this.thEl                 = { value, errObj }; return this; }
    sReference(value, errObj)           { this.sReference           = { value, errObj }; return this; }
    eA(value, errObj)                   { this.eA                   = { value, errObj }; return this; }
    yTCy(value, errObj)                 { this.yTCy                 = { value, errObj }; return this; }
    nAnnualCy(value, errObj)            { this.nAnnualCy            = { value, errObj }; return this; }
    yMech(value, errObj)                { this.yMech                = { value, errObj }; return this; }
    placement(value, errObj)            { this.placement            = { value, errObj }; return this; }
    sensitivity(value, errObj)          { this.sensitivity          = { value, errObj }; return this; }
    tAnnualArr(value, errObj)           { this.tAnnualArr           = { value, errObj }; return this; }
    vRappliedArr(value, errObj)         { this.vRappliedArr         = { value, errObj }; return this; }
    vRatedArr(value, errObj)            { this.vRatedArr            = { value, errObj }; return this; }
    boardAmdArr(value, errObj)          { this.boardAmdArr          = { value, errObj }; return this; }
    oCyArr(value, errObj)               { this.oCyArr               = { value, errObj }; return this; }
    tCyclingArr(value, errObj)          { this.tCyclingArr          = { value, errObj }; return this; }
    maxCyclingArr(value, errObj)        { this.maxCyclingArr        = { value, errObj }; return this; }
    gRMSArr(value, errObj)              { this.gRMSArr              = { value, errObj }; return this; }
    // Array of arrays (marks)
    applicationPMarksArr(value, errObj) { this.applicationPMarksArr = { value, errObj }; return this; }
    // Array of marks
    ruggedisingPMarks(value, errObj)    { this.ruggedisingPMarks    = { value, errObj }; return this; }


    //PM

    qaManufacturer(value, errObj)       { this.qaManufacturer       = { value, errObj }; return this; }
    qaComponent(value, errObj)          { this.qaComponent          = { value, errObj }; return this; }
    raComponent(value, errObj)          { this.raComponent          = { value, errObj }; return this; }
    zer(value, errObj)                  { this.zer                  = { value, errObj }; return this; }


    // Process

    specificationMarks(value, errObj)   { this.specificationMarks   = { value, errObj }; return this; }
    designMarks(value, errObj)          { this.designMarks          = { value, errObj }; return this; }
    manufactAsemblMarks(value, errObj)  { this.manufactAsemblMarks  = { value, errObj }; return this; }
    integrEquipMarks(value, errObj)     { this.integrEquipMarks     = { value, errObj }; return this; }
    integrSystetMarks(value, errObj)    { this.integrSystetMarks    = { value, errObj }; return this; }
    exploitationMarks(value, errObj)    { this.exploitationMarks    = { value, errObj }; return this; }
    advancedMarks(value, errObj)        { this.advancedMarks        = { value, errObj }; return this; }
}


function calculate(values) {
    
    // Physical
    let oCapatitor           = values.oCapatitor.value;
    let tAnnualArr           = values.tAnnualArr.value;
    let thEl                 = values.thEl.value;
    let sReference           = values.sReference.value;
    let vRappliedArr         = values.vRappliedArr.value;
    let vRatedArr            = values.vRatedArr.value;
    let eA                   = values.eA.value;
    let boardAmdArr          = values.boardAmdArr.value;
    let yTCy                 = values.yTCy.value;
    let nAnnualCy            = values.nAnnualCy.value;
    let oCyArr               = values.oCyArr.value;
    let tCyclingArr          = values.tCyclingArr.value;
    let maxCyclingArr        = values.maxCyclingArr.value;
    let yMech                = values.yMech.value;
    let gRMSArr              = values.gRMSArr.value;
    let placement            = values.placement.value;
    let sensitivity          = values.sensitivity.value;
    let applicationPMarksArr = values.applicationPMarksArr.value;
    let ruggedisingPMarks    = values.ruggedisingPMarks.value;
    // PM
    let qaManufacturer       = values.qaManufacturer.value;
    let qaComponent          = values.qaComponent.value;
    let raComponent          = values.raComponent.value;
    let zer                  = values.zer.value;
    //Process
    let specificationMarks   = values.specificationMarks.value;
    let designMarks          = values.designMarks.value;
    let manufactAsemblMarks  = values.manufactAsemblMarks.value;
    let integrEquipMarks     = values.integrEquipMarks.value;
    let integrSystetMarks    = values.integrSystetMarks.value;
    let exploitationMarks    = values.exploitationMarks.value;
    let advancedMarks        = values.advancedMarks.value;


    // Errors array to return in case if something happened
    let errors = [];

    // Returning failed elem if failed, true if succeed
    let ind = anyFailed(tAnnualArr, x => x > 0);
    // Check if its exactly 'true' (without type converting)
    if (ind !== false) {
        errors.push({
            obj: values.tAnnualArr.errObj[ind],
            message: values.tAnnualArr.errObj[ind].name + ' должен быть больше 0'
        });    // TODO: All errors handling
    }

    // Throw exception with all the errors found
    if (errors.length > 0) {
        throw errors;
    }




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
        oCapatitor,
        tAnnualArr,
        thermoElectroArr,
        tCyArr,
        mechanicalArr,
        inducedArr
    );



    let partGrade = calcPartGrade(qaManufacturer, qaComponent, raComponent, zer);


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

    // 0.08 * (calcAuditMark(specificationMarks) / calcMaxAuditMark(specificationMarks[0].pos, extractOneField(specificationMarks, 'value')));
    let processGrade = processGradeMarksArray.reduce((accum, one) => {
        let sum = one.contributionPhase * (calcAuditMark(one.marks) / calcMaxAuditMark(one.marks[0].pos, extractOneField(one.marks, 'value')));
        return accum + sum;
    }, 0);


    let process = calcProcess(
        processGrade
    );


    return physical * pM * process;
}
