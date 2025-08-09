window.addEventListener("load", () => {
    fetch('/', {
        headers: {'Accept': 'application/json'}
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Парсим JSON и передаём дальше
        })
        .then(employees => {
            console.log(employees); // Логируем данные для отладки
            const container = document.getElementById('container-main');
            
            if (!employees || !Array.isArray(employees)) {
                throw new Error('Employees data is not an array');
            }

            let html = `<div class="unit-title">Руководители университета</div>`;

            let html_1 = `<div class="unit-title">Ученый совет</div>`;
            let html_2 = `<div class="unit-title">Первый отдел</div>`;
            let html_3 = `<div class="unit-title">Отдел гражданской обороны, чрезвычайных ситуаций и мобилизационной подготовки</div>`;
            let html_4 = `<div class="unit-title">Бухгалтерия</div>`;
            let html_5 = `<div class="unit-title">Касса</div>`;
            let html_6 = `<div class="unit-title">Бухгалтер по расчету заработной платы</div>`;
            let html_7 = `<div class="unit-title">Бухгалтер по расчетам стипендии и иных выплат обучающимся</div>`;
            let html_8 = `<div class="unit-title">Бухгалтер по расчетам по найму жилого помещения в общежитии</div>`;
            let html_9 = `<div class="unit-title">Бухгалтер по расчетам с подотчетными лицами</div>`;
            let html_10 = `<div class="unit-title">Бухгалтер по налоговому учету</div>`;
            let html_11 = `<div class="unit-title">Бухгалтер по учету основных средств и материальных запасов</div>`;
            let html_12 = `<div class="unit-title">Бухгалтер по расчетам с поставщиками и подрядчиками</div>`;
            let html_13 = `<div class="unit-title">Бухгалтер по расчетам с покупателями</div>`;
            let html_14 = `<div class="unit-title">Отдел кадров</div>`;
            let html_15 = `<div class="unit-title">Юридический отдел</div>`;
            let html_16 = `<div class="unit-title">Отдел правового обеспечения финансово-хозяйственной деятельности и проектов</div>`;
            let html_17 = `<div class="unit-title">Студенческая канцелярия</div>`;
            let html_18 = `<div class="unit-title">Общий отдел</div>`;
            let html_19 = `<div class="unit-title">Военно-учетный стол (ВУС)</div>`;
            let html_20 = `<div class="unit-title">Архив</div>`;
            let html_21 = `<div class="unit-title">Международный отдел</div>`;
            let html_22 = `<div class="unit-title">Отдел академической мобильности</div>`;
            let html_23 = `<div class="unit-title">Управление массовых коммуникаций и медиа-проектов</div>`;
            let html_24 = `<div class="unit-title">Пресс-центр АГТУ</div>`;
            let html_25 = `<div class="unit-title">Отдел медиа-проектов</div>`;
            let html_26 = `<div class="unit-title">Рекламно-информационный центр</div>`;
            let html_27 = `<div class="unit-title">Управление по организационно-воспитательной работе</div>`;
            let html_28 = `<div class="unit-title">Отдел по культурно-массовой работе</div>`;
            let html_29 = `<div class="unit-title">Отдел по воспитательной и социальной работе</div>`;
            let html_30 = `<div class="unit-title">Музей истории АГТУ</div>`;
            let html_31 = `<div class="unit-title">Спортивный клуб</div>`;
            let html_32 = `<div class="unit-title">Центр социально-психологической помощи «Доверие»</div>`;
            let html_33 = `<div class="unit-title">Студенческий совет АГТУ</div>`;
            let html_34 = `<div class="unit-title">Профстудком АГТУ</div>`;
            let html_35 = `<div class="unit-title">Физкультурно-спортивное сооружение "Спорткомплекс"</div>`;
            let html_36 = `<div class="unit-title">Управление информационных систем и технологий</div>`;
            let html_37 = `<div class="unit-title">Отдел АСУ</div>`;
            let html_38 = `<div class="unit-title">Отдел информационной безопасности</div>`;
            let html_39 = `<div class="unit-title">Сервисный отдел</div>`;
            let html_40 = '<div class="unit-title">Отдел Вычислительных сетей и связи</div>';
            let html_41 = '<div class="unit-title">Диспетчерский отдел</div>';
            let html_42 = '<div class="unit-title">Учебный отдел</div>';
            let html_43 = '<div class="unit-title">Центр содействия трудоустройству выпускников АГТУ</div>';
            let html_44 = '<div class="unit-title">Отдел методического обеспечения учебного процесса</div>';
            let html_45 = '<div class="unit-title">Центр образовательной политики</div>';
            let html_46 = '<div class="unit-title">Издательство АГТУ</div>';
            let html_47 = '<div class="unit-title">Отдел допечатной подготовки изданий</div>';
            let html_48 = '<div class="unit-title">Редакция научных журналов</div>';
            let html_49 = '<div class="unit-title">Научно-образовательный центр профессиональных компетенций</div>';
            let html_50 = '<div class="unit-title">Центр довузовской подготовки, профориентации и приему в вуз</div>';
            let html_51 = '<div class="unit-title">Научная библиотека</div>';
            let html_52 = '<div class="unit-title">Отдел каталогизации</div>';
            let html_53 = '<div class="unit-title">Отдел научной литературы</div>';
            let html_54 = '<div class="unit-title">Читальный зал электронных ресурсов</div>';
            let html_55 = '<div class="unit-title">Отдел комплектования</div>';
            let html_56 = '<div class="unit-title">Информационно-библиографический отдел</div>';
            let html_57 = '<div class="unit-title">Центр научно-инновационного развития</div>';
            let html_58 = '<div class="unit-title">Отдел научных проектов</div>';
            let html_59 = '<div class="unit-title">Научно-исследовательская часть</div>';
            let html_60 = '<div class="unit-title">Отдел подготовки кадров высшей квалификации</div>';
            let html_61 = '<div class="unit-title">Отдел маркетинга</div>';
            let html_62 = '<div class="unit-title">Договорный отдел</div>';
            let html_63 = '<div class="unit-title">Отдел материально-технического снабжения</div>';
            let html_64 = '<div class="unit-title">Склад</div>';
            let html_65 = '<div class="unit-title">Планово-экономический отдел</div>';
            let html_66 = '<div class="unit-title">Сектор труда и заработной платы</div>';
            let html_67 = '<div class="unit-title">Отдел внебюджетной деятельности и социальной защиты</div>';
            let html_68 = '<div class="unit-title">Административно-хозяйственное управление</div>';
            let html_69 = '<div class="unit-title">Отдел по комплексному обслуживанию вуза</div>';
            let html_70 = '<div class="unit-title">Хозяйственный отдел</div>';
            let html_71 = '<div class="unit-title">Транспортный отдел</div>';
            let html_72 = '<div class="unit-title">Отдел по управлению имуществом и проектами</div>';
            let html_73 = '<div class="unit-title">Отдел охраны труда и техники безопасности</div>';
            let html_74 = '<div class="unit-title">Общежития</div>';
            let html_75 = '<div class="unit-title">Вахты учебных корпусов - Главный учебный корпус</div>';
            let html_76 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №2</div>';
            let html_77 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №3</div>';
            let html_78 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №4</div>';
            let html_79 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №5</div>';
            let html_80 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №6</div>';
            let html_81 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №7</div>';
            let html_82 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №8</div>';
            let html_83 = '<div class="unit-title">Вахты учебных корпусов - Учебный корпус №10-11</div>';
            let html_84 = '<div class="unit-title">Дополнительные структуры - Медицинский пункт</div>';
            let html_85 = '<div class="unit-title">Дополнительные структуры - Профсоюзный комитет сотрудников</div>';
            let html_86 = '<div class="unit-title">ИНСТИТУТ ЭКОНОМИКИ И ПРАВА</div>';
            let html_87 = '<div class="unit-title">Заочное отделение ИЭиП</div>';
            let html_88 = '<div class="unit-title">Финансы и учет (ФиУ)</div>';
            let html_89 = '<div class="unit-title">Производственный менеджмент (ПМ)</div>';
            let html_90 = '<div class="unit-title">Экономическая безопасность (ЭКБ)</div>';
            let html_91 = '<div class="unit-title">Правоведение</div>';
            let html_92 = '<div class="unit-title">Экономика и управление предприятием (ЭУП)</div>';
            let html_93 = '<div class="unit-title">Гуманитарные науки и психология (ГНП)</div>';
            let html_94 = '<div class="unit-title">Центр бизнес-образования</div>';
            let html_95 = '<div class="unit-title">Юридическая клиника</div>';
            let html_96 = '<div class="unit-title">ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ И КОММУНИКАЦИЙ</div>';
            let html_97 = '<div class="unit-title">Автоматизированные системы обработки информации и управления (АСОИУ)</div>';
            let html_98 = '<div class="unit-title">Прикладная информатика (ПИ)</div>';
            let html_99 = '<div class="unit-title">Связь (СВ)</div>';
            let html_100 = '<div class="unit-title">Автоматика и управление (АиУ)</div>';
            let html_101 = '<div class="unit-title">Информационная безопасность (ИБ)</div>';
            let html_102 = '<div class="unit-title">Высшая и прикладная математика (ВиПМ)</div>';
            let html_103 = '<div class="unit-title">ИНСТИТУТ МОРСКИХ ТЕХНОЛОГИЙ, ЭНЕРГЕТИКИ И ТРАНСПОРТА</div>';
            let html_104 = '<div class="unit-title">Очное обучение ИМТЭиТ</div>';
            let html_105 = '<div class="unit-title">Заочное обучение ИМТЭиТ</div>';
            let html_106 = '<div class="unit-title">Общеинженерные дисциплины и наземный транспорт (ОДиНТ)</div>';
            let html_107 = '<div class="unit-title">Судостроение и энергетические комплексы морской техники (СиЭК)</div>';
            let html_108 = '<div class="unit-title">Теплоэнергетика и холодильные машины (ТЭНиХМ)</div>';
            let html_109 = '<div class="unit-title">Электрооборудование и автоматика судов (ЭАС)</div>';
            let html_110 = '<div class="unit-title">Эксплуатация водного транспорта и промышленное рыболовство (ЭВТиПР)</div>';
            let html_111 = '<div class="unit-title">Тренажерный центр института морских технологий, энергетики и транспорта (ТЦ ИМТЭиТ)</div>';
            let html_112 = '<div class="unit-title">ИНСТИТУТ НЕФТИ И ГАЗА</div>';
            let html_113 = '<div class="unit-title">Очное отделение ИНиГ</div>';
            let html_114 = '<div class="unit-title">Заочное отделение ИНиГ</div>';
            let html_115 = '<div class="unit-title">Химия</div>';
            let html_116 = '<div class="unit-title">Химическая технология переработки нефти и газа (ХТНГ)</div>';
            let html_117 = '<div class="unit-title">Геология нефти и газа (ГНГ)</div>';
            let html_118 = '<div class="unit-title">Разработка и эксплуатация нефтяных и газовых месторождений (РЭНГ)</div>';
            let html_119 = '<div class="unit-title">Технологические машины и оборудование (ТМО)</div>';
            let html_120 = '<div class="unit-title">ИНСТИТУТ РЫБНОГО ХОЗЯЙСТВА, БИОЛОГИИ И ПРИРОДОПОЛЬЗОВАНИЯ</div>';
            let html_121 = '<div class="unit-title">Заочное отделение ИРБиП</div>';
            let html_122 = '<div class="unit-title">Аквакультура и водные биоресурсы (АВБ)</div>';
            let html_123 = '<div class="unit-title">Научно-исследовательская лаборатория «Осетроводство и перспективные объекты аквакультуры»</div>';
            let html_124 = '<div class="unit-title">Научно-исследовательская лаборатория «Биотехнологии сохранения и воспроизводства ценных видов рыб»</div>';
            let html_125 = '<div class="unit-title">Гидробиология и общая экология (ГОЭ)</div>';
            let html_126 = '<div class="unit-title">Экологический туризм (ЭЛТ)</div>';
            let html_127 = '<div class="unit-title">Иностранные языки и речевая коммуникация (ИЯиРК)</div>';
            let html_128 = '<div class="unit-title">Лингвистический центр</div>';
            let html_129 = '<div class="unit-title">Центр тестирования иностранных граждан</div>';
            let html_130 = '<div class="unit-title">Технология товаров и товароведение (ТТТ)</div>';
            let html_131 = '<div class="unit-title">Прикладная биология и микробиология (ПБМ)</div>';
            let html_132 = '<div class="unit-title">ИНСТИТУТ ГРАДОСТРОИТЕЛЬСТВА</div>';
            let html_133 = '<div class="unit-title">Строительство (СТР)</div>';
            let html_134 = '<div class="unit-title">Архитектура (АРХ)</div>';
            let html_135 = '<div class="unit-title">ФАКУЛЬТЕТ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ</div>';
            let html_136 = '<div class="unit-title">Отделение "Связь и телекоммуникации"</div>';
            let html_137 = '<div class="unit-title">Отделение "Общеобразовательные дисциплины"</div>';
            let html_138 = '<div class="unit-title">Отделение "Нефтегазовое"</div>';
            let html_139 = '<div class="unit-title">Отделение "Сервис и право"</div>';
            let html_140 = '<div class="unit-title">Отделение "Финансово-экономическое"</div>';
            let html_141 = '<div class="unit-title">Отделение "Техническое"</div>';
            let html_142 = '<div class="unit-title">СП "Центр профессионального развития"</div>';
            let html_143 = '<div class="unit-title">ИНСТИТУТ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ</div>';
            let html_144 = '<div class="unit-title">ПОДГОТОВИТЕЛЬНЫЙ ФАКУЛЬТЕТ ДЛЯ ИНОСТРАННЫХ ГРАЖДАН</div>';
            let html_145 = '<div class="unit-title">Автотехнический учебный центр повышения квалификации и переподготовки</div>';
            let html_146 = '<div class="unit-title">Дмитровский рыбохозяйственный технологический институт</div>';
            let html_147 = '<div class="unit-title">Ейский морской рыбопромышленный техникум</div>';
            let html_148 = '<div class="unit-title">Волго-Каспийский морской рыбопромышленный колледж</div>';
            let html_149 = '<div class="unit-title">Филиал ФГБОУ ВО Астраханский государственный технический университет в Ташкентской области</div>';
            let html_150 = '<div class="unit-title"></div>';


            employees.forEach(emp => {
                let short = emp.short_num.split(" ");
                let email = emp.email.split(" ");
                if (emp.unit == 'Руководители университета') {
                    if (emp.short_num != '') {
                        html += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>`;
                    short.forEach(num => {
                        if (num.length == 4) {
                            html += `8(8512)61-4${num}`
                        } else {
                            html += `${num}`
                        }
                    })
                    html += `</p></div><div class="cont-el phone-num"><p>${emp.short_num}</p></div><div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div><div class="cont-el email"><p>`
                    email.forEach(em => {
                        html += `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a>`
                    })
                    html += `</p></div><div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div></div>`
                    } else {
                        html += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Ученый Совет') {
                    if (emp.short_num != '') {
                        html_1 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>`;
                    short.forEach(num => {
                        if (num.length == 4) {
                            html_1 += `8(8512)61-4${num}`
                        } else {
                            html_1 += `${num}`
                        }
                    })
                    html_1 += `</p></div><div class="cont-el phone-num"><p>${emp.short_num}</p></div><div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div><div class="cont-el email"><p>`
                    email.forEach(em => {
                        html_1 += `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a>`
                    })
                    html_1 += `</p></div><div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div></div>`
                    } else {
                        html += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png"></a>${emp.email}</p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Первый отдел') {
                    if (emp.short_num != '') {
                        html_2 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_2 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел гражданской обороны, чрезвычайных ситуаций и мобилизационной подготовки') {
                    if (emp.short_num != '') {
                        html_3 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_3 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтерия') {
                    if (emp.short_num != '') {
                        html_4 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_4 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Касса') {
                    if (emp.short_num != '') {
                        html_5 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_5 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по расчету заработной платы') {
                    if (emp.short_num != '') {
                        html_6 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_6 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по расчетам стипендии и иных выплат обучающимся') {
                    if (emp.short_num != '') {
                        html_7 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_7 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по учету расчетов по доходам и расходом научно-исследовательской части') {
                    if (emp.short_num != '') {
                        html_8 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_8 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по расчетам с подотчетными лицами') {
                    if (emp.short_num != '') {
                        html_9 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_9 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по налоговому учету') {
                    if (emp.short_num != '') {
                        html_10 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_10 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по учету основных средств и материальных запасов') {
                    if (emp.short_num != '') {
                        html_11 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_11 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по расчетам с поставщиками и подрядчиками') {
                    if (emp.short_num != '') {
                        html_12 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_12 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Бухгалтер по расчетам с покупателями') {
                    if (emp.short_num != '') {
                        html_13 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_13 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел кадров') {
                    if (emp.short_num != '') {
                        html_14 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_14 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Юридический отдел') {
                    if (emp.short_num != '') {
                        html_15 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_15 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел правового обеспечения финансово-хозяйственной деятельности и проектов') {
                    if (emp.short_num != '') {
                        html_16 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_16 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Студенческая канцелярия') {
                    if (emp.short_num != '') {
                        html_17 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>`;
                        short.forEach(num => {
                            if (num.length == 4) {
                                html_17 += `8(8512)61-4${num}<br>`
                            } else {
                                html_17 += `${num}<br>`
                            }
                        })
                        html_17 += `</p></div><div class="cont-el phone-num"><p>${emp.short_num}</p></div><div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div><div class="cont-el email"><p>`
                        email.forEach(em => {
                            html_17 += `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a>`
                        })
                        html_17 += `</p></div><div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div></div>`
                        } else {
                            html_17 += `
                            <div class="container-row">
                                <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                                <div class="cont-el phone-num"><p>-</p></div>
                                <div class="cont-el phone-num"><p>-</p></div>
                                <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                                <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png"></a>${emp.email}</p></div>
                                <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                            </div>
                        `;
                        }
                } else if (emp.unit == 'Общий отдел') {
                    if (emp.short_num != '') {
                        html_18 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_18 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Военно-учетный стол (ВУС)') {
                    if (emp.short_num != '') {
                        html_19 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_19 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Архив') {
                    if (emp.short_num != '') {
                        html_20 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_20 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Международный отдел') {
                    if (emp.short_num != '') {
                        html_21 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_21 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел академической мобильности') {
                    if (emp.short_num != '') {
                        html_22 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_22 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Управление массовых коммуникаций и медиа-проектов') {
                    if (emp.short_num != '') {
                        html_23 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_23 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Пресс-центр АГТУ') {
                    if (emp.short_num != '') {
                        html_24 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_24 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел медиа-проектов') {
                    if (emp.short_num != '') {
                        html_25 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_25 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Рекламно-информационный центр') {
                    if (emp.short_num != '') {
                        html_26 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_26 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Управление по организационно-воспитательной работе') {
                    if (emp.short_num != '') {
                        html_27 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_27 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел по культурно-массовой работе') {
                    if (emp.short_num != '') {
                        html_28 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_28 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел по воспитательной и социальной работе') {
                    if (emp.short_num != '') {
                        html_29 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_29 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Музей истории АГТУ') {
                    if (emp.short_num != '') {
                        html_30 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_30 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Спортивный клуб') {
                    if (emp.short_num != '') {
                        html_31 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_31 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр социально-психологической помощи «Доверие»') {
                    if (emp.short_num != '') {
                        html_32 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_32 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Студенческий совет АГТУ') {
                    if (emp.short_num != '') {
                        html_33 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_33 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Профстудком АГТУ') {
                    if (emp.short_num != '') {
                        html_34 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_34 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Физкультурно-спортивное сооружение "Спорткомплекс"') {
                    if (emp.short_num != '') {
                        html_35 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_35 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Управление информационных систем и технологий') {
                    if (emp.short_num != '') {
                        html_36 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_36 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел АСУ') {
                    if (emp.short_num != '') {
                        html_37 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_37 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел информационной безопасности') {
                    if (emp.short_num != '') {
                        html_38 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_38 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Сервисный отдел') {
                    if (emp.short_num != '') {
                        html_39 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_39 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел Вычислительных сетей и связи') {
                    if (emp.short_num != '') {
                        html_40 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_40 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Диспетчерский отдел') {
                    if (emp.short_num != '') {
                        html_41 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_41 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Учебный отдел') {
                    if (emp.short_num != '') {
                        html_42 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_42 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр содействия трудоустройству выпускников АГТУ') {
                    if (emp.short_num != '') {
                        html_43 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_43 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел методического обеспечения учебного процесса') {
                    if (emp.short_num != '') {
                        html_44 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_44 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр образовательной политики') {
                    if (emp.short_num != '') {
                        html_45 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_45 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Издательство АГТУ') {
                    if (emp.short_num != '') {
                        html_46 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_46 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел допечатной подготовки изданий') {
                    if (emp.short_num != '') {
                        html_47 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_47 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Редакция научных журналов') {
                    if (emp.short_num != '') {
                        html_48 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_48 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Научно-образовательный центр профессиональных компетенций') {
                    if (emp.short_num != '') {
                        html_49 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_49 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр довузовской подготовки, профориентации и приему в вуз') {
                    if (emp.short_num != '') {
                        html_50 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_50 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Научная библиотека') {
                    if (emp.short_num != '') {
                        html_51 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_51 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел каталогизации') {
                    if (emp.short_num != '') {
                        html_52 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_52 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел научной литературы') {
                    if (emp.short_num != '') {
                        html_53 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_53 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Читальный зал электронных ресурсов') {
                    if (emp.short_num != '') {
                        html_54 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_54 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел комплектования') {
                    if (emp.short_num != '') {
                        html_55 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_55 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Информационно-библиографический отдел') {
                    if (emp.short_num != '') {
                        html_56 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_56 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр научно-инновационного развития') {
                    if (emp.short_num != '') {
                        html_57 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_57 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел научных проектов') {
                    if (emp.short_num != '') {
                        html_58 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_58 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Научно-исследовательская часть') {
                    if (emp.short_num != '') {
                        html_59 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_59 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел подготовки кадров высшей квалификации') {
                    if (emp.short_num != '') {
                        html_60 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_60 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел маркетинга') {
                    if (emp.short_num != '') {
                        html_61 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_61 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Договорный отдел') {
                    if (emp.short_num != '') {
                        html_62 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_62 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел материально-технического снабжения') {
                    if (emp.short_num != '') {
                        html_63 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_63 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Склад') {
                    if (emp.short_num != '') {
                        html_64 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_64 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Планово-экономический отдел') {
                    if (emp.short_num != '') {
                        html_65 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_65 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Сектор труда и заработной платы') {
                    if (emp.short_num != '') {
                        html_66 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_66 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел внебюджетной деятельности и социальной защиты') {
                    if (emp.short_num != '') {
                        html_67 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_67 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Административно-хозяйственное управление') {
                    if (emp.short_num != '') {
                        html_68 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_68 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел по комплексному обслуживанию вуза') {
                    if (emp.short_num != '') {
                        html_69 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_69 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Хозяйственный отдел') {
                    if (emp.short_num != '') {
                        html_70 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_70 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Транспортный отдел') {
                    if (emp.short_num != '') {
                        html_71 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_71 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел по управлению имуществом и проектами') {
                    if (emp.short_num != '') {
                        html_72 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_72 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отдел охраны труда и техники безопасности') {
                    if (emp.short_num != '') {
                        html_73 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_73 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Общежития') {
                    if (emp.short_num != '') {
                        html_74 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_74 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Главный учебный корпус') {
                    if (emp.short_num != '') {
                        html_75 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_75 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №2') {
                    if (emp.short_num != '') {
                        html_76 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_76 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №3') {
                    if (emp.short_num != '') {
                        html_77 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_77 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №4') {
                    if (emp.short_num != '') {
                        html_78 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_78 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №5') {
                    if (emp.short_num != '') {
                        html_79 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_79 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №6') {
                    if (emp.short_num != '') {
                        html_80 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_80 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №7') {
                    if (emp.short_num != '') {
                        html_81 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_81 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №8') {
                    if (emp.short_num != '') {
                        html_82 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_82 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Вахты учебных корпусов - Учебный корпус №10-11') {
                    if (emp.short_num != '') {
                        html_83 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_83 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Дополнительные структуры - Медицинский пункт') {
                    if (emp.short_num != '') {
                        html_84 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_84 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Дополнительные структуры - Профсоюзный комитет сотрудников') {
                    if (emp.short_num != '') {
                        html_85 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_85 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ ЭКОНОМИКИ И ПРАВА') {
                    if (emp.short_num != '') {
                        html_86 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_86 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Заочное отделение ИЭиП') {
                    if (emp.short_num != '') {
                        html_87 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_87 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Финансы и учет (ФиУ)') {
                    if (emp.short_num != '') {
                        html_88 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_88 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Производственный менеджмент (ПМ)') {
                    if (emp.short_num != '') {
                        html_89 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_89 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Экономическая безопасность (ЭКБ)') {
                    if (emp.short_num != '') {
                        html_90 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_90 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Правоведение') {
                    if (emp.short_num != '') {
                        html_91 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_91 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Экономика и управление предприятием (ЭУП)') {
                    if (emp.short_num != '') {
                        html_92 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_92 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Гуманитарные науки и психология (ГНП)') {
                    if (emp.short_num != '') {
                        html_93 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_93 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр бизнес-образования') {
                    if (emp.short_num != '') {
                        html_94 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_94 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Юридическая клиника') {
                    if (emp.short_num != '') {
                        html_95 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_95 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ И КОММУНИКАЦИЙ') {
                    if (emp.short_num != '') {
                        html_96 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_96 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Автоматизированные системы обработки информации и управления (АСОИУ)') {
                    if (emp.short_num != '') {
                        html_97 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_97 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Прикладная информатика (ПИ)') {
                    if (emp.short_num != '') {
                        html_98 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_98 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Связь (СВ)') {
                    if (emp.short_num != '') {
                        html_99 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_99 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Автоматика и управление (АиУ)') {
                    if (emp.short_num != '') {
                        html_100 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_100 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Информационная безопасность (ИБ)') {
                    if (emp.short_num != '') {
                        html_101 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_101 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Высшая и прикладная математика (ВиПМ)') {
                    if (emp.short_num != '') {
                        html_102 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_102 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ МОРСКИХ ТЕХНОЛОГИЙ, ЭНЕРГЕТИКИ И ТРАНСПОРТА') {
                    if (emp.short_num != '') {
                        html_103 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_103 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Очное обучение ИМТЭиТ') {
                    if (emp.short_num != '') {
                        html_104 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_104 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Заочное обучение ИМТЭиТ') {
                    if (emp.short_num != '') {
                        html_105 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_105 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Общеинженерные дисциплины и наземный транспорт (ОДиНТ)') {
                    if (emp.short_num != '') {
                        html_106 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_106 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Судостроение и энергетические комплексы морской техники (СиЭК)') {
                    if (emp.short_num != '') {
                        html_107 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_107 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Теплоэнергетика и холодильные машины (ТЭНиХМ)') {
                    if (emp.short_num != '') {
                        html_108 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_108 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Электрооборудование и автоматика судов (ЭАС)') {
                    if (emp.short_num != '') {
                        html_109 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_109 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Эксплуатация водного транспорта и промышленное рыболовство (ЭВТиПР)') {
                    if (emp.short_num != '') {
                        html_110 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_110 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Тренажерный центр института морских технологий, энергетики и транспорта (ТЦ ИМТЭиТ)') {
                    if (emp.short_num != '') {
                        html_111 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_111 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ НЕФТИ И ГАЗА') {
                    if (emp.short_num != '') {
                        html_112 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_112 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Очное отделение ИНиГ') {
                    if (emp.short_num != '') {
                        html_113 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_113 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Заочное отделение ИНиГ') {
                    if (emp.short_num != '') {
                        html_114 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_114 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Химия') {
                    if (emp.short_num != '') {
                        html_115 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_115 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Химическая технология переработки нефти и газа (ХТНГ)') {
                    if (emp.short_num != '') {
                        html_116 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_116 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Геология нефти и газа (ГНГ)') {
                    if (emp.short_num != '') {
                        html_117 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_117 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Разработка и эксплуатация нефтяных и газовых месторождений (РЭНГ)') {
                    if (emp.short_num != '') {
                        html_118 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_118 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Технологические машины и оборудование (ТМО)') {
                    if (emp.short_num != '') {
                        html_119 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_119 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ РЫБНОГО ХОЗЯЙСТВА, БИОЛОГИИ И ПРИРОДОПОЛЬЗОВАНИЯ') {
                    if (emp.short_num != '') {
                        html_120 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_120 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Заочное отделение ИРБиП') {
                    if (emp.short_num != '') {
                        html_121 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_121 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Аквакультура и водные биоресурсы (АВБ)') {
                    if (emp.short_num != '') {
                        html_122 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_122 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Научно-исследовательская лаборатория «Осетроводство и перспективные объекты аквакультуры»') {
                    if (emp.short_num != '') {
                        html_123 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_123 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Научно-исследовательская лаборатория «Биотехнологии сохранения и воспроизводства ценных видов рыб»') {
                    if (emp.short_num != '') {
                        html_124 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_124 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Гидробиология и общая экология (ГОЭ)') {
                    if (emp.short_num != '') {
                        html_125 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_125 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Экологический туризм (ЭЛТ)') {
                    if (emp.short_num != '') {
                        html_126 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_126 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Иностранные языки и речевая коммуникация (ИЯиРК)') {
                    if (emp.short_num != '') {
                        html_127 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_127 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Лингвистический центр') {
                    if (emp.short_num != '') {
                        html_128 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_128 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Центр тестирования иностранных граждан') {
                    if (emp.short_num != '') {
                        html_129 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_129 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Технология товаров и товароведение (ТТТ)') {
                    if (emp.short_num != '') {
                        html_130 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_130 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Прикладная биология и микробиология (ПБМ)') {
                    if (emp.short_num != '') {
                        html_131 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_131 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ ГРАДОСТРОИТЕЛЬСТВА') {
                    if (emp.short_num != '') {
                        html_132 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_132 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Строительство (СТР)') {
                    if (emp.short_num != '') {
                        html_133 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_133 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Архитектура (АРХ)') {
                    if (emp.short_num != '') {
                        html_134 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_134 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ФАКУЛЬТЕТ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ') {
                    if (emp.short_num != '') {
                        html_135 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_135 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Связь и телекоммуникации"') {
                    if (emp.short_num != '') {
                        html_136 += `
                        <div class="container-row">
                            <div 
                            class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_136 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Общеобразовательные дисциплины"') {
                    if (emp.short_num != '') {
                        html_137 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_137 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Нефтегазовое"') {
                    if (emp.short_num != '') {
                        html_138 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_138 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Сервис и право"') {
                    if (emp.short_num != '') {
                        html_139 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_139 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Финансово-экономическое"') {
                    if (emp.short_num != '') {
                        html_140 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_140 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Отделение "Техническое"') {
                    if (emp.short_num != '') {
                        html_141 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_141 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'СП "Центр профессионального развития"') {
                    if (emp.short_num != '') {
                        html_142 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_142 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ИНСТИТУТ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ') {
                    if (emp.short_num != '') {
                        html_143 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_143 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'ПОДГОТОВИТЕЛЬНЫЙ ФАКУЛЬТЕТ ДЛЯ ИНОСТРАННЫХ ГРАЖДАН') {
                    if (emp.short_num != '') {
                        html_144 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_144 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Автотехнический учебный центр повышения квалификации и переподготовки') {
                    if (emp.short_num != '') {
                        html_145 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_145 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Дмитровский рыбохозяйственный технологический институт') {
                    if (emp.short_num != '') {
                        html_146 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_146 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Ейский морской рыбопромышленный техникум') {
                    if (emp.short_num != '') {
                        html_147 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_147 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Волго-Каспийский морской рыбопромышленный колледж') {
                    if (emp.short_num != '') {
                        html_148 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${`8(8512)61-4` + emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_148 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                } else if (emp.unit == 'Филиал ФГБОУ ВО Астраханский государственный технический университет в Ташкентской области') {
                    if (emp.short_num != '') {
                        html_149 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    } else {
                        html_149 += `
                        <div class="container-row">
                            <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el phone-num"><p>-</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                            <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                            <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                        </div>
                    `;
                    }
                }

            });
            container.innerHTML = html + html_1 + html_2 + html_3 + html_4 + html_5 + html_6 + html_7 + html_8 + html_9 + html_10 + html_11 + html_12 + html_13 + html_14 + html_15 + html_16 + html_17 + html_18 + html_19 + html_20 + html_21 + html_22 + html_23 + html_24 + html_25 + html_26 + html_27 + html_28 + html_29 + html_30 + html_31 + html_32 + html_33 + html_34 + html_35 + html_36 + html_37 + html_38 
            + html_39 + html_40 + html_41 + html_42 + html_43 + html_44 + html_45 + html_46 + html_47 + html_48 + html_49 + html_50 + html_51 + html_52 + html_53 + html_54 + html_55 + html_56 + html_57 + html_58 + html_59 + html_60 + html_61 + html_62 + html_63 + html_64 + html_65 + html_66 + html_67 + html_68 + html_69 + html_70 + html_71 + html_72 + html_73 + html_74 + html_75 + html_76 + html_77 + html_78 + html_79
            + html_80 + html_81 + html_82 + html_83 + html_84 + html_85 + html_86 + html_87 + html_88 + html_89 + html_90 + html_91 + html_92 + html_93 + html_94 + html_95 + html_96 + html_97 + html_98 + html_99 + html_100 + html_101 + html_102 + html_103 + html_104 + html_105 + html_106 + html_107 + html_108
            + html_109 + html_110 + html_111 + html_112 + html_113 + html_114 + html_115 + html_116 + html_117 + html_118 + html_119 + html_120 + html_121 + html_122 + html_123 + html_124 + html_125 + html_126 + html_127 + html_128 + html_129 + html_130 + html_131 + html_132 + html_133 + html_134 + html_135 + html_136 + html_137 + html_138 + html_139 + html_140 + html_141 + html_142 + html_143 + html_144 + html_145 + html_146 + html_147 + html_148 + html_149 
        })
        .catch(error => {
            console.error('Error:', error);
            const container = document.getElementById('employees-container');
            container.innerHTML = `<p style="color: red;">Ошибка загрузки данных: ${error.message}</p>`;
        })
})

