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


class calcValuesBuilder {
    // Physical

    oCapatitor(value)           { this.oCapatitor           = value; return this; }
    tAnnualArr(value)           { this.tAnnualArr           = value; return this; }
    thEl(value)                 { this.thEl                 = value; return this; }
    sReference(value)           { this.sReference           = value; return this; }
    vRappliedArr(value)         { this.vRappliedArr         = value; return this; }
    vRatedArr(value)            { this.vRatedArr            = value; return this; }
    eA(value)                   { this.eA                   = value; return this; }
    boardAmdArr(value)          { this.boardAmdArr          = value; return this; }
    yTCy(value)                 { this.yTCy                 = value; return this; }
    nAnnualCy(value)            { this.nAnnualCy            = value; return this; }
    oCyArr(value)               { this.oCyArr               = value; return this; }
    tCyclingArr(value)          { this.tCyclingArr          = value; return this; }
    maxCyclingArr(value)        { this.maxCyclingArr        = value; return this; }
    yMech(value)                { this.yMech                = value; return this; }
    gRMSArr(value)              { this.gRMSArr              = value; return this; }
    placement(value)            { this.placement            = value; return this; }
    sensitivity(value)          { this.sensitivity          = value; return this; }
    // Array of arrays (marks)
    applicationPMarksArr(value) { this.applicationPMarksArr = value; return this; }
    // Array of marks
    ruggedisingPMarks(value)    { this.ruggedisingPMarks    = value; return this; }


    //PM

    qaManufacturer(value)       { this.qaManufacturer       = value; return this; }
    qaComponent(value)          { this.qaComponent          = value; return this; }
    raComponent(value)          { this.raComponent          = value; return this; }
    zer(value)                  { this.zer                  = value; return this; }


    // Process

    specificationMarks(value)   { this.specificationMarks   = value; return this; }
    designMarks(value)          { this.designMarks          = value; return this; }
    manufactAsemblMarks(value)  { this.manufactAsemblMarks  = value; return this; }
    integrEquipMarks(value)     { this.integrEquipMarks     = value; return this; }
    integrSystetMarks(value)    { this.integrSystetMarks    = value; return this; }
    exploitationMarks(value)    { this.exploitationMarks    = value; return this; }
    advancedMarks(value)        { this.advancedMarks        = value; return this; }
}


function calculate(values) {
    
    // Physical
    let oCapatitor           = values.oCapatitor;
    let tAnnualArr           = values.tAnnualArr;
    let thEl                 = values.thEl;
    let sReference           = values.sReference;
    let vRappliedArr         = values.vRappliedArr;
    let vRatedArr            = values.vRatedArr;
    let eA                   = values.eA;
    let boardAmdArr          = values.boardAmdArr;
    let yTCy                 = values.yTCy;
    let nAnnualCy            = values.nAnnualCy;
    let oCyArr               = values.oCyArr;
    let tCyclingArr          = values.tCyclingArr;
    let maxCyclingArr        = values.maxCyclingArr;
    let yMech                = values.yMech;
    let gRMSArr              = values.gRMSArr;
    let placement            = values.placement;
    let sensitivity          = values.sensitivity;
    let applicationPMarksArr = values.applicationPMarksArr;
    let ruggedisingPMarks    = values.ruggedisingPMarks;
    // PM
    let qaManufacturer       = values.qaManufacturer;
    let qaComponent          = values.qaComponent;
    let raComponent          = values.raComponent;
    let zer                  = values.zer;
    //Process
    let specificationMarks   = values.specificationMarks;
    let designMarks          = values.designMarks;
    let manufactAsemblMarks  = values.manufactAsemblMarks;
    let integrEquipMarks     = values.integrEquipMarks;
    let integrSystetMarks    = values.integrSystetMarks;
    let exploitationMarks    = values.exploitationMarks;
    let advancedMarks        = values.advancedMarks;


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
