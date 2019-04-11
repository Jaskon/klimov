// Generic class for one-field dom blocks (stores the whole block)

class GenericField {

    constructor(name) {
        this.name = name;
        this.dom = document.getElementById(name);
        this.input = document.getElementsByTagName('input')[0];
    }


    getValue() {
        return +(this.input.value);
    }
}
