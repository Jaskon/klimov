function phaseCountChangeHandler(newCount, oldCount, phaseDependentValues, domsHolder) {
    let i = oldCount;

    // Add new phase blocks if needed
    while (i < newCount) {
        generatePhaseBlock(phaseDependentValues, i, domsHolder);
        // ++ after the code to count elems from 0
        i++;
    }

    // Remove unnecessary phase blocks
    while (i > newCount) {
        i--;
        removePhaseBlock(i, domsHolder);
    }

    return i;
}


function generatePhaseBlock(phaseDependentValues, index, domsHolder) {
    // Other blocks, that depends on phase number
    let phaseBlock = new PhaseBlock(phaseDependentValues, index);    // Class with .dom field inside. Wrapper for fields. Creates dom and provides .get (and .remove?) function
    // Also appends dependent blocks into himself on constructor

    let phaseBlocksContainer = document.getElementById('phaseBlocksContainer');    // Wrapper for phase blocks
    phaseBlocksContainer.appendChild(phaseBlock.dom);    // Append new phase block
    // Store phaseBlock in global array
    domsHolder.phaseBlocks.push(phaseBlock);
}

function removePhaseBlock(index, domsHolder) {
    let pos = helpers.findByPhase(domsHolder.phaseBlocks, index);
    domsHolder.phaseBlocks[pos].remove();    // Remove method of *block class
    domsHolder.phaseBlocks.splice(pos, 1);
}
