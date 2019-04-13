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


    domsHolder.phaseCountBlock.input.addEventListener('change', event => phaseCountChangeHandler(event.target.value, phasesCount));
    document.getElementById('calculateButton').addEventListener('click', event => calcClickHandler(domsHolder));

    // Generate html one-field template part from init_values.js
    initTemplateFromValues(initValues);
    // Generate first phase block template(s) (depends of phaseCountInput value, its default should be 1)
    fireEvent(domsHolder.phaseCountBlock.input, 'change');
});
