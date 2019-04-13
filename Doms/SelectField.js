class SelectFieldWrapper {
    // If dom is not passed - this.dom is the element from ui, got by id
    // If dom is passed - this.dom is the passed dom
    constructor(id, dom) {
        this.id = id;
        this.dom = dom ? dom : document.getElementById(id);
        this.input = this.dom.getElementsByTagName('select')[0];
    }


    getValue() {
        return this.input.value;
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


class SelectField extends SelectFieldWrapper {
    constructor(id, name, values, defaultValue) {
        // Generate template for the field

        let block = document.createElement('div');
        block.id = id;
        block.classList.add('form-group');

        let label = document.createElement('label');
        label.innerHTML = name;
        block.appendChild(label);

        let div = document.createElement('div');
        div.classList.add('input-group');
        block.appendChild(div);

        let select = document.createElement('select');
        select.classList.add('custom-select');
        div.appendChild(select);

        for (let value in values) {
            let option = document.createElement('option');
            option.value = value;
            option.innerHTML = values[value];    // Value description as text
            select.appendChild(option);
        }

        select.value = defaultValue;


        super(id, block);
    }
}
