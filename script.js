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


// Logic

let phaseBlocks = [];

let phasesCount = 1;

phaseCountDom.onInput = function(count) {
    let i = phasesCount;

    // Add new phase blocks if needed
    while (i < count) {

        i++;


        let tAnnualBlock = new TAnnual(i);    // Class with .dom field that contains styled input dom with id 'tAnnual' + i
        // Other blocks, that depends on phase number

        let phaseBlock = new Phaseblock(i, tAnnualBlock/*, ...other_blocks*/);    // Class with .dom field inside. Wrapper for fields. Creates dom and provides .get (and .remove?) function
        // Also appends dependent blocks into himself on constructor


        let phaseBlocksContainer = document.getElementById('phaseBlocksContainer');    // Wrapper for phase blocks
        phaseBlocksContainer.append(phaseBlock.dom);    // Append new phase block
        // Store phaseBlock in global array
        phaseBlocks.push(phaseBlock);
    }

    // Remove unnecessary phase blocks
    while (i > count) {

        i++;

        let pos = findByPhase(phaseBlocks, i);
        phaseBlocks[pos].remove();    // Remove method of *block class
        phaseBlocks.slice(pos, 1);
    }

    phasesCount = i;
}