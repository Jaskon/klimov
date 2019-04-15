class PMarksBlock {

    constructor(id, name, elements) {
        this.inputs = [];


        let block = document.createElement('div');
        block.id = id;
        block.classList.add('field-block', 'card');

        let header = document.createElement('div');
        header.classList.add('card-header', 'text-center');
        header.innerHTML = name;
        block.appendChild(header);

        let body = document.createElement('div');
        body.classList.add('p-4', 'card-body');
        block.appendChild(body);


        elements.forEach((obj, i) => {
            obj.id = id;
            let field = generateField(obj, i);
            this.inputs.push(field.input);
            body.appendChild(field.dom);
        });


        this.dom = block;
    }


    getValue() {
        return this.inputs.reduce((accum, input) => {
            accum.push({
                value: +input.value,
                pos: +getDataAttribute(input, 'pos')
            });
            return accum;
        }, []);
    }
}
