function initTemplateFromValues(values, domsHolder) {
    let oneFieldBlocksContainer = document.getElementById('oneFieldBlocksContainer');

    initValues.forEach(one => {
        const field = generateField(one);
        domsHolder[one.id] = field;
        oneFieldBlocksContainer.appendChild(field.dom);
    });
}
