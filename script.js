// Utils

// Returns position in array
function findByPhase(arr, phase) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].phase == phase) {
            return i;
        }
    }

    return undefined;
}

// Array of values of dom wrappers
function extractValues(domWraps) {
    return domWraps.reduce((accum, domWrap) => {
        accum.push(domWrap.dom.getValue());
        return accum;
    }, []);
}


// Logic

let phaseBlocks = [];

let phasesCount = 0;

phaseCountDom.onInput = (count) => {
    let i = phasesCount;

    // Add new phase blocks if needed
    while (i < count) {

        let tAnnualBlock = new TAnnual(i);    // Class with .dom field that contains styled input dom with id 'tAnnual' + i
        // Other blocks, that depends on phase number

        let phaseBlock = new Phaseblock(i, tAnnualBlock/*, ...other_blocks*/);    // Class with .dom field inside. Wrapper for fields. Creates dom and provides .get (and .remove?) function
        // Also appends dependent blocks into himself on constructor


        let phaseBlocksContainer = document.getElementById('phaseBlocksContainer');    // Wrapper for phase blocks
        phaseBlocksContainer.append(phaseBlock.dom);    // Append new phase block
        // Store phaseBlock in global array
        phaseBlocks.push(phaseBlock);


        // ++ after the code to count elems from 0
        i++;
    }

    // Remove unnecessary phase blocks
    while (i > count) {

        i--;


        let pos = findByPhase(phaseBlocks, i);
        phaseBlocks[pos].remove();    // Remove method of *block class
        phaseBlocks.slice(pos, 1);
    }

    phasesCount = i;
}


calcButtonDom.click = () => {
    let oCapatitor = oCapacitorBlock.getValue();
    let tAnnualArr = extractValues(tAnnualBlocks);
    let thEl = thElBlock.getValue();
    let sReference = sReferenceBlock.getValue();
    let vRappliedArr = extractValues(vRappliedBlocks);
    let vRatedArr = extractValues(vRatedBlocks);
    let eA = eABlock.getValue();
    let boardAmdArr = extractValues(boardAmdBlocks);

    let yTCy = yTCyBlock.getValue();
    let nAnnualCy = nAnnualCyBlock.getValue();

    let oCyArr = extractValues(oCyBlocks);
    let tCyclingArr = extractValues(tCyclingBlocks);
    let maxCyclingArr = extractValues(maxCyclingBlocks);

    let yMech = yMechBlock.getValue();
    let gRMSArr = extractValues(gRMSBlocks);

    let placement = placementBlock.getValue();
    let applicationArr = extractValues(applicationBlocks);
    let ruggedising = ruggedisingBlock.getValue();
    let sensitivity = sensitivityBlock.getValue();


    let phasesArr = Array.from(phaseBlocks.keys());


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

    console.log(physical);
}
