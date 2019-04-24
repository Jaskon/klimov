function generateField(obj, idPostfix, parent) {
    let id = obj.id + (idPostfix ? idPostfix : '');

    switch (obj.type) {
        case FieldTypes.InputNumber:
            return new InputNumberField(id, obj.name, obj.defaultValue, obj.placeholder, obj.payload, parent);

        case FieldTypes.SelectNumber:
            return new SelectNumberField(id, obj.name, obj.values, obj.defaultValue, obj.payload, obj.tooltip, parent);

        case FieldTypes.SelectJson:
            return new SelectJsonField(id, obj.name, obj.values, obj.defaultValue, obj.payload, obj.tooltip, parent);

        case FieldTypes.PMarksBlock:
            return new PMarksBlock(id, obj.name, obj.elements);
    }
}
