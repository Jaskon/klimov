function generateField(obj, idPostfix) {
    let id = obj.id + (idPostfix ? idPostfix : '');

    switch (obj.type) {
        case FieldTypes.Input:
            return new InputField(id);

        case FieldTypes.InputNumber:
            return new InputNumberField(id, obj.name, obj.defaultValue, obj.placeholder);

        case FieldTypes.Select:
            return new SelectField(id, obj.name, obj.values, obj.defaultValue);
    }
}
