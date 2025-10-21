function isMobileView() {
    return window.matchMedia('(max-width: 768px)').matches;
}

// Функция для создания строки сотрудника (десктопная версия)
function createEmployeeRow(emp) {
    const fio = emp.fio;
    const jobTitle = emp.job_title;
    const email = emp.email;
    const cabinet = emp.cabinet;
    const shortNum = emp.short_num;
    
    let phoneHtml = '';
    if (shortNum && shortNum !== '' && shortNum.length < 4) {
        const shortNums = shortNum.split(" ");
        shortNums.forEach(num => {
            if (num.length == 3) {
                phoneHtml += `8(851)261-4${num[0]}-${num[1]}${num[2]}<br>`;
            } else {
                phoneHtml += `${num}<br>`;
            }
        });
        
        return `
            <div class="container-row">
                <div class="cont-el"><p>${fio}</p></div>
                <div class="cont-el phone-num"><p>${phoneHtml}</p></div>
                <div class="cont-el phone-num"><p>${shortNum}</p></div>
                <div class="cont-el job-title"><p>${jobTitle}</p></div>
                <div class="cont-el email"><p>${email ? `<a href="mailto:${email}"><img src="/static/img/mail.png">${email}</a>` : '-'}</p></div>
                <div class="cont-el cabinet"><p>${cabinet}</p></div>
            </div>
        `;
    } else if (shortNum && shortNum.length > 3) {
        return `
            <div class="container-row">
                <div class="cont-el"><p>${fio}</p></div>
                <div class="cont-el phone-num"><p>${shortNum}</p></div>
                <div class="cont-el phone-num"><p>-</p></div>
                <div class="cont-el job-title"><p>${jobTitle}</p></div>
                <div class="cont-el email"><p>${email ? `<a href="mailto:${email}"><img src="/static/img/mail.png">${email}</a>` : '-'}</p></div>
                <div class="cont-el cabinet"><p>${cabinet}</p></div>
            </div>
        `;
    } else {
        return `
            <div class="container-row">
                <div class="cont-el"><p>${fio}</p></div>
                <div class="cont-el phone-num"><p>-</p></div>
                <div class="cont-el phone-num"><p>-</p></div>
                <div class="cont-el job-title"><p>${jobTitle}</p></div>
                <div class="cont-el email"><p>${email ? `<a href="mailto:${email}"><img src="/static/img/mail.png">${email}</a>` : '-'}</p></div>
                <div class="cont-el cabinet"><p>${cabinet}</p></div>
            </div>
        `;
    }
}

// Функция для создания строки сотрудника (мобильная версия)
function createEmployeeRowForMobile(emp) {
    const fio = emp.fio;
    const jobTitle = emp.job_title;
    const email = emp.email;
    const cabinet = emp.cabinet;
    const shortNum = emp.short_num;
    
    let phoneHtml = '';
    if (shortNum && shortNum !== '' && shortNum.length < 4) {
        const shortNums = shortNum.split(" ");
        shortNums.forEach(num => {
            if (num.length == 3) {
                phoneHtml += `8(851)261-4${num[0]}-${num[1]}${num[2]}<br>`;
            } else {
                phoneHtml += `${num}<br>`;
            }
        });
        
        return `
            <div class="container-row">
                <div class="cont-info-1">
                    <div class="cont-el fio"><p>${fio}</p></div>
                    <div class="cont-el job-title"><p>${jobTitle}</p></div>
                </div>
                <div class="cont-info-2">
                    <div class="cont-el phone-num"><p><a href="tel:${phoneHtml}">${phoneHtml}</a></p></div>
                    <div class="cont-el email"><p>${email ? `<a href="mailto:${email}">${email}</a>` : '-'}</p></div>
                </div>
                <div class="cont-el cabinet"><p>${cabinet}</p></div>
            </div>
        `;
    } else {
        return `
            <div class="container-row">
                <div class="cont-info-1">
                    <div class="cont-el fio"><p>${fio}</p></div>
                    <div class="cont-el job-title"><p>${jobTitle}</p></div>
                </div>
                <div class="cont-info-2">
                    <div class="cont-el email"><p>${email ? `<a href="mailto:${email}">${email}</a>` : '-'}</p></div>
                </div>
                <div class="cont-el cabinet"><p>${cabinet}</p></div>
            </div>
        `;
    }
}

// Функция для загрузки данных по подразделению
function loadDepartmentData(departmentName) {
    fetch('/search?q=' + encodeURIComponent(departmentName), {
        headers: {'Accept': 'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('container-main');

        // Обрабатываем разные форматы ответа
        let empUnits = [];
        
        if (Array.isArray(data)) {
            empUnits = data;
        } else if (data.employees && Array.isArray(data.employees)) {
            empUnits = [{
                unit: { label: departmentName },
                employees: data.employees
            }];
        } else if (typeof data === 'object') {
            for (let key in data) {
                if (Array.isArray(data[key])) {
                    empUnits = [{
                        unit: { label: departmentName },
                        employees: data[key]
                    }];
                    break;
                }
            }
        }

        // Собираем HTML для результатов поиска
        let fullHtml = '';

        empUnits.forEach((empUnit) => {
            const employees = empUnit.employees;
            const unit = empUnit.unit;
            const unitName = unit.label || departmentName;
            
            if (employees && employees.length > 0) {
                fullHtml +=  `<div class="unit-title"><div>${unit.label || 'Неизвестное подразделение'}</div><div class="contact">${unit.email}</div>
                            <div class="contact">${unit.phone}</div></div>`;
                employees.forEach(emp => {
                    if (isMobileView()) {
                        fullHtml += createEmployeeRowForMobile(emp);
                    } else {
                        fullHtml += createEmployeeRow(emp);
                    }
                });
            } 
        });

        container.innerHTML = fullHtml;
    })
    .catch(error => {
        console.error('Ошибка загрузки данных отдела:', error);
        const container = document.getElementById('container-main');
        if (container) {
            container.innerHTML = '<div class="error-message">Ошибка при загрузке данных отдела</div>';
        }
    });
}

// Функция для загрузки всех подразделений
function loadAllDepartments() {
    // Очищаем поле поиска
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.value = '';
    
    // Загружаем главную страницу
    fetch('/', {
        headers: {'Accept': 'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(empUnits => {
        const container = document.getElementById('container-main');
        
        if (!empUnits || !Array.isArray(empUnits)) {
            throw new Error('EmpUnits data is not an array');
        }

        if (isMobileView()) {
            document.getElementById('info-title').innerHTML = 'ФИО<br>Должность';
            document.getElementById('contact-title').textContent = 'Контактная информация';
        }
        label.innerHTML = '<div class="el-title fio-title" id="info-title">ФИО</div><div class="el-title phone-num phone-title" id="contact-title">Номер телефона</div><div class="el-title short-phone-num">Короткий номер<br><div style="font-size: 10px; color:#9e9fa5;">*только с телефонов АГТУ</div></div><div class="el-title job-title job-general">Должность</div><div class="el-title email email-title">Email</div><div class="el-title cabinet cabinet-title">Кабинет</div>';
        let fullHtml = '';

        empUnits.forEach(empUnit => {
            if (!empUnit.employees || empUnit.employees.length === 0) {
                return;
            }
            
            fullHtml += `<div class="unit-title"><div>${empUnit.unit.label || 'Неизвестное подразделение'}</div><div class="contact">${empUnit.unit.email}</div><div class="contact">${empUnit.unit.phone}</div></div>`;
            
            empUnit.employees.forEach(emp => {
                if (isMobileView()) {
                    fullHtml += createEmployeeRowForMobile(emp);
                } else {
                    fullHtml += createEmployeeRow(emp);
                }
            });
        });

        container.innerHTML = fullHtml;
    })
    .catch(error => {
        console.error('Ошибка загрузки главной страницы:', error);
        const container = document.getElementById('container-main');
        if (container) {
            container.innerHTML = '<div class="error-message">Ошибка при загрузке данных</div>';
        }
    });
}

// Добавляем обработчики после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {

    // Находим все кнопки подразделений (кроме btn-all)
    const unitButtons = document.querySelectorAll('.button-el[id^="btn-"]:not(#btn-all)');
    
    unitButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Берем текст кнопки как название подразделения
            const departmentName = this.textContent.trim();
            loadDepartmentData(departmentName);
        });
    });
});

// Экспортируем функции для использования в других скриптах
window.orderBtn = {
    loadDepartmentData,
    loadAllDepartments
};