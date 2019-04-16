// Array of values of dom wrappers (for phase dependent fields)
function extractValues(phaseBlocks, objElem) {
    return phaseBlocks.reduce((accum, domWraps) => {
        accum.push(extractValue(domWraps[objElem]));
        return accum;
    }, []);
}

// Just for generize
function extractValue(domWrap) {
    return domWrap.getValue();
}


function calcClickHandler() {
    let values = new calcValuesBuilder()


    // Physical

    .oCapatitor(extractValue(domsHolder.oCapacitorBlock))
    .thEl(extractValue(domsHolder.thElBlock))
    .sReference(extractValue(domsHolder.sReferenceBlock))
    .eA(extractValue(domsHolder.eABlock))
    .yTCy(extractValue(domsHolder.yTCyBlock))
    .nAnnualCy(extractValue(domsHolder.nAnnualCyBlock))
    .yMech(extractValue(domsHolder.yMechBlock))
    .placement(extractValue(domsHolder.placementBlock))
    .sensitivity(extractValue(domsHolder.sensitivityBlock))
    .ruggedisingPMarks(extractValue(domsHolder.ruggedisingPMarksBlock))

    .tAnnualArr(extractValues(domsHolder.phaseBlocks, 'tAnnualBlock'))
    .vRappliedArr(extractValues(domsHolder.phaseBlocks, 'vRappliedBlock'))
    .vRatedArr(extractValues(domsHolder.phaseBlocks, 'vRatedBlock'))
    .boardAmdArr(extractValues(domsHolder.phaseBlocks, 'boardAmdBlock'))
    .oCyArr(extractValues(domsHolder.phaseBlocks, 'oCyBlock'))
    .tCyclingArr(extractValues(domsHolder.phaseBlocks, 'tCyclingBlock'))
    .maxCyclingArr(extractValues(domsHolder.phaseBlocks, 'maxCyclingBlock'))
    .gRMSArr(extractValues(domsHolder.phaseBlocks, 'gRMSBlock'))
    .applicationPMarksArr(extractValues(domsHolder.phaseBlocks, 'applicationPMarksBlock'))


    // PM

    .qaManufacturer(extractValue(domsHolder.qaManufacturer))
    .qaComponent(extractValue(domsHolder.qaComponent))
    .raComponent(extractValue(domsHolder.raComponent))
    .zer(extractValue(domsHolder.zer))


    // Process

    .specificationMarks(extractValue(domsHolder.specificationMarks))
    .designMarks(extractValue(domsHolder.designMarks))
    .manufactAsemblMarks(extractValue(domsHolder.manufactAsemblMarks))
    .integrEquipMarks(extractValue(domsHolder.integrEquipMarks))
    .integrSystetMarks(extractValue(domsHolder.integrSystetMarks))
    .exploitationMarks(extractValue(domsHolder.exploitationMarks))
    .advancedMarks(extractValue(domsHolder.advancedMarks));


    let res = calculate(values);

    console.log(res);
    window.alert(res);
}
