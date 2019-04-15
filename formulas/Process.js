function calcProcess(processGrade) {
    // 2.079 is Ro. Is a constant in our case
    return Math.exp(2.079 * (1 - processGrade));
}


// values is [{ constributionPhase: Number, auditMark: Number, maxAuditMark: Number }]
function calcProcessGrade(values) {
    return values.reduce((accum, one) => {
        return accum + one.contributionPhase * (one.auditMark / one.maxAuditMark);
    }, 0);
}


// pMarks is [{ value: Number, pos: Number }]
function calcAuditMark(pMarks) {
    return pMarks.reduce((accum, pMark) => {
        return accum + pMark.value * pMark.pos;
    }, 0);
}


function calcMaxAuditMark(pos, marks) {
    return Math.max(...marks) * pos;
}
