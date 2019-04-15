function calcPM(partGrade) {
    return Math.exp(1.39 * (1 - partGrade) - 0.69);
}


function calcPartGrade(qaManufacturer, qaComponent, raComponent, zer) {
    return ((qaManufacturer + qaComponent + raComponent) * zer) / 24;
}
