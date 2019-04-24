function initTemplateFromValues(values, domsHolder) {
    let oneFieldBlocksContainer = document.getElementById('oneFieldBlocksContainer');

    values.forEach(one => {
        const field = generateField(one);
        domsHolder[one.id] = field;
        oneFieldBlocksContainer.appendChild(field.dom);
    });
}
