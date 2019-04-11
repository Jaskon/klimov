domsHolder = {
    phaseCountBlock: undefined,

    oCapacitorBlock: undefined,
    tAnnualBlocks: undefined,
    thElBlock: undefined,
    sReferenceBlock: undefined,
    vRappliedBlocks: undefined,
    vRatedBlocks: undefined,
    eABlock: undefined,
    boardAmdBlocks: undefined,
    yTCyBlock: undefined,
    nAnnualCyBlock: undefined,
    oCyBlocks: undefined,
    tCyclingBlocks: undefined,
    maxCyclingBlocks: undefined,
    yMechBlock: undefined,
    gRMSBlocks: undefined,
    placementBlock: undefined,
    applicationBlocks: undefined,
    ruggedisingBlock: undefined,
    sensitivityBlock: undefined,

    phaseBlocks: []
}

let phasesCount = 0;



window.addEventListener('load', () => {
    domsHolder.phaseCountBlock = new GenericField('phaseCountBlock');

    // Create one-field dom wrappers
    domsHolder.oCapacitorBlock = new GenericField('oCapacitorBlock');
    domsHolder.thElBlock = new GenericField('thElBlock');
    domsHolder.sReferenceBlock = new GenericField('sReferenceBlock');
    domsHolder.eABlock = new GenericField('eABlock');
    domsHolder.yTCyBlock = new GenericField('yTCyBlock');
    domsHolder.nAnnualCyBlock = new GenericField('nAnnualCyBlock');
    domsHolder.yMechBlock = new GenericField('yMechBlock');
    domsHolder.placementBlock = new GenericField('placementBlock');
    domsHolder.ruggedisingBlock = new GenericField('ruggedisingBlock');
    domsHolder.sensitivityBlock = new GenericField('sensitivityBlock');


    domsHolder.phaseCountBlock.input.addEventListener('change', (event) => {
        var value = event.target.value;

        let i = phasesCount;

        // Add new phase blocks if needed
        while (i < count) {

            // Other blocks, that depends on phase number
            let phaseBlock = new Phaseblock(i);    // Class with .dom field inside. Wrapper for fields. Creates dom and provides .get (and .remove?) function
            // Also appends dependent blocks into himself on constructor

            let phaseBlocksContainer = document.getElementById('phaseBlocksContainer');    // Wrapper for phase blocks
            phaseBlocksContainer.append(phaseBlock.dom);    // Append new phase block
            // Store phaseBlock in global array
            domsHolder.phaseBlocks.push(phaseBlock);

            // ++ after the code to count elems from 0
            i++;
        }

        // Remove unnecessary phase blocks
        while (i > count) {

            i--;

            let pos = findByPhase(phaseBlocks, i);
            domsHolder.phaseBlocks[pos].remove();    // Remove method of *block class
            domsHolder.phaseBlocks.slice(pos, 1);
        }
    
        phasesCount = i;
    });


    function fireEvent(element, eventName) {
        var event = new Event(eventName);
        element.dispatchEvent(event);
    }


    document.getElementById('calculateButton').addEventListener('click', () => {
        fireEvent(domsHolder.phaseCountBlock.input, 'change');
        console.log(calculate());
    });
});
