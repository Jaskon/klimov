class SelectFieldWrapper {
    constructor(id, dom, input, name) {
        this.id = id;
        this.dom = (dom ? dom : document.getElementById(id));
        this.input = (input ? input : this.dom.getElementsByTagName('select')[0]);
        this.name = name;
    }
}


class SelectField extends SelectFieldWrapper {
    constructor(id, name, values, defaultValue, payload, tooltip, parent) {
        // Generate template for the field
        

        let block = document.createElement('div');
        block.id = id;
        block.classList.add('field-block', 'form-group');

        let label = document.createElement('label');
        label.innerHTML = name;
        block.appendChild(label);

        let div = document.createElement('div');
        div.classList.add('input-group');
        block.appendChild(div);

        let select = document.createElement('select');
        select.classList.add('form-control');
        div.appendChild(select);

        if (tooltip) {
            $(div).tooltip({
                title: tooltip,
                placement: 'right',
                boundary: 'window'
            })
        }

        for (let one of values) {
            let option = document.createElement('option');
            option.value =  (one.value instanceof Object ? JSON.stringify(one.value) : one.value);
            option.innerHTML = one.text;    // Value description as text
            // Tooltips
            if (one.tooltip)
                option.setAttribute('data-title', one.tooltip);
            select.appendChild(option);
        }

        select.value = (defaultValue ? defaultValue : select.getElementsByTagName('option')[0].value);


        if (payload) {
            helpers.setDataAttributes(select, payload);
        }


        super(id, block, select, name);

        if (parent) {
            this.parent = parent;
        }
    }
}


class SelectNumberField extends SelectField {

    constructor(id, name, values, defaultValue, payload, parent) {
        super(id, name, values, defaultValue, payload, parent);
    }

    getValue() {
        return +this.input.value;
    }
}


class SelectJsonField extends SelectField {
    constructor(id, name, values, defaultValue, payload, parent) {
        super(id, name, values, defaultValue, payload, parent);
    }

    getValue() {
        return JSON.parse(this.input.value);
    }
}


// <div id="someVariableBlock" class="form-group">
//     <label>Some variable 2</label>
//     <div class="input-group">
//         <select class="custom-select">
//             <option value="1">Option one</option>
//             <option value="2">Option two</option>
//             <option value="3">Option three</option>
//         </select>
//     </div>
// </div>
