const FieldTypes = {
    // Input: 0,
    InputNumber: 1,
    // Select: 2,
    SelectNumber: 3,

    PMarksBlock: 10
}


/* Field types interfaces */


/*
    Input

    {
        Not implemented
    }
*/


/*
    InputNumber

    {
        type: FieldTypes.InputNumber,
        id: String,

        name: String,
        defaultValue?: String,
        placeholder?: String
    }
*/


/*
    Select

    {
        Not implemented
    }
*/


/*
    SelectNumber

    {
        type: FieldTypes.Select,
        id: String,

        name: String,
        values: [
            { value: String, text: String }
        ],
        defaultValue: String,
        isNumber?: boolean = false
    }
*/


/*
    PMarksBlock

    {
        type: FieldTypes.PMarksBlock,
        id: String,

        elements: [
            { Field without id (with payload: { pos: Number }) }
        ]
    }
*/



const initValues = [










    //////////////////////////////
    //         Physical         //
    //////////////////////////////










    {
        type: FieldTypes.InputNumber,
        id:'oCapacitorBlock',

        name: 'oCapacitorBlock1111111111111111111111111111111111111111111111',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'thElBlock',

        name: 'thElBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'sReferenceBlock',

        name: 'sReferenceBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'eABlock',

        name: 'eABlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'yTCyBlock',

        name: 'yTCyBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'nAnnualCyBlock',

        name: 'nAnnualCyBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id:'yMechBlock',

        name: 'yMechBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.SelectNumber,
        id:'placementBlock',

        name: 'placementBlock',
        values: [
            { value: '1.0', text: 'Цифровая неинтерфейсная функция' },
            { value: '1.6', text: 'Цифровая интерфейсная функция' },
            { value: '1.3', text: 'Аналоговая низкоуровневая неинтерфейсная функция' },
            { value: '2.0', text: 'Аналоговая низкоуровневая интерфейсная функция' },
            { value: '1.6', text: 'Аналоговая неинтерфейсная функция питания' },
            { value: '2.5', text: 'Аналоговая силовая интерфейсная функция' }
        ],
        defaultValue: '1.0',
        isNumber: true
    },

    {
        type: FieldTypes.InputNumber,
        id:'sensitivityBlock',

        name: 'sensitivityBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'ruggedisingPMarksBlock',

        name: 'Рекомендации',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'First mark',
            values: [
                { value: '0', text: 'Оценка 0' },
                { value: '1', text: 'Оценка 1' },
                { value: '2', text: 'Оценка 2' },
                { value: '3', text: 'Оценка 3' }
            ],
            defaultValue: '0',
            payload: { pos: '7' }
        }, {
            type: FieldTypes.SelectNumber,

            name: 'Second mark',
            values: [
                { value: '0', text: 'Оценка 0' },
                { value: '1', text: 'Оценка 1' },
                { value: '2', text: 'Оценка 2' },
                { value: '3', text: 'Оценка 3' }
            ],
            defaultValue: '0',
            payload: { pos: '7' }
        }]
    },










    //////////////////////////////
    //       PM variables       //
    //////////////////////////////












    {
        type: FieldTypes.SelectNumber,
        id: 'qaManufacturer',

        name: 'Уровень обеспечения качества производителя',
        values: [
            { value: '3', text: 'Высокий' },
            { value: '2', text: 'Эквивалентный' },
            { value: '1', text: 'Низкий' },
            { value: '0', text: 'Очень низкий' }
        ],
        defaultValue: '3',
    },

    {
        type: FieldTypes.SelectNumber,
        id: 'qaComponent',

        name: 'Уровень обеспечения качества компонентов',
        values: [
            { value: '3', text: 'Высокий' },
            { value: '2', text: 'Эквивалентный' },
            { value: '1', text: 'Низкий' },
            { value: '0', text: 'Очень низкий' }
        ],
        defaultValue: '3',
    },

    {
        type: FieldTypes.SelectNumber,
        id: 'raComponent',

        name: 'Уровень обеспечения качества производителя',
        values: [
            { value: '3', text: 'Очень надежный уровень А' },
            { value: '2', text: 'Очень надежный уровень B' },
            { value: '1', text: 'Надежный' },
            { value: '0', text: 'Ненадежный' }
        ],
        defaultValue: '3',
    },

    {
        type: FieldTypes.SelectNumber,
        id: 'zer',

        name: 'Уровень обеспечения качества производителя',
        values: [
            { value: '4', text: 'Признанный производитель: зрелые процессы' },
            { value: '3', text: 'Признанный производитель: не созревшие процессы' },
            { value: '2', text: 'Производитель не признан' },
            { value: '1', text: 'Предыдущая дисквалификация ' }
        ],
        defaultValue: '4',
    },











    //////////////////////////////
    //     Process variables    //
    //////////////////////////////










    {
        type: FieldTypes.PMarksBlock,
        id: 'specificationMarks',

        name: 'Рекомендации спецификации',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'designMarks',

        name: 'Рекомендации дизайна',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'manufactAsemblMarks',

        name: 'Изготовление щита или сборочного узла',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'integrEquipMarks',

        name: 'Интеграция в оборудование',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'integrSystetMarks',

        name: 'Интеграция в систему',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'exploitationMarks',

        name: 'Эксплуатация и обслуживание ',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'advancedMarks',

        name: 'Вспомогательные мероприятия ',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'Рекомендация один',
            values: [
                { value: '3', text: 'Рекомендация полностью выполнена' },
                { value: '2', text: 'Рекомендация практически применяется' },
                { value: '1', text: 'Рекомендация применяется частично' },
                { value: '0', text: 'Рекомендация не применяется' }
            ],
            defaultValue: '3',
            payload: { pos: '10.7' }
        }]
    }
];










//////////////////////////////
//     Phase deps block     //
//////////////////////////////










const phaseDependentValues = [
    {
        type: FieldTypes.InputNumber,
        id: 'tAnnualBlock',

        name: 'tAnnualBlock1111111111111111111111111111111111111111111111',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRappliedBlock',

        name: 'vRappliedBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRatedBlock',

        name: 'vRatedBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'boardAmdBlock',

        name: 'boardAmdBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'oCyBlock',

        name: 'oCyBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'tCyclingBlock',

        name: 'tCyclingBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'maxCyclingBlock',

        name: 'maxCyclingBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'gRMSBlock',

        name: 'gRMSBlock',
        defaultValue: '1'
    },

    {
        type: FieldTypes.PMarksBlock,
        id: 'applicationPMarksBlock',

        name: 'Оценки параметров?',
        elements: [{
            type: FieldTypes.SelectNumber,

            name: 'First criteria',
            values: [
                { value: '1', text: 'Благоприятный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Неблагоприятный' },
            ],
            defaultValue: '1',
            payload: { pos: '20' }
        }, {
            type: FieldTypes.SelectNumber,

            name: 'Second criteria',
            values: [
                { value: '1', text: 'Благоприятный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Неблагоприятный' },
            ],
            defaultValue: '1',
            payload: { pos: '10' }
        }, {
            type: FieldTypes.SelectNumber,

            name: 'Third criteria',
            values: [
                { value: '1', text: 'Благоприятный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Неблагоприятный' },
            ],
            defaultValue: '1',
            payload: { pos: '4' }
        }]
    }

]
