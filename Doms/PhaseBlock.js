class PhaseBlock {

    constructor(index) {
        // Init the template with all blocks
        // Set blocks (separately) to this.whatever
        // Each block can be wrapped with GenericField

        let tAnnualBlockId = 'tAnnualBlock' + index;
        let tAnnualBlock = document.createElement('div');
        // Stylish
        ...
        this.tAnnualBlock = new GenericField(tAnnualBlockId);    // Class with .dom field that contains styled input dom with id 'tAnnual' + i

        // Other blocks
    }
}
