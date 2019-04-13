// Array of values of dom wrappers
function extractValues(domWraps) {
    return null;

    return domWraps.reduce((accum, domWrap) => {
        accum.push(domWrap.dom.getValue());
        return accum;
    }, []);
}

// Just for generize
function extractValue(domWrap) {
    domWrap.getValue();
}


function calculate (domsHolder) {
    let oCapatitor = extractValue(domsHolder.oCapacitorBlock);
    let tAnnualArr = extractValues(domsHolder.tAnnualBlocks);
    let thEl = extractValue(domsHolder.thElBlock);
    let sReference = extractValue(domsHolder.sReferenceBlock);
    let vRappliedArr = extractValues(domsHolder.vRappliedBlocks);
    let vRatedArr = extractValues(domsHolder.vRatedBlocks);
    let eA = extractValue(domsHolder.eABlock);
    let boardAmdArr = extractValues(domsHolder.boardAmdBlocks);

    let yTCy = extractValue(domsHolder.yTCyBlock);
    let nAnnualCy = extractValue(domsHolder.nAnnualCyBlock);

    let oCyArr = extractValues(domsHolder.oCyBlocks);
    let tCyclingArr = extractValues(domsHolder.tCyclingBlocks);
    let maxCyclingArr = extractValues(domsHolder.maxCyclingBlocks);

    let yMech = extractValue(domsHolder.yMechBlock);
    let gRMSArr = extractValues(domsHolder.gRMSBlocks);

    let placement = extractValue(domsHolder.placementBlock);
    let applicationArr = extractValues(domsHolder.applicationBlocks);
    let ruggedising = extractValue(domsHolder.ruggedisingBlock);
    let sensitivity = extractValue(domsHolder.sensitivityBlock);


    let phasesArr = Array.from(domsHolder.phaseBlocks.keys());


    let thermoElectroArr = phasesArr.reduce((accum, i) => {
        accum.push(calcThermoElectro(thEl, sReference, vRappliedArr[i], vRatedArr[i], eA, boardAmdArr[i]));
        return accum;
    }, []);

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


    let physical = calcPhysical(
        oCapatitor,
        tAnnualArr,
        thermoElectroArr,
        tCyArr,
        mechanicalArr,
        inducedArr
    );
}
