const searchInput = document.getElementById('search');
const resultDiv = document.getElementById('container-main');
const label = document.getElementById('container-titles');

// Переменные для управления запросами
let searchTimeout = null;
let currentController = null;
let lastQuery = '';

function isMobileView() {
    return window.matchMedia('(max-width: 768px)').matches;
}

// Функция debounce для ограничения частоты запросов
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Функция для отмены текущего запроса
function cancelPreviousRequest() {
    if (currentController) {
        currentController.abort();
        currentController = null;
    }
}

// Оптимизированная функция поиска
async function performSearch(query) {
    // Отменяем предыдущий запрос
    cancelPreviousRequest();
    
    // Создаем новый AbortController для текущего запроса
    currentController = new AbortController();
    
    try {
        // Не выполняем запрос для очень коротких запросов
        if (query.length < 2) {
            return;
        }

        // Не выполняем запрос если он такой же как предыдущий
        if (query === lastQuery) {
            return;
        }
        lastQuery = query;

        console.log('Searching for:', query);
        
        const response = await fetch('/search?q=' + encodeURIComponent(query), {
            headers: {'Accept': 'application/json'},
            signal: currentController.signal
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displaySearchResults(data, query);
        
    } catch (error) {
        // Игнорируем ошибки отмены запроса
        if (error.name !== 'AbortError') {
            console.error('Ошибка поиска:', error);
            const container = document.getElementById('container-main');
            if (container) {
                container.innerHTML = '<div class="error-message">Ошибка при выполнении поиска</div>';
            }
        }
    } finally {
        currentController = null;
    }
}

// Функция для отображения результатов поиска
function displaySearchResults(data, query) {
    const container = document.getElementById('container-main');
    
    if (!data) {
        container.innerHTML = '<div class="error-message">Результаты поиска в неверном формате</div>';
        return;
    }

    // Обрабатываем разные форматы ответа
    let empUnits = [];
    
    if (Array.isArray(data)) {
        empUnits = data;
    } else if (data.employees && Array.isArray(data.employees)) {
        empUnits = [{
            unit: { label: 'Результаты поиска' },
            employees: data.employees
        }];
    } else if (typeof data === 'object') {
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

    if (empUnits.length === 0 || empUnits.every(unit => !unit.employees || unit.employees.length === 0)) {
        fullHtml = `<div class="no-results">По запросу "${query}" ничего не найдено</div>`;
    } else {
        empUnits.forEach((empUnit) => {
            const employees = empUnit.employees;
            const unit = empUnit.unit;
            
            if (employees && employees.length > 0) {
                fullHtml +=  `<div class="unit-title"><div>${unit.label || 'Неизвестное подразделение'}</div><div class="contact"><a href="mailto:${unit.email}"><img src="/static/img/mail.png">${unit.email}</a></div>
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
    }

    container.innerHTML = fullHtml;
}

// Функции createEmployeeRow и createEmployeeRowForMobile остаются без изменений
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

// Создаем debounced версию функции поиска
const debouncedSearch = debounce(performSearch, 300);

// Обработчик события
searchInput.addEventListener('input', (e) => {
    const query = searchInput.value.trim();
    if (isMobileView()) {
            document.getElementById('info-title').innerHTML = 'ФИО<br>Должность';
            document.getElementById('contact-title').textContent = 'Контактная информация';
        }
    debouncedSearch(query);
});

// Обработчик для клавиши Escape
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cancelPreviousRequest();
    }
});