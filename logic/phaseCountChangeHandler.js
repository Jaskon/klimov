function phaseCountChangeHandler(newCount, oldCount) {
    let i = oldCount;

    // Add new phase blocks if needed
    while (i < newCount) {
        generatePhaseBlock(i);
        // ++ after the code to count elems from 0
        i++;
    }

    // Remove unnecessary phase blocks
    while (i > newCount) {
        i--;
        removePhaseBlock(i);
    }

    return i;
}


function generatePhaseBlock(index) {
    // Other blocks, that depends on phase number
    let phaseBlock = new PhaseBlock(index);    // Class with .dom field inside. Wrapper for fields. Creates dom and provides .get (and .remove?) function
    // Also appends dependent blocks into himself on constructor

    let phaseBlocksContainer = document.getElementById('phaseBlocksContainer');    // Wrapper for phase blocks
    phaseBlocksContainer.append(phaseBlock.dom);    // Append new phase block
    // Store phaseBlock in global array
    domsHolder.phaseBlocks.push(phaseBlock);
}

function removePhaseBlock(index) {
    let pos = findByPhase(phaseBlocks, index);
    domsHolder.phaseBlocks[pos].remove();    // Remove method of *block class
    domsHolder.phaseBlocks.slice(pos, 1);
}
