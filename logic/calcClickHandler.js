// Array of values of dom wrappers
function extractValues(domWraps, objElem) {
    return domWraps.reduce((accum, domWrap) => {
        accum.push(domWrap[objElem].getValue());
        return accum;
    }, []);
}

// Just for generize
function extractValue(domWrap) {
    domWrap.getValue();
}


function calcClickHandler() {
    let values = new calcValuesBuilder()

    .oCapatitor(extractValue(domsHolder.oCapacitorBlock))
    .thEl(extractValue(domsHolder.thElBlock))
    .sReference(extractValue(domsHolder.sReferenceBlock))
    .eA(extractValue(domsHolder.eABlock))
    .yTCy(extractValue(domsHolder.yTCyBlock))
    .nAnnualCy(extractValue(domsHolder.nAnnualCyBlock))
    .yMech(extractValue(domsHolder.yMechBlock))
    .placement(extractValue(domsHolder.placementBlock))
    .ruggedising(extractValue(domsHolder.ruggedisingBlock))
    .sensitivity(extractValue(domsHolder.sensitivityBlock))

    .tAnnualArr(extractValues(domsHolder.phaseBlocks, 'tAnnualBlock'))
    .vRappliedArr(extractValues(domsHolder.phaseBlocks, 'vRappliedBlock'))
    .vRatedArr(extractValues(domsHolder.phaseBlocks, 'vRatedBlock'))
    .boardAmdArr(extractValues(domsHolder.phaseBlocks, 'boardAmdBlock'))
    .oCyArr(extractValues(domsHolder.phaseBlocks, 'oCyBlock'))
    .tCyclingArr(extractValues(domsHolder.phaseBlocks, 'tCyclingBlock'))
    .maxCyclingArr(extractValues(domsHolder.phaseBlocks, 'maxCyclingBlock'))
    .gRMSArr(extractValues(domsHolder.phaseBlocks, 'gRMSBlock'))
    .applicationArr(extractValues(domsHolder.phaseBlocks, 'applicationBlock'));


    console.log(calculate(values));
}
