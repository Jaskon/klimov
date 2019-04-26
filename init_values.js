const FieldTypes = {
    // Input: 0,
    InputNumber: 1,
    // Select: 2,
    SelectNumber: 3,
    SelectJson: 4,

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
    SelectJson

    {
        type: FieldTypes.SelectJson,
        id: String,

        name: String,
        values: [
            { value: Object, text: String, tooltip: String }
        ],
        tooltip: String
    }
*/


/*
    SelectNumber

    {
        type: FieldTypes.Select,
        id: String,

        name: String,
        values: [
            { value: String, text: String, tooltip: String }
        ],
        defaultValue?: String,
        tooltip: String
    }
*/


/*
    PMarksBlock

    {
        type: FieldTypes.PMarksBlock,
        id: String,

        elements: [
            { Field without id (with payload: { pos: Number }) }
        ],
        tooltip: String
    }
*/



let recomendationValuesPattern = [
    { value: '3', text: 'Рекомендация полностью выполнена' },
    { value: '2', text: 'Рекомендация практически применяется' },
    { value: '1', text: 'Рекомендация применяется частично' },
    { value: '0', text: 'Рекомендация не применяется' }
];
let recomendationDefaultValue = '3';

let ruggedisingValuesPattern = [
    { value: '0', text: 'Оценка 0' },
    { value: '1', text: 'Оценка 1' },
    { value: '2', text: 'Оценка 2' },
    { value: '3', text: 'Оценка 3' }
];
let ruggedisingDefaultValue = '0';



const initValues = [










    //////////////////////////////
    //         Physical         //
    //////////////////////////////










    // {
    //     type: FieldTypes.InputNumber,
    //     id:'oCapacitorBlock',

    //     name: 'Конденсаторная постоянная',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'thElBlock',

    //     name: 'Теплоэлектрическая постоянная',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'sReferenceBlock',

    //     name: 'Контрольный уровень для электрического напряжения',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'eABlock',

    //     name: 'Энергия активации',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'yTCyBlock',

    //     name: 'Коэффициент температурного цикла',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'yMechBlock',

    //     name: 'Механическая постоянная',
    //     defaultValue: '1'
    // },

    // {
    //     type: FieldTypes.InputNumber,
    //     id:'sensitivityBlock',

    //     name: 'Коэффициент чувствительности к перенапряжениям',
    //     defaultValue: '1'
    // },

    {
        type: FieldTypes.SelectJson,
        id: 'componentTypeBlock',

        name: 'Тип компонента',
        values: [
            {
                value: { oCapacitor: 0.21, eA: 0.40, sReference: 0.5,  thEl: 0.85, yTCy: 0.14, yMech: 0.01, sensitivity: 6.40 },
                text: 'Алюминиевый конденсатор с жидким электролитом'
            },
            {
                value: { oCapacitor: 0.40, eA: 0.40, sReference: 0.55, thEl: 0.85, yTCy: 0.14, yMech: 0.01, sensitivity: 6.40 },
                text: 'Алюминиевый конденсатор с твёрдым электролитом'
            }
        ]
    },

    {
        type: FieldTypes.InputNumber,
        id:'nAnnualCyBlock',

        name: 'Количество циклов, связанных с каждой фазой цикла в течение года',
        defaultValue: '1'
    },

    {
        type: FieldTypes.SelectNumber,
        id:'placementBlock',

        name: 'Влияние размещения элемента в оборудовании',
        values: [
            { value: '1.0', text: 'Цифровая неинтерфейсная функция' },
            { value: '1.6', text: 'Цифровая интерфейсная функция' },
            { value: '1.3', text: 'Аналоговая низкоуровневая неинтерфейсная функция' },
            { value: '2.0', text: 'Аналоговая низкоуровневая интерфейсная функция' },
            { value: '1.6', text: 'Аналоговая неинтерфейсная функция питания' },
            { value: '2.5', text: 'Аналоговая силовая интерфейсная функция' }
        ],
        defaultValue: '1.0',
        tooltip: `Для определения placement необходимо ответить на два вопроса.
        1. Интерфейс или не интерфейс?

        Интерфейс - это соединение, которое обеспечивает взаимосвязь между двумя системами. Концепция интерфейса должна рассматриваться с электрической точки зрения. Концепция очень зависит от архитектуры, в которой работает продукт. Элемент должен рассматриваться как «интерфейс», если он более подвержен случайным электрическим воздействиям из-за своего положения в системе. Элементы, которые устанавливают связь между оборудованием и внешними системами, являются интерфейсными функциями.
        
        Зачастую в электронной сборке компоненты интерфейса классифицируются как защита (например, транзистор или транзорбор), фильтры (например, индукторы, резисторы или конденсаторы) или изоляция (например, оптопары). Компоненты интерфейса часто электрически близки к разъему.

        2. Цифровой, аналоговый низкий уровень, аналоговая мощность?
        
        Цифровые функции обычно легко идентифицировать.

        Пороговое значение между аналоговым низким уровнем и аналоговой мощностью приблизительно соответствует току 1А. Но другие факторы могут влиять на выбор placement, как напряжение и особенно тип функции: 
        - В руководстве FIDES аналоговыми функциями низкого уровня являются, в основном, дискретные входы/выходы, измерительные сигналы и аналоговая логика
        - Силовые функции - это в основном источники питания, силовые передачи.`
    },


    ////   Коэффициент влияния   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'ruggedisingPMarksBlock',

        name: 'Коэффициент влияния',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Напишите полные процедуры для всех операций по внедрению и обслуживанию продукта',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обеспечьте обучение и управление навыками использования и обслуживания продукта',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что процедуры, относящиеся к продукту, и правила, характерные для предприятий, соблюдаются соответствующим системным мониторингом',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проведите обзор работ по техническому обслуживанию, выполненных конечным пользователем, и ознакомьтесь с его рекомендациями',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что экологические характеристики выполнены. Критерии проверки полноты спецификаций: анализ, испытания, отзывы о работе, соблюдение стандартов',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обосновать соблюдение экологических требований',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Провести процесс улучшения продукта (например, ускоренные стресс-тесты), чтобы ограничить чувствительность продукта до ограничения окружающей среды (помехи, окружающая среда, перенапряжение)',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните анализ процесса выполнения операций по внедрению и обслуживанию',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Соблюдайте стандарт, касающийся источников питания (стандарт, такой как EN2282, который определяет возможные помехи и возможные изменения). Стандарт должен соблюдаться как для производства электроэнергии, так и для потребления электроэнергии',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проведите анализ случаев сбоев, которые могут привести к распространению сбоев',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Включите среды производства, хранения и обслуживания в спецификации сред продукта',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Изучите и обработайте риски ухудшения тестируемого продукта из-за сбоев его средств тестирования. Критерии: Риски, проанализированные при проектировании испытательного средства и проверяемого устройства, настройте адаптированные средства предотвращения',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Используйте соответствующие средства предотвращения для выявления разумно предсказуемого ненормального использования',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите и используйте соответствующие средства предотвращения для предотвращения обоснованно предсказуемых агрессий (связанных с погодой)',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проектируйте надежные устройства электрической защиты: - идентифицируйте системы электрической защиты - убедитесь, что они проверяемы и ремонтопригодны - интегрируйте корпус этих устройств в определение политики технического обслуживания',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Соблюдайте стандарт, касающийся кондуктивных и излучаемых электромагнитных помех. Это в равной степени применимо к продукту и системе, в которую он интегрирован',
            values: ruggedisingValuesPattern,
            defaultValue: ruggedisingDefaultValue,
            payload: { pos: '3' }
        }]
    },










    //////////////////////////////
    //       PM variables       //
    //////////////////////////////












    {
        type: FieldTypes.SelectNumber,
        id: 'qaManufacturerBlock',

        name: 'Уровень обеспечения качества производителя',
        values: [
            { value: '3', text: 'Высокий', tooltip: 'Сертифицированный ISO / TS16949 V2002' },
            { value: '2', text: 'Эквивалентный', tooltip: `Сертифицировано по одному из следующих стандартов:
                                                            QS9000, TL9000, ISO / TS 29001, EN9100, AS9100,
                                                            JISQ 9100, AQAP 2110, AQAP 2120, AQAP 2130, IRIS,
                                                            IEC TS 62239, ESA / ECSS QPL, MIL-PRF-38535 QML,
                                                            MIL-PRF-19500` },
            { value: '1', text: 'Низкий', tooltip: 'ISO 9000 версия 2000 сертифицирована' },
            { value: '0', text: 'Очень низкий', tooltip: 'Нет информации' }
        ],
        defaultValue: '3',
    },

    {
        type: FieldTypes.SelectNumber,
        id: 'qaComponentBlock',

        name: 'Уровень обеспечения качества компонентов',
        values: [
            { value: '3', text: 'Высокий', tooltip: `Квалификация в соответствии с од-ним из следующих стандартов:
                                                        AEC Q200, уровень S MIL-PRF-xxxx, уровень R MIL-PRF-xxxx,
                                                        MIL-PRF-xxxx уровень D, MIL-PRF-уровень C, уровень ESCC 400x
                                                        B, NASDA-QTS-xxxx, класс I` },
            { value: '2', text: 'Эквивалентный', tooltip: `Квалификация в соответствии с од-ним из следующих стандартов:
                                                            MIL-PRF-xxx уровень P, MIL-PRF-xxxx уровень B, ESCC 400x
                                                            уровень C, NASDA-QTS-xxxx класс II с идентификацией
                                                            производственные площадки по этим стандартам` },
            { value: '1', text: 'Низкий', tooltip: `Квалификация в соответствии с од-ним из следующих утвержденных
                                                    Стандарты CECC: MIL-PRF-xxxx уро-вень M или квалификация
                                                    программа внутренняя для произво-дителя и неопознанная
                                                    производственные площадки` },
            { value: '0', text: 'Очень низкий', tooltip: 'Нет информации' }
        ],
        defaultValue: '3',
    },

    {
        type: FieldTypes.SelectNumber,
        id: 'zerBlock',

        name: 'Коэффициент опыта',
        values: [
            { value: '4', text: 'Признанный производитель: зрелые процессы', tooltip: 'Признанный производитель: зрелые процессы для рассматриваемого элемента' },
            { value: '3', text: 'Признанный производитель: не созревшие процессы', tooltip: `Признанный производитель - процессы,
                                                                                                не проанализированные или не созревшие для рассматриваемой позиции` },
            { value: '2', text: 'Производитель не признан', tooltip: `Производитель не признан (например, никогда не проверялся и не проверялся более 6 лет назад)
                                                                        или производство небольших серий` },
            { value: '1', text: 'Предыдущая дисквалификация', tooltip: 'Предыдущая дисквалификация или проблема с обратной связью от операций' }
        ],
        defaultValue: '4',
    },











    //////////////////////////////
    //     Process variables    //
    //////////////////////////////










    ////    Спецификация    ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'specificationMarks',

        name: 'Рекомендации спецификации',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Распределить ресурсы с точки зрения персонала и средства для исследования надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Распределить требования к надежности по подсборки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Полностью опишите среду, в которой продукт будет использоваться и обслуживаться',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить отказ продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите метод демонстрации надежности продукта на этапах эксплуатации',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите профиль срока службы продукта, для которого ожидаются показатели надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите контекст, связанный с требованиями к надежности продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Используйте обратную связь от операций',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Получите бизнес «Операционная надежность» для участия в функциональном и организационном проектировании продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Количественно сформулировать требование надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Формально определить технические риски, влияющие на надежность',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите тип измерения времени для показателей надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите требования клиентов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обсудить требования к надежности с заказчиком',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Организация обзора проекта, в котором рассматриваются аспекты надежност',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Организовать проверку требований к продукту, в которой будут рассмотрены аспекты надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Примите во внимание политику обслуживания продукта (запрос от покупатель)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Написать план надежност',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.6' }
        }]
    },


    ////       Дизайн       ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'designMarks',

        name: 'Рекомендации дизайна',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь в полноте информации о сборочных узлах, чтобы составить (заполнить) сборочные руководства по испытаниям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Реализуйте корректирующие действия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Осуществлять профилактические мероприятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что на каждом этапе задействовано лицо, ответственное за логистическую поддержку, индустриализацию, закупки, разработку и RAMS (параллельное проектирование)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '16.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Квалифицируйте персонал для испытаний, измерений и соответствующих стандартов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь документ, подтверждающий предварительные технические исследования надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что ноу-хау записано в бизнес-процедурах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь и управлять таблицей навыков, необходимых для деятельности, включая имена',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '24.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Напишите сборник деловых рекомендаций, касающихся манипуляции и операции хранения у пользователя, для использования Службой поддержки логистики',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Создать и поддерживать список предпочтительных компонентов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Наличие базы данных, обобщающей отзывы о деятельности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '24.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Наличие базы данных, обобщающей результаты оценки надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Наличие базы данных по истории определений и обоснований определений',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Получите бизнес «Операционная надежность» для участия в функциональном и организационном проектировании продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить и внедрить средства защиты узлов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Формально определить технические риски, влияющие на надежность',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '21' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Максимизируйте тестовое покрытие на основе спецификации и обоснования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Реализовать дизайн проверки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '27.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Внедрить концепцию поддержки в логистической поддержке',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Организация обзора проекта, в котором рассматриваются аспекты надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Напишите план управления, в котором определены ключевые навыки (специалисты)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Напишите процедуру принятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что аналитическая документация, необходимая для оценки надежности, существует',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что существуют правила проектирования, чтобы адаптировать выбор компонента для данной надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что есть определение производственных контрольных точек и что рекомендации по испытаниям применяются',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что существует процедура квалификации продукта / процесса',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что существует процедура квалификации продукта / поставщика',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что для нового компонента имеется производственная квалификация',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что расчет прогнозируемой надежности сделан с использованием признанного инструмента (FIDES, скорректированный MIL-HDBK-217, запатентованная обратная связь от операций или другой метод)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Учитывайте баланс между надежностью и сложностью встроенных тестов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Использование проверенных и признанных средств моделирования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.8' }
        }]
    },


    ////   Изготовление платы или сборочного узла   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'manufactAsemblMarks',

        name: 'Изготовление щита или сборочного узла',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Улучшите итоговый тест продукта, указанный в дизайне и спецификации, чтобы увеличить охват тестами и составить резюме тестов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Реализуйте корректирующие действия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Осуществлять профилактические мероприятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать параметры контроля во время лакирования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните корректирующее обслуживание, как только на производственных средствах или произведенных сборочных узлах появится аномалия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполнить профилактическое обслуживание, чтобы скорректировать снос по параметрам производственного средства',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Периодически проверяйте средства программирования, чтобы операция загрузки программного обеспечения выполнялась правильно',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Систематический аудит финальных тестов операторов для мониторинга навыков',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Автоматизируйте манипуляции, чтобы ограничить возможные ухудшения на сборочных узлах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проверьте и сохраните данные, загруженные в программируемые производственные средства (путем обновления)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '2.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Поручите общую проверку операции лакировки узла, чтобы оптимизировать фильтрацию перед продолжением процесса',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'У опытного персонала в подсушивании подсборочной деятельности после лакировки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Дайте инструкции (протокол и конкретные инструкции, которые необходимо соблюдать) операторам',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Сделайте записи температурных профилей для каждой программы, используемой в паяльном средстве, чтобы убедиться, что нет никакой агрессии к узлу сборки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Исключите все возможности неоднозначного использования инструмента, чтобы избежать несоответствия между производственными средствами и узлом, к которому он применяется',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Запишите проблемы, которые могут потребовать применения корректирующих и / или профилактических мер (в таблице аномалий)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление приоритетами, которые должны соблюдаться, как функция дат окончания файла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '3.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить и внедрить средства защиты узлов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль изменений в производственных процессах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Измерьте загрязнение ванн путем отбора проб (частота должна быть определена), чтобы не превышать содержание загрязняющих веществ во время этой деятельности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Внедрить самоконтроль для фильтрации ошибок персонала, которые могут снизить надежность узла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите индикаторы, чтобы убедиться, что хороший припой получен при переносе компонентов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте периодические инвентаризации магазинов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите защиту от электростатических разрядов во время манипуляций и хранения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '26' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите защиту от электростатических разрядов во время манипуляций и хранения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите соответствующие средства защиты, чтобы избежать ухудшения узлов во время чистки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте самопроверку инструментов тестирования для обнаружения любых аномалий',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте перекрестную проверку для оптимизации окончательной проверки лакировки узлов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте проверку соответствия при размещении на складе в магазинах (исключая несоответствующие товары)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите SPC (Статистическое управление процессом) для производственного процесса',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Дайте подробное описание протокола лакировки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите ярлык для идентификации и изъятия устаревших расходных материалов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте обработку индикаторов контроля испытаний в режиме реального времени, чтобы не допустить ухудшения работы узла после появления аномалии',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите профилактическое обслуживание путем метрологического мониторинга, чтобы предотвратить возможность агрессии к узлу',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Не проверяйте и не разрешайте работу сушильных шкафов, за исключением проверки дрейфов и неисправностей (с помощью датчиков и других систем мониторинга)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Имейте системы высокой и низкой безопасности, привязанные к средствам контроля и мониторинга (систематически останавливайте цикл и поручайте техническому персоналу выполнить анализ перед повторным запуском)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь план по квалификации метода снятия маскирующих лаков, используемых во избежание снижения надежности узла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Включите этап проверки (даже визуальный), чтобы убедиться, что операция по нанесению маскирующего лака происходит правильно перед лаком',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обеспечьте профилактическое обслуживание для выявления аномалий, если таковые имеются, перед использованием производственных средств на сборочном узле',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Соблюдайте время отдыха между каждой фазой переноса, чтобы избежать перенапряжения узла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Пересмотреть и повысить надежность планов по техническому обслуживанию производства, чтобы исключить любую возможность ухудшения соединений компонентов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что приготовление (дозирование) лака контролируется квалифицированной процедурой и контрольными измерениями',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что операторы хорошо информированы и изучите, как обновить свои навыки в режиме реального времени',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Удостоверьтесь, что проверка качества конечной лакировки эффективна, строго следуя процедуре проверки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что процедура реализации средства известна',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что загружено правильное программное обеспечение, и сохраните идентификацию его версии',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что средства поддерживаются и что это обслуживание соблюдается',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что оператор прошел обучение (квалификацию), подходящую для данного вида деятельности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Закрепите средства (сушильная печь T°) посредством прямого контроля зондами и записями, чтобы предотвратить перенапряжения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Повысить осведомленность персонала о визуальной проверке узлов после размещения и перед переплавкой',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Повысить осведомленность операторов о проверке качества наплавки флюса для пайки (выполнение действия по проверке, которое должно быть указано в ведомом листе узла сборки)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проверьте соответствие приобретенной продукции',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните действие по проверке (считывание штрих-кода, считывание S/N), чтобы убедиться, что нужный продукт доступен перед началом теста',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что тестовое покрытие во время и после выгорания правильно оформлено',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.2' }
        }]
    },


    ////   Интеграция в оборудование   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'integrEquipMarks',

        name: 'Интеграция в оборудование',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Улучшите итоговый тест продукта, указанный в дизайне и спецификации, чтобы увеличить охват тестами и составить резюме тестов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Реализуйте корректирующие действия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Осуществлять профилактические мероприятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Сделайте продукт отслеживаемым',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '16.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять упаковкой',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять хранением',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Поддерживать условия доставки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните проверки и испытания на этапе',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните заключительные проверки и испытания',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Провести осмотры и испытания, характерные для прием',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните корректирующее обслуживание, как только на производственных средствах или произведенных сборочных узлах появится аномалия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполнить профилактическое обслуживание, чтобы скорректировать снос по параметрам производственного средства',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Периодически проверяйте средства программирования, чтобы операция загрузки программного обеспечения выполнялась правильно',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Систематический аудит финальных тестов операторов для мониторинга навыков',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Автоматизируйте манипуляции, чтобы ограничить возможные ухудшения на сборочных узлах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проверьте и сохраните данные, загруженные в программируемые производственные средства (путем обновления)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '2.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите степень несоответствия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите средства, необходимые для проверки и испытания продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Есть документы для проведения входной инспекции по расходным материалам',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Дайте инструкции (протокол и конкретные инструкции, которые необходимо соблюдать) операторам',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Исключите все возможности неоднозначного использования инструмента, чтобы избежать несоответствия между производственными средствами и узлом, к которому он применяется',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Запишите проблемы, которые могут потребовать применения корректирующих и / или профилактических мер (в таблице аномалий)',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Разработать процедуры, обеспечивающие соответствие продукта указанным требованиям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Изучите и обработайте несоответствия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление приоритетами, которые должны соблюдаться, как функция дат окончания файла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '3.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить и внедрить средства защиты узлов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить средства, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить человеческие ресурсы, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать проверку продукции и тестовую документацию',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольная документация',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что контрольно-измерительное и испытательное оборудование соответствует потребностям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль среды проверки, измерения и испытаний оборудования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать рабочую среду',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль изменений в производственных процессах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Методы обработки контроля',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление производственными средствами, инструментами и программируемыми станками',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль обработки, хранения, упаковки, консервации и доставки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управляйте специальными процессами',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '14.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольные службы и жидкости в рабочей среде',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Внедрить самоконтроль для фильтрации ошибок персонала, которые могут снизить надежность узла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите защиту от электростатического разряда для сборочных узлов во время манипуляций и хранения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '26' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите периодические проверки для средств контроля, используемых для проверки производственных средств',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте самопроверку инструментов тестирования для обнаружения любых аномалий',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите ярлык для идентификации и изъятия устаревших расходных материалов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Настройте обработку индикаторов контроля испытаний в режиме реального времени, чтобы не допустить ухудшения работы узла после появления аномалии',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обладают отчетами о проверках и испытаниях',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь контрольный файл',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Владеть документацией, относящейся к несоответствию',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обеспечьте профилактическое обслуживание для выявления аномалий, если таковые имеются, перед использованием производственных средств на сборочном узле',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что процедура реализации средства известна',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что загружено правильное программное обеспечение, и сохраните идентификацию его версии',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что средства поддерживаются и что это обслуживание соблюдается',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что оператор прошел обучение (квалификацию), подходящую для данного вида деятельности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проверьте соответствие приобретенной продукции',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.6' }
        }]
    },


    ////   Интеграция в систему   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'integrSystetMarks',

        name: 'Интеграция в систему',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Реализуйте корректирующие действия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Осуществлять профилактические мероприятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Сделайте продукт отслеживаемым',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '16.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять упаковкой',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять хранением',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Поддерживать условия доставки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните проверки и испытания на этапе',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните заключительные проверки и испытания',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Провести осмотры и испытания, характерные для приема',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите степень несоответствия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите средства, необходимые для проверки и испытания продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Есть документы для проведения входной инспекции по расходным материалам',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Разработать процедуры, обеспечивающие соответствие продукта указанным требованиям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Изучите и обработайте несоответствия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить средства, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить человеческие ресурсы, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать проверку продукции и тестовую документацию',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольная документация',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что контрольно-измерительное и испытательное оборудование соответствует потребностям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль среды проверки, измерения и испытаний оборудования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать рабочую среду',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль изменений в производственных процессах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Методы обработки контроля',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление производственными средствами, инструментами и программируемыми станками',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль обработки, хранения, упаковки, консервации и доставки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управляйте специальными процессами',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '14.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольные службы и жидкости в рабочей среде',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Внедрить самоконтроль для фильтрации ошибок персонала, которые могут снизить надежность узла',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите защиту от электростатического разряда для сборочных узлов во время манипуляций и хранения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '18.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите ярлык для идентификации и изъятия устаревших расходных материалов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обладают отчетами о проверках и испытаниях',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь контрольный файл',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Владеть документацией, относящейся к несоответствию',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что процедура реализации средства известна',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что загружено правильное программное обеспечение, и сохраните идентификацию его версии',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Проверьте соответствие приобретенной продукции',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.6' }
        }]
    },


    ////   Эксплуатация и обслуживание   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'exploitationMarks',

        name: 'Эксплуатация и обслуживание',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Реализуйте корректирующие действия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Осуществлять профилактические мероприятия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Сделайте продукт отслеживаемым',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять упаковкой',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управлять хранением',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните проверки и испытания на этапе',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выполните заключительные проверки и испытания',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Принять политику контроля рисков, связанных с несоответствиями',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '16.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите степень несоответствия',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определите средства, необходимые для проверки и испытания продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '14.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Есть документы для проведения входной инспекции по расходным материалам',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Разработать процедуры, обеспечивающие соответствие продукта указанным требованиям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить документацию для специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить средства, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Определить человеческие ресурсы, касающиеся специальных процессов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольная документация',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать тестируемость и ремонтопригодность продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Убедитесь, что контрольно-измерительное и испытательное оборудование соответствует потребностям',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль среды проверки, измерения и испытаний оборудования',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контролировать рабочую среду',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль изменений в производственных процессах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '13.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Методы обработки контроля',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление производственными средствами, инструментами и программируемыми станками',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контроль обработки, хранения, упаковки, консервации и доставки',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управляйте специальными процессами',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '15.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольные службы и жидкости в рабочей среде',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Установите защиту от электростатического разряда для сборочных узлов во время манипуляций и хранения',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '17.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Иметь контрольный файл',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Владеть документацией, относящейся к несоответствию',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '11.1' }
        }]
    },


    ////   Вспомогательные мероприятия   ////


    {
        type: FieldTypes.PMarksBlock,
        id: 'advancedMarks',

        name: 'Вспомогательные мероприятия',
        tooltip: 'Оценка рекомендаций для фактора процесса',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Выделите инфраструктуру, необходимую для правильного выполнения производственных операций',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Постоянно улучшать надежность компании',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Собирать отзывы клиентов о надежности продукта в процессе эксплуатации',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Опишите процесс повышения надежности продукта и связанных с ним целей',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Провести сертификацию качества компании',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Получите бизнес операционной надежности для участия во всех этапах проект',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Обучите персонал, связанный с надежностью, или используйте персонал, квалифицированный как надежный',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Предоставить ресурсы, необходимые для изучения надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Управление достоверностью исследования документов в конфигурации',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выявить риски, связанные с Надежностью у субподрядчиков',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Интегрируйте надежность в политику качества компании',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.4' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Контрольно-измерительные приборы контроля, метрология средств измерений и промышленных средств',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Измерьте надежность продукции в эксплуатации',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Назначить ответственного за исследования надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.5' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Организовывать периодические встречи надежности с субподрядчиком',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.7' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Запланируйте последовательность задач и включите задачи надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Запланируйте процесс связи с субподрядчиком',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '4.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Планирование мероприятий по обеспечению надежности, включая повышение надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '9.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'План исследования надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Поддерживать надежность продукта в производстве',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.1' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Планируйте периодические консультации с клиентами по вопросам надежности',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выберите используемые компоненты',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '12.9' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Выберите поставщиков компонентов',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '10.8' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Мониторинг и контроль корректирующих действий, выполненных субподрядчиком в отношении надежности продукта',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.2' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Занимайтесь вопросами надежности в управленческих обзорах',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '5.6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Работа с аномалиями с использованием логики обработки инцидентов и корректирующих действий',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '8.3' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Используйте статистические методы, адаптированные к использованию обратной связи от операций',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '6' }
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Утвердить базовый уровень управления надежностью субподрядчика',
            values: recomendationValuesPattern,
            defaultValue: recomendationDefaultValue,
            payload: { pos: '7.7' }
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

        name: 'Годовая продолжительность фазы',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRappliedBlock',

        name: 'Рабочее напряжение',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'vRatedBlock',

        name: 'Номинальное напряжение',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'boardAmdBlock',

        name: 'Средняя температура платы во время фазы',
        defaultValue: '50'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'oCyBlock',

        name: 'Продолжительность цикла',
        defaultValue: '1'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'tCyclingBlock',

        name: 'Амплитуда колебаний, связанных с циклической фазой',
        defaultValue: '30'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'maxCyclingBlock',

        name: 'Максимальная температура платы во время фазы',
        defaultValue: '75'
    },

    {
        type: FieldTypes.InputNumber,
        id: 'gRMSBlock',

        name: 'Напряжение, связанное с каждой фазой случайной вибрации',
        defaultValue: '1'
    },


    ////   Оценки параметров   ///


    {
        type: FieldTypes.PMarksBlock,
        id: 'applicationPMarksBlock',

        name: 'Оценки параметров',
        elements: [{
            type: FieldTypes.SelectNumber,
        
            name: 'Тип пользователя в рассматриваемой фазе',
            values: [
                { value: '1', text: 'Благоприятный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Неблагоприятный' },
            ],
            defaultValue: '1',
            payload: { pos: '20' },
            tooltip: 'Представляет способность уважать процедуры, сталкивающиеся с эксплуатационными ограничениями'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Уровень квалификации пользователя на рассматриваемом этапе',
            values: [
                { value: '1', text: 'Благоприятный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Неблагоприятный' },
            ],
            defaultValue: '1',
            payload: { pos: '10' },
            tooltip: 'Представляет уровень контроля пользователя или работника относительно операционного контекста'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Мобильность системы',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '4' },
            tooltip: 'Представляет непредвиденные обстоятельства, связанные с возможностями перемещаемой системы'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Манипулирование продуктом',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '15' },
            tooltip: 'Представляет возможность ложных манипуляций, ударов, падений и т. д.'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Тип электрической сети для системы',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '4' },
            tooltip: 'Представляет ожидаемый уровень электрических помех в источниках питания, сигналах и электрических линиях: включение, переключение, подача питания, подключение / отключение'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Воздействие продукта на человека',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '8' },
            tooltip: 'Представляет подверженность непредвиденным обстоятельствам, связанным с деятельностью человека: шок, изменение в конечном использовании и т. д.'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Воздействие продукта на машины',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '3' },
            tooltip: 'Представляет непредвиденные обстоятельства, связанные с эксплуатацией машин, двигателей, приводов: удары, перегрев, электрические помехи, загрязняющие вещества и т. д.'
        }, {
            type: FieldTypes.SelectNumber,
        
            name: 'Подверженность продукта погодным условиям',
            values: [
                { value: '1', text: 'Неагрессивный' },
                { value: '3.2', text: 'Умеренный' },
                { value: '10', text: 'Тяжелый' },
            ],
            defaultValue: '1',
            payload: { pos: '2' },
            tooltip: 'Представляет воздействие дождя, града, мороза, песчаной бури, молнии, пыли'
        }]
    }

]
