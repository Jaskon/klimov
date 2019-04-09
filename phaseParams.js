// Parameters dependent on phase count

class TAnnual {
    valueContainerId;
    dom;

    constructor(phaseInd) {
        this.valueContainerId = 'tAnnualInput' + phaseInd;
        // Create dom with id = 'tAnnual' + phaseInd
    }

    getValue() {
        return this.dom.getElementById(this.valueContainerId).value;
    }
}
