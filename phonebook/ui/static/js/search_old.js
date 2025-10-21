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
    if (shortNum && shortNum !== '') {
        const shortNums = shortNum.split(" ");
        console.log(shortNums);
        shortNums.forEach(num => {
            if (num.length == 3) {
                phoneHtml += `8(851)261-4${num[0]}-${num[1]}${num[2]}<br>`;
            } else {
                phoneHtml += `${num}<br>`;
            }
        });}
    let emailHtml = '';
    if (email && email !== '') {
        const emailel = email.split(" ");
        emailel.forEach(em => {
            emailHtml += `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a><br>`;
        });
    }
        
    return `
        <div class="container-row">
            <div class="cont-el"><p>${fio}</p></div>
            <div class="cont-el phone-num"><p>${phoneHtml}</p></div>
            <div class="cont-el phone-num"><p>${shortNum}</p></div>
            <div class="cont-el job-title"><p>${jobTitle}</p></div>
            <div class="cont-el email"><p>${emailHtml}</p></div>
            <div class="cont-el cabinet"><p>${cabinet}</p></div>
        </div>
    `;
}

// Функция для создания строки сотрудника (мобильная версия)
function createEmployeeRowForMobile(emp) {
    const fio = emp.fio;
    const jobTitle = emp.job_title;
    const email = emp.email;
    const cabinet = emp.cabinet;
    const shortNum = emp.short_num;
    
    let phoneHtml = '';
    if (shortNum && shortNum !== '') {
        const shortNums = shortNum.split(" ");
        shortNums.forEach(num => {
            if (num.length == 3) {
                phoneHtml += `<a href="tel:8(851)261-4${num[0]}-${num[1]}${num[2]}">8(851)261-4${num[0]}-${num[1]}${num[2]}</a><br>`;
            } else {
                phoneHtml += `<a href="tel:${num}">${num}</a><br>`;
            }
        });}
    let emailHtml = '';
    if (email && email !== '') {
        const emailel = email.split(" ");
        emailel.forEach(em => {
            emailHtml += `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a><br>`;
        });
    }
        
    return `
        <div class="container-row">
            <div class="cont-info-1">
                <div class="cont-el fio"><p>${fio}</p></div>
                <div class="cont-el job-title"><p>${jobTitle}</p></div>
            </div>
            <div class="cont-info-2">
                <div class="cont-el phone-num"><p>${phoneHtml}</p></div>
                <div class="cont-el email"><p>${emailHtml}</p></div>
            </div>
            <div class="cont-el cabinet"><p>${cabinet}</p></div>
        </div>
    `;
}


searchInput.addEventListener('keyup', (e) => {
    setTimeout(() => {
        const query = searchInput.value.trim();

        if (query.length > 0) {
            // Поисковый запрос
            fetch('/search?q=' + encodeURIComponent(query), {
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
                
                if (!data) {
                    container.innerHTML = '<div class="error-message">Результаты поиска в неверном формате</div>';
                    return;
                }

                // Обрабатываем разные форматы ответа
                let empUnits = [];
                
                // Если это массив - используем как есть
                if (Array.isArray(data)) {
                    empUnits = data;
                } 
                // Если это объект с полем employees - создаем структуру как в phonebookList.js
                else if (data.employees && Array.isArray(data.employees)) {
                    empUnits = [{
                        unit: { label: 'Результаты поиска' },
                        employees: data.employees
                    }];
                }
                // Если это объект с другим форматом
                else if (typeof data === 'object') {
                    // Пробуем найти массив сотрудников в любом поле
                    for (let key in data) {
                        if (Array.isArray(data[key])) {
                            empUnits = [{
                                unit: { label: 'Результаты поиска' },
                                employees: data[key]
                            }];
                            break;
                        }
                    }
                }
                // Собираем HTML для результатов поиска
                let fullHtml = '';

                empUnits.forEach((empUnit) => {
                    // Пробуем разные варианты названий полей
                    const employees = empUnit.employees;
                    const unit = empUnit.unit;
                    
                    // Получаем название подразделения
                    const unitName = unit.label;
                    
                    
                    // Добавляем сотрудников
                    if (employees !== null) {
                      fullHtml += `<div class="unit-title"><div>${unit.label || 'Неизвестное подразделение'}</div><div class="contact">${unit.email}</div>
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
                console.error('Ошибка поиска:', error);
                const container = document.getElementById('container-main');
                if (container) {
                    container.innerHTML = '<div class="error-message">Ошибка при выполнении поиска</div>';
                }
            });
        } 
    }, 100);
});