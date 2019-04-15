function generateField(obj, idPostfix) {
    let id = obj.id + (idPostfix ? idPostfix : '');

    switch (obj.type) {
        case FieldTypes.InputNumber:
            return new InputNumberField(id, obj.name, obj.defaultValue, obj.placeholder, obj.payload);

        case FieldTypes.SelectNumber:
            return new SelectNumberField(id, obj.name, obj.values, obj.defaultValue, obj.payload);

        case FieldTypes.PMarksBlock:
            return new PMarksBlock(id, obj.name, obj.elements);
    }
}
