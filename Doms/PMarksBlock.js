class PMarksBlock {

    constructor(id, name, elements) {
        this.inputs = [];


        let block = document.createElement('div');
        block.id = id;
        block.classList.add('field-block', 'card');

        let header = document.createElement('div');
        header.classList.add('card-header', 'text-center', 'link');
        header.setAttribute('data-toggle', 'collapse');
        header.setAttribute('data-target', '#' + id + 'body');
        header.innerHTML = name;
        block.appendChild(header);

        // Collapse body wrapper. This will be collapsed
        let bodyCollapseWrapper = document.createElement('div');
        bodyCollapseWrapper.classList.add('collapse');
        bodyCollapseWrapper.id = id + 'body';
        block.appendChild(bodyCollapseWrapper);

        let body = document.createElement('div');
        body.classList.add('p-4', 'card-body');
        bodyCollapseWrapper.appendChild(body);


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
                pos: +helpers.getDataAttribute(input, 'pos')
            });
            return accum;
        }, []);
    }
}
