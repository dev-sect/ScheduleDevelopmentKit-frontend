const TypeCards = Object.freeze({
    ADD_TIMETABLE: { // 1
        name: "AddTimetable",
        data: {
            textHeading: 'Новое расписание',
            describeText: 'Добавляет новое расписание в систему',
            icon: 'add-timetable.svg'
        }
    },
    NEW_EVENT: { // 2
        name: "NewEvent",
        data: {
            textHeading: 'Мероприятие',
            describeText: 'Разовое, так и спланированное',
            icon: 'new-event.svg'
        }
    },
    NEW_COUPLE: { // 3
        name: "NewCouple",
        data: {
            textHeading: 'Новая пара',
            describeText: 'Нужно добавить кабинет, преподавателя, предмет и группу',
            icon: 'new-couple.svg'
        }
    },
    REPORT: { // 4
        name: "Report",
        data: {
            textHeading: 'Репорт',
            describeText: 'Отчет для преподавателя о проводимых им парах',
            icon: 'report.svg'
        }
    },
    TIMETABLE: { // 5
        name: "Timetable",
        data: {
            textHeading: 'Расписание',
            describeText: 'Можно увидеть данные о студентах и преподавателях',
            icon: 'timetable.svg'
        }
    },
    DIFF_TIMETABLE: { // 6
        name: "DiffTimetable",
        data: {
            textHeading: 'Дельта расписаний',
            describeText: 'Можно увидеть разницу между двумя выбранными расписаниями',
            icon: 'diff-timetable.svg'
        }
    },
    TEACHERS: { // 7
        name: "Teachers",
        data: {
            textHeading: 'Преподаватели',
            describeText: 'Выводит список преподавателей и позволяет менять их информацию',
            icon: 'teachers.svg'
        }
    },
    EXPORT: { // 8
        name: "Export",
        data: {
            textHeading: 'Экспорт пар',
            describeText: 'Можно и в Excel, и в Google таблицу',
            icon: 'export.svg'
        }
    },
    IMPORT: { // 9
        name: "Import",
        data: {
            textHeading: 'Импорт пар',
            describeText: 'Можно из Excel, и из Google таблиц',
            icon: 'import.svg'
        }
    },
    IMPORT_FROM_ISU: { // 10
        name: "ImportFromISU",
        data: {
            textHeading: 'Импорт пар из ИСУ',
            describeText: 'Импортирует расписание с помощью ИСУ ИТМО',
            icon: 'import.svg'
        }
    },
})
export default TypeCards;