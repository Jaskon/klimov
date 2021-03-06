class InputFieldWrapper {
    constructor(id, dom, input, name) {
        this.id = id;
        this.dom = (dom ? dom : document.getElementById(id));
        this.input = (input ? input : this.dom.getElementsByTagName('input')[0]);
        this.name = name;
    }
}


class InputField extends InputFieldWrapper {
    constructor(id, name, defaultValue, placeholder, payload, parent) {
        // Generate template for field

        let block = document.createElement('div');
        block.id = id;
        block.classList.add('field-block', 'form-group');

        let label = document.createElement('label');
        label.innerHTML = name;
        block.appendChild(label);

        let div = document.createElement('div');
        div.classList.add('input-group');
        block.appendChild(div);

        let input = document.createElement('input');
        input.classList.add('form-control');
        input.setAttribute('data-input-type', 'number');
        // input.pattern = '^-?\\d+(?:.\\d+)?$';
        input.value = (defaultValue ? defaultValue : '');
        input.placeholder = (placeholder ? placeholder : '');
        div.appendChild(input);


        if (payload) {
            helpers.setDataAttributes(input, payload);
        }


        super(id, block, input, name);

        if (parent) {
            this.parent = parent;
        }
    }
}


class InputNumberField extends InputField {
    
    constructor(id, name, defaultValue, placeholder, payload, parent) {
        super(id, name, defaultValue, placeholder, payload, parent);
    }

    getValue() {
        return +(this.input.value);
    }
}


// <div id="someVariableBlock" class="form-group">
//     <label>Some variable</label>
//     <div class="input-group">
//         <input class="form-control" data-input-type="number" pattern="^-?\d+(?:.\d+)?$">
//     </div>
// </div>
