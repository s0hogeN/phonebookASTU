window.addEventListener("load", () => {
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
        function isMobileView() {
            return window.matchMedia('(max-width: 768px)').matches;
        }
        console.log(empUnits);
        const container = document.getElementById('container-main');
        
        if (!empUnits || !Array.isArray(empUnits)) {
            throw new Error('EmpUnits data is not an array');
        }
        if (isMobileView()) {
            document.getElementById('info-title').innerHTML = 'ФИО<br>Должность';
            document.getElementById('contact-title').textContent = 'Контактная информация';
        }

        // Функция загрузки кнопок сортировки
        /*function btnLoad(empUnit) {
            const btn_container = document.getElementById('btn-list');
            btn_container.innerHTML = `<div class="button-el" id="btn-all">Все подразделения</div>`

            empUnit.forEach(unitList => {
                let unitElem = unitList.unit
                let label = unitElem.label;
                let id = unitElem.id;

                btn_container.innerHTML += `<div class="button-el" id="btn-${id}">${label}</div>`
            });
        }*/

        // Функция для создания строки сотрудника (десктопная версия)
        function createEmployeeRow(emp) {
            let short = emp.short_num ? emp.short_num.split(" ") : [];
            let email = emp.email ? emp.email.split(" ") : [];
            
            let phoneHtml = '';
            if (emp.short_num && emp.short_num !== '' && emp.short_num.length < 4) {
                short.forEach(num => {
                    if (num.length == 3) {
                        phoneHtml += `88512614${num}<br>`;
                    } else {
                        phoneHtml += `${num}<br>`;
                    }
                });
                
                return `
                    <div class="container-row">
                        <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                        <div class="cont-el phone-num"><p>${phoneHtml}</p></div>
                        <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                        <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                        <div class="cont-el email"><p>${email.map(em => `<a href="mailto:${em}"><img src="/static/img/mail.png">${em}</a>`).join('<br>')}</p></div>
                        <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                    </div>
                `;
            } else if (emp.short_num && emp.short_num.length > 3) {
                return `
                    <div class="container-row">
                        <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                        <div class="cont-el phone-num"><p>${emp.short_num}</p></div>
                        <div class="cont-el phone-num"><p>-</p></div>
                        <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                        <div class="cont-el email"><p><a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a></p></div>
                        <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                    </div>
                `;
            } else {
                return `
                    <div class="container-row">
                        <div class="cont-el"><p>${emp.fio || '-'}</p></div>
                        <div class="cont-el phone-num"><p>-</p></div>
                        <div class="cont-el phone-num"><p>-</p></div>
                        <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                        <div class="cont-el email"><p>${emp.email ? `<a href="mailto:${emp.email}"><img src="/static/img/mail.png">${emp.email}</a>` : '-'}</p></div>
                        <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                    </div>
                `;
            }
        }

        // Функция для создания строки сотрудника (мобильная версия)
        function createEmployeeRowForMobile(emp) {
            let short = emp.short_num ? emp.short_num.split(" ") : [];
            let email = emp.email ? emp.email.split(" ") : [];
            
            let phoneHtml = '';
            if (emp.short_num && emp.short_num !== '' && emp.short_num.length < 4) {
                short.forEach(num => {
                    if (num.length == 3) {
                        phoneHtml += `88512614${num}`;
                    } else {
                        phoneHtml += `${num}<br>`;
                    }
                });
                
                return `
                    <div class="container-row">
                        <div class="cont-info-1">
                            <div class="cont-el fio"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                        </div>
                        <div class="cont-info-2">
                            <div class="cont-el phone-num"><p><a href="tel:${phoneHtml}">${phoneHtml}</a></p></div>
                            <div class="cont-el email"><p>${email.map(em => `<a href="mailto:${em}">${em}</a>`).join('<br>')}</p></div>
                        </div>
                        <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                    </div>
                `;
            } else {
                return `
                    <div class="container-row">
                        <div class="cont-info-1">
                            <div class="cont-el fio"><p>${emp.fio || '-'}</p></div>
                            <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
                        </div>
                        <div class="cont-info-2">
                            <div class="cont-el email"><p>${email.map(em => `<a href="mailto:${em}">${em}</a>`).join('<br>')}</p></div>
                        </div>
                        <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
                    </div>
                `;
            }
        }

        // Собираем HTML для всех подразделений
        let fullHtml = '';
        
        empUnits.forEach(empUnit => {
            // Пропускаем подразделения без сотрудников
            if (!empUnit.employees || empUnit.employees.length === 0) {
                return;
            }
            
            // Добавляем заголовок подразделения
            fullHtml += `<div class="unit-title">${empUnit.unit.label || 'Неизвестное подразделение'}</div>`;
            
            // Добавляем сотрудников этого подразделения
            empUnit.employees.forEach(emp => {
                if (isMobileView()) {
                    fullHtml += createEmployeeRowForMobile(emp);
                } else {
                    fullHtml += createEmployeeRow(emp);
                }
            });
        });

        // Вставляем HTML в контейнер
        container.innerHTML = fullHtml;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        const container = document.getElementById('container-main');
        if (container) {
            container.innerHTML = '<div class="error-message">Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.</div>';
        }
    });
});