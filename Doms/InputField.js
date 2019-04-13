// TODO: DELETE?

class InputFieldWrapper {
    // If dom is not passed - this.dom is the element from ui, got by id
    // If dom is passed - this.dom is the passed dom
    constructor(id, dom) {
        this.id = id;
        this.dom = dom ? dom : document.getElementById(id);
        this.input = this.dom.getElementsByTagName('input')[0];
    }


    getValue() {
        return this.input.value;
    }
}


class InputField extends InputFieldWrapper {
    constructor(id, name, defaultValue, placeholder) {
        // TODO: Generate template for field
        let div = document.createElement('div');
        div.id = id;

        super(id, div);
    }
}
