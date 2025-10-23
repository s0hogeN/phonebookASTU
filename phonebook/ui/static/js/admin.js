let currentView = 'employees';
        
        // Загрузка данных при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            showEmployees();
        });
        
        function showUnits() {
            currentView = 'units';
            fetch('/api/units')
                .then(response => response.json())
                .then(units => {
                    displayUnits(units);
                })
                .catch(error => console.error('Error:', error));
        }
        
        function showEmployees() {
            currentView = 'employees';
            fetch('/api/employees')
                .then(response => response.json())
                .then(employees => {
                    displayEmployees(employees);
                })
                .catch(error => console.error('Error:', error));
        }

        function displayUnits(units) {
            const container = document.getElementById('container-main');
            container.innerHTML = `
                <h2>Подразделения</h2>
                <div class="add-form">
                    <h3>Добавить подразделение</h3>
                    <input type="text" id="newUnitLabel" placeholder="*Название">
                    <input type="number" id="newUnitSerialNum" placeholder="Серийный номер">
                    <input type="text" id="newUnitEmail" placeholder="Email">
                    <input type="text" id="newUnitPhone" placeholder="Телефон">
                    <select id="newUnitVisible">
                        <option value="1">Видимый</option>
                        <option value="0">Скрытый</option>
                    </select>
                    <button onclick="addUnit()">Добавить</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Название</th>
                            <th>Серийный номер</th>
                            <th>Видимость</th>
                            <th>Email</th>
                            <th>Телефон</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${units.map(unit => `
                            <tr>
                                <td>${unit.id}</td>
                                <td class="editable" onclick="editField(${unit.id}, 'label', '${unit.label}')">${unit.label}</td>
                                <td class="editable" onclick="editField(${unit.id}, 'serialnum', ${unit.serialnum})">${unit.serialnum}</td>
                                <td class="editable" onclick="editField(${unit.id}, 'visible', ${unit.visible})">${unit.visible ? 'Да' : 'Нет'}</td>
                                <td class="editable" onclick="editField(${unit.id}, 'email', '${unit.email}')">${unit.email}</td>
                                <td class="editable" onclick="editField(${unit.id}, 'phone', '${unit.phone}')">${unit.phone}</td>
                                <td class="action-buttons">
                                    <button onclick="deleteUnit(${unit.id})">Удалить</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
        
        function displayEmployees(employees) {
            const container = document.getElementById('container-main');
            container.innerHTML = `
                <h2>Сотрудники</h2>
                <div class="add-form">
                    <h3>Добавить сотрудника</h3>
                    <input type="text" id="newEmployeeFio" placeholder="*ФИО">
                    <input type="text" id="newEmployeeUnit" placeholder="*Подразделение">
                    <input type="text" id="newEmployeeJobTitle" placeholder="*Должность">
                    <input type="email" id="newEmployeeEmail" placeholder="Email">
                    <input type="text" id="newEmployeeCabinet" placeholder="Кабинет">
                    <input type="text" id="newEmployeeShortNum" placeholder="Короткий номер">
                    <input type="text" id="newEmployeeUnitGen" placeholder="Генерально подразделение">
                    <input type="number" id="newEmployeeSerialNum" placeholder="Серийный номер">
                    <button onclick="addEmployee()">Добавить</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ФИО</th>
                            <th>Подразделение</th>
                            <th>Должность</th>
                            <th>Email</th>
                            <th>Кабинет</th>
                            <th>Короткий номер</th>
                            <th>Генеральное подразделение</th>
                            <th>Серийный номер</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${employees.map(emp => `
                            <tr>
                                <td>${emp.id}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'fio', '${emp.fio}')">${emp.fio}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'unit', '${emp.unit}')">${emp.unit}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'job_title', '${emp.job_title}')">${emp.job_title}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'email', '${emp.email}')">${emp.email}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'cabinet', '${emp.cabinet}')">${emp.cabinet}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'short_num', '${emp.short_num}')">${emp.short_num}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'unit_general', '${emp.unit_general}')">${emp.unit_general}</td>
                                <td class="editable" onclick="editField(${emp.id}, 'serialnum', ${emp.serialnum})">${emp.serialnum}</td>
                                <td class="action-buttons">
                                    <button class="dropdown-toggle" onclick="deleteEmployee(${emp.id})">Удалить</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
        
        async function editField(id, field, currentValue) {
            
            const newValue = prompt(`Введите новое значение для ${field}:`, currentValue);
            
            if (newValue !== null && newValue !== currentValue) {
                try {
                    
                    // Сначала получаем текущие данные
                    const apiUrl = currentView === 'employees' ? '/api/employees' : '/api/units';
                    
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const allData = await response.json();
                    
                    // Находим текущую запись
                    const currentRecord = allData.find(item => item.id == id);
                    
                    if (!currentRecord) {
                        alert('Запись не найдена');
                        return;
                    }
                    
                    // Обновляем только измененное поле
                    // Преобразуем числовые поля
                    if (field === 'serialnum' || field === 'visible') {
                        currentRecord[field] = parseInt(newValue) || 0;
                    } else {
                        currentRecord[field] = newValue;
                    }
                                        
                    const url = currentView === 'employees' ? `/api/employees/empup?id=${id}` : `/api/units/unitsup?id=${id}`;
                    
                    // Отправляем все данные записи
                    const updateResponse = await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(currentRecord)
                    });
                                        
                    if (updateResponse.ok) {
                        // Обновляем представление
                        if (currentView === 'employees') {
                            await showEmployees();
                        } else {
                            await showUnits();
                        }
                    } else {
                        const errorText = await updateResponse.text();
                        alert('Ошибка при обновлении данных: ' + errorText);
                    }
                } catch (error) {
                    alert('Ошибка при обновлении данных: ' + error.message);
                }
            }
        }

        
        function addEmployee() {
            const employee = {
                fio: document.getElementById('newEmployeeFio').value,
                unit: document.getElementById('newEmployeeUnit').value,
                job_title: document.getElementById('newEmployeeJobTitle').value,
                email: document.getElementById('newEmployeeEmail').value,
                cabinet: document.getElementById('newEmployeeCabinet').value,
                short_num: document.getElementById('newEmployeeShortNum').value,
                unit_general: document.getElementById('newEmployeeUnitGen').value,
                serialnum: parseInt(document.getElementById('newEmployeeSerialNum').value)
            };
            
            fetch('/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee)
            })
            .then(response => response.json())
            .then(() => {
                showEmployees();
                // Очищаем поля формы
                document.getElementById('newEmployeeFio').value = '';
                document.getElementById('newEmployeeUnit').value = '';
                document.getElementById('newEmployeeJobTitle').value = '';
                document.getElementById('newEmployeeEmail').value = '';
                document.getElementById('newEmployeeCabinet').value = '';
                document.getElementById('newEmployeeShortNum').value = '';
                document.getElementById('newEmployeeUnitGen').value = '';
                document.getElementById('newEmployeeSerialNum').value = '';
            })
            .catch(error => console.error('Error:', error));
        }
        
        function addUnit() {
            const unit = {
                label: document.getElementById('newUnitLabel').value,
                serialnum: parseInt(document.getElementById('newUnitSerialNum').value),
                email: document.getElementById('newUnitEmail').value,
                phone: document.getElementById('newUnitPhone').value,
                visible: parseInt(document.getElementById('newUnitVisible').value)
            };
            
            fetch('/api/units', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(unit)
            })
            .then(response => response.json())
            .then(() => {
                showUnits();
                // Очищаем поля формы
                document.getElementById('newUnitLabel').value = '';
                document.getElementById('newUnitSerialNum').value = '';
                document.getElementById('newUnitEmail').value = '';
                document.getElementById('newUnitPhone').value = '';
            })
            .catch(error => console.error('Error:', error));
        }
        
        function deleteEmployee(id) {
            if (confirm('Вы уверены, что хотите удалить этого сотрудника?')) {
                fetch(`/api/employees/empdel?id=${id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        showEmployees();
                    }
                })
                .catch(error => console.error('Error:', error));
            }
        }
        
        function deleteUnit(id) {
            if (confirm('Вы уверены, что хотите удалить это подразделение?')) {
                fetch(`/api/unitsdel?id=${id}`, {
                    method: 'DELETE'
                })
                .then(() => {
                    showUnits();
                })
                .catch(error => console.error('Error:', error));
                }
        }
        // Общая функция для обновления записей
async function updateRecord(id, field, newValue) {
    try {
        // Получаем текущие данные
        const apiUrl = currentView === 'employees' ? '/api/employees' : '/api/units';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        
        const allData = await response.json();
        const currentRecord = allData.find(item => item.id == id);
        
        if (!currentRecord) {
            alert('Запись не найдена');
            return;
        }
        
        // Обновляем поле с учетом типа данных
        if (field === 'serialnum' || field === 'visible') {
            currentRecord[field] = parseInt(newValue) || 0;
        } else {
            currentRecord[field] = newValue;
        }
        
        // Отправляем обновленные данные
        const url = currentView === 'employees' ? `/api/employees/empup` : `/api/units/unitsup`;
        const updateResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentRecord)
        });
        
        if (updateResponse.ok) {
            // Обновляем интерфейс
            if (currentView === 'employees') {
                showEmployees();
            } else {
                showUnits();
            }
        } else {
            const errorText = await updateResponse.text();
            alert('Ошибка сервера: ' + errorText);
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Ошибка: ' + error.message);
    }
}