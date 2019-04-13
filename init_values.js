const FieldTypes = {
    Input: 0,
    InputNumber: 1,
    Select: 2,
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
        type: FieldTypes.Select,
        id: String,

        name: String,
        values: {
            String: String
        },
        defaultValue: String
    }
*/



const initValues = [
    {
        type: FieldTypes.InputNumber,
        id:'oCapacitorBlock111111111111111111111111111111111111111',

        name: 'oCapacitorBlock1111111111111111111111111111111111111111111111',
    },

    {
        type: FieldTypes.InputNumber,
        id:'thElBlock',

        name: 'thElBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'sReferenceBlock',

        name: 'sReferenceBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'eABlock',

        name: 'eABlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'yTCyBlock',

        name: 'yTCyBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'nAnnualCyBlock',

        name: 'nAnnualCyBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'yMechBlock',

        name: 'yMechBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'placementBlock',

        name: 'placementBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'ruggedisingBlock',

        name: 'ruggedisingBlock',
    },

    {
        type: FieldTypes.InputNumber,
        id:'sensitivityBlock',

        name: 'sensitivityBlock',
    },

];


const phaseDependentValues = [
    {
        type: FieldTypes.InputNumber,
        id: 'tAnnualBlock',

        name: 'tAnnualBlock1111111111111111111111111111111111111111111111'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRappliedBlock',

        name: 'vRappliedBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRatedBlock',

        name: 'vRatedBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'boardAmdBlock',

        name: 'boardAmdBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'oCyBlock',

        name: 'oCyBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'tCyclingBlock',

        name: 'tCyclingBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'maxCyclingBlock',

        name: 'maxCyclingBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'gRMSBlock',

        name: 'gRMSBlock'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'applicationBlock',

        name: 'applicationBlock'
    },

]
