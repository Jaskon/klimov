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

// TODO: Uncollapse outer if collapsed (go up for all parents checking for 'collapse !show' class. Add 'show'? Click 'card-header'?)
function scrollAndFocusElement(elem) {
    var x = window.scrollX, y = window.scrollY;
    elem.focus();
    window.scrollTo(x, y);
    elem.scrollIntoView({block: "center", behavior: "smooth"});
}


function calcClickHandler() {
    let values = new calcValuesBuilder()


    // Physical

    .oCapatitor(           extractValue(domsHolder.oCapacitorBlock),                        domsHolder.oCapacitorBlock)
    .thEl(                 extractValue(domsHolder.thElBlock),                              domsHolder.thElBlock)
    .sReference(           extractValue(domsHolder.sReferenceBlock),                        domsHolder.sReferenceBlock)
    .eA(                   extractValue(domsHolder.eABlock),                                domsHolder.eABlock)
    .yTCy(                 extractValue(domsHolder.yTCyBlock),                              domsHolder.yTCyBlock)
    .nAnnualCy(            extractValue(domsHolder.nAnnualCyBlock),                         domsHolder.nAnnualCyBlock)
    .yMech(                extractValue(domsHolder.yMechBlock),                             domsHolder.yMechBlock)
    .placement(            extractValue(domsHolder.placementBlock),                         domsHolder.placementBlock)
    .sensitivity(          extractValue(domsHolder.sensitivityBlock),                       domsHolder.sensitivityBlock)
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

    .qaManufacturer(       extractValue(domsHolder.qaManufacturer),                         domsHolder.qaManufacturer)
    .qaComponent(          extractValue(domsHolder.qaComponent),                            domsHolder.qaComponent)
    .raComponent(          extractValue(domsHolder.raComponent),                            domsHolder.raComponent)
    .zer(                  extractValue(domsHolder.zer),                                    domsHolder.zer)


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
        scrollAndFocusElement(errs[0].obj.input);
    }

    // Show result
    if (res) {
        console.log(res);
        window.alert(res);
    }
}
