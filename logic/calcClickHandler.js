// Array of values of dom wrappers (for phase dependent fields)
function extractValues(phaseBlocks, objElem) {
    return phaseBlocks.reduce((accum, domWraps) => {
        accum.push(extractValue(domWraps[objElem]));
        return accum;
    }, []);
}

function extractBlocks(phaseBlocks, objElem) {
    return phaseBlocks.reduce((accum, domWraps) => {
        accum.push(domWraps[objElem]);
        return accum;
    }, []);
}

// Just for generize
function extractValue(domWrap) {
    return domWrap.getValue();
}


// In case of error

function scrollAndFocusElement(uiObj) {
    // Uncollapse if element have a parent
    let wereUncollapsed = uncollapseElementParents(uiObj);
    // Wait some time for element uncollapse (if it was) and then apply scroll and focus
    setTimeout(() => {
        let x = window.scrollX, y = window.scrollY;
        uiObj.input.focus();
        setTimeout(() => {
            window.scrollTo(x, y);
        });
        setTimeout(() => {
            uiObj.input.scrollIntoView({block: "center", behavior: "smooth"});
        });
    }, wereUncollapsed ? 300 : 0);
}

let invalidElems = [];

function setFieldInvalid(uiObj) {
    uncollapseElementParents(uiObj);
    uiObj.input.classList.add('invalid');
    invalidElems.push(uiObj)
}

function resetAllInvalid() {
    invalidElems.forEach((uiObj) => {
        uiObj.input.classList.remove('invalid');
    });
    invalidElems = [];
}

// Uncollapse outer if collapsed
function uncollapseElementParents(uiObj) {
    return uiObj.parent.collapse(true);
}


function calcClickHandler() {
    resetAllInvalid();

    let values = new calcValuesBuilder()


    // Physical

    .oCapacitor(           extractValue(domsHolder.componentTypeBlock).oCapacitor,          domsHolder.componentTypeBlock)
    .thEl(                 extractValue(domsHolder.componentTypeBlock).eA,                  domsHolder.componentTypeBlock)
    .sReference(           extractValue(domsHolder.componentTypeBlock).sReference,          domsHolder.componentTypeBlock)
    .eA(                   extractValue(domsHolder.componentTypeBlock).thEl,                domsHolder.componentTypeBlock)
    .yTCy(                 extractValue(domsHolder.componentTypeBlock).yTCy,                domsHolder.componentTypeBlock)
    .yMech(                extractValue(domsHolder.componentTypeBlock).yMech,               domsHolder.componentTypeBlock)
    .sensitivity(          extractValue(domsHolder.componentTypeBlock).sensitivity,         domsHolder.componentTypeBlock)

    .nAnnualCy(            extractValue(domsHolder.nAnnualCyBlock),                         domsHolder.nAnnualCyBlock)
    .placement(            extractValue(domsHolder.placementBlock),                         domsHolder.placementBlock)
    .ruggedisingPMarks(    extractValue(domsHolder.ruggedisingPMarksBlock),                 domsHolder.ruggedisingPMarksBlock)

    .tAnnualArr(           extractValues(domsHolder.phaseBlocks, 'tAnnualBlock'),           extractBlocks(domsHolder.phaseBlocks, 'tAnnualBlock'))
    .vRappliedArr(         extractValues(domsHolder.phaseBlocks, 'vRappliedBlock'),         extractBlocks(domsHolder.phaseBlocks, 'vRappliedBlock'))
    .vRatedArr(            extractValues(domsHolder.phaseBlocks, 'vRatedBlock'),            extractBlocks(domsHolder.phaseBlocks, 'vRatedBlock'))
    .boardAmdArr(          extractValues(domsHolder.phaseBlocks, 'boardAmdBlock'),          extractBlocks(domsHolder.phaseBlocks, 'boardAmdBlock'))
    .oCyArr(               extractValues(domsHolder.phaseBlocks, 'oCyBlock'),               extractBlocks(domsHolder.phaseBlocks, 'oCyBlock'))
    .tCyclingArr(          extractValues(domsHolder.phaseBlocks, 'tCyclingBlock'),          extractBlocks(domsHolder.phaseBlocks, 'tCyclingBlock'))
    .maxCyclingArr(        extractValues(domsHolder.phaseBlocks, 'maxCyclingBlock'),        extractBlocks(domsHolder.phaseBlocks, 'maxCyclingBlock'))
    .gRMSArr(              extractValues(domsHolder.phaseBlocks, 'gRMSBlock'),              extractBlocks(domsHolder.phaseBlocks, 'gRMSBlock'))
    .applicationPMarksArr( extractValues(domsHolder.phaseBlocks, 'applicationPMarksBlock'), extractBlocks(domsHolder.phaseBlocks, 'applicationPMarksBlock'))


    // PM

    .qaManufacturer(       extractValue(domsHolder.qaManufacturerBlock),                    domsHolder.qaManufacturer)
    .qaComponent(          extractValue(domsHolder.qaComponentBlock),                       domsHolder.qaComponent)
    .zer(                  extractValue(domsHolder.zerBlock),                               domsHolder.zer)


    // Process

    .specificationMarks(   extractValue(domsHolder.specificationMarks),                     domsHolder.specificationMarks)
    .designMarks(          extractValue(domsHolder.designMarks),                            domsHolder.designMarks)
    .manufactAsemblMarks(  extractValue(domsHolder.manufactAsemblMarks),                    domsHolder.manufactAsemblMarks)
    .integrEquipMarks(     extractValue(domsHolder.integrEquipMarks),                       domsHolder.integrEquipMarks)
    .integrSystetMarks(    extractValue(domsHolder.integrSystetMarks),                      domsHolder.integrSystetMarks)
    .exploitationMarks(    extractValue(domsHolder.exploitationMarks),                      domsHolder.exploitationMarks)
    .advancedMarks(        extractValue(domsHolder.advancedMarks),                          domsHolder.advancedMarks)


    try {
        var res = calculate(values);
    } catch(errs) {
        // Not our error
        if (!(errs instanceof Array)) {
            throw errs;
        }

        // Show errors
        let errorMessage = errs[0].message;
        for(let i = 1; i < errs.length; i++) {
            errorMessage += '\n' + errs[i].message;
        }
        alert(errorMessage);

        // Scroll to the first element
        scrollAndFocusElement(errs[0].uiObj);

        // Show error and open each invalid element
        errs.forEach((err) => {
            setFieldInvalid(err.uiObj);
        });

        return;
    }

    // Show result
    console.log(res);
    window.alert(res + ' отказ/час');
}
