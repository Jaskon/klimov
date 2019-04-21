// IMPORTANT: ALL OF THESE FIELDS SHOULD BE DEFINED IN THE INIT VALUES OBJECT INSIDE init.values.js !
// Object field names should be equal with init values ids (except 'phase' field, should be ignored)
domsHolder = {
    phaseCountBlock: undefined,

    oCapacitorBlock: undefined,
    thElBlock: undefined,
    sReferenceBlock: undefined,
    eABlock: undefined,
    yTCyBlock: undefined,
    nAnnualCyBlock: undefined,
    yMechBlock: undefined,
    placementBlock: undefined,
    ruggedisingBlock: undefined,
    sensitivityBlock: undefined,
    ruggedisingPMarksBlock: undefined,

    qaManufacturer: undefined,
    qaComponent: undefined,
    raComponent: undefined,
    zer: undefined,

    specificationMarksBlock: undefined,
    designMarksBlock: undefined,
    manufactAsemblMarksBlock: undefined,
    integrEquipMarksBlock: undefined,
    integrSystetMarksBlock: undefined,
    exploitationMarksBlock: undefined,
    advancedMarksBlock: undefined,

    phaseBlocks: [
        // One phase block should contain:
        // tAnnualBlock
        // vRappliedBlock
        // vRatedBlock
        // boardAmdBlock
        // oCyBlock
        // tCyclingBlock
        // maxCyclingBlock
        // gRMSBlock
        // phase    // Meta field! Not from init values
    ]
}

let phasesCount = 0;


window.addEventListener('load', () => {
    domsHolder.phaseCountBlock = new InputNumberFieldWrapper('phaseCountBlock');


    domsHolder.phaseCountBlock.input.addEventListener('input', event => {
        phasesCount = phaseCountChangeHandler(+event.target.value, phasesCount, phaseDependentValues, domsHolder);
    });
    document.getElementById('calculateButton').addEventListener('click', event => calcClickHandler(domsHolder));

    // Generate html one-field template part from init_values.js
    initTemplateFromValues(initValues, domsHolder);
    // Generate first phase block template(s) (depends of phaseCountInput value, its default should be 1)
    fireEvent(domsHolder.phaseCountBlock.input, 'input');
});
