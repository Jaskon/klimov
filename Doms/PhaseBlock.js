// <div id="phaseDepsBlock1" class="mb-4 card">
//     <div class="card-header">Phase 1</div>
//     <div class="phase-deps-block card-body">
//         ... variables ...
//     </div>
// </div>


class PhaseBlock {

    constructor(values, index) {
        // Init the template with all blocks
        // Set blocks (separately) to this.whatever

        let block = document.createElement('div');
        block.id = 'phaseDepsBlock' + index;
        block.classList.add('field-block', 'phase-deps-block', 'card');

        let header = document.createElement('div');
        header.classList.add('card-header', 'text-center');
        header.innerHTML = 'Переменные фазы ' + (index + 1);
        block.appendChild(header);

        let body = document.createElement('div');
        body.classList.add('p-4', 'card-body');
        block.appendChild(body);


        values.forEach(one => {
            let field = generateField(one, index);
            this[one.id] = field;
            body.appendChild(field.dom);
        });


        this.dom = block;
        this.phase = index;    // To remove possibility
    }


    remove() {
        this.dom.parentNode.removeChild(this.dom);
    }
}
