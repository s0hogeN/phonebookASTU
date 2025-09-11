const departmentButtons = {
  'btn-leaders': 'Руководители университета',
  'btn-council': 'Ученый Совет',
  'btn-frst-section': 'Первый отдел',
  'btn-defense': 'Отдел гражданской обороны, чрезвычайных ситуаций и мобилизационной подготовки',
  'btn-accounting': 'Бухгалтерия',
  'btn-hr': 'Отдел кадров',
  'btn-legal': 'Юридический отдел',
  'btn-fin-econ': 'Отдел правового обеспечения финансово-хозяйственной деятельности и проектов',
  'btn-student-office': 'Студенческая канцелярия',
  'btn-general': 'Общий отдел',
  'btn-inter': 'Международный отдел',
  'btn-academ': 'Отдел академической мобильности',
  'btn-media': 'Управление массовых коммуникаций и медиа-проектов',
  'btn-org-ed': 'Управление по организационно-воспитательной работе',
  'btn-sport': 'Физкультурно-спортивное сооружение "Спорткомплекс"',
  'btn-uisit': 'Управление информационных систем и технологий',
  'btn-dispatch': 'Диспетчерский отдел',
  'btn-ed': 'Учебный отдел',
  'btn-assistance': 'Центр содействия трудоустройству выпускников АГТУ',
  'btn-method': 'Отдел методического обеспечения учебного процесса',
  'btn-ed-pol': 'Центр образовательной политики',
  'btn-publish': 'Издательство АГТУ',
  'btn-scient-ed': 'Научно-образовательный центр профессиональных компетенций',
  'btn-pre-university': 'Центр довузовской подготовки, профориентации и приему в вуз',
  'btn-library': 'Научная библиотека',
  'btn-scient-innov': 'Центр научно-инновационного развития',
  'btn-research': 'Научно-исследовательская часть',
  'btn-highly-qualified': 'Отдел подготовки кадров высшей квалификации',
  'btn-marketing': 'Отдел маркетинга',
  'btn-contract': 'Договорный отдел',
  'btn-mat-tech': 'Отдел материально-технического снабжения',
  'btn-plan-eco': 'Планово-экономический отдел',
  'btn-budge-social': 'Отдел внебюджетной деятельности и социальной защиты',
  'btn-adm-eco': 'Административно-хозяйственное управление',
  'btn-prop-proj': 'Отдел по управлению имуществом и проектами',
  'btn-otd': 'Отдел охраны труда и техники безопасности',
  'btn-dormitories': 'Общежития',
  'btn-watches': 'Вахты учебных корпусов',
  'btn-add-struct': 'Дополнительные структуры',
  'btn-checkpoints': 'Контрольно-пропускные пункты',
};

// Функция для создания HTML строки сотрудника
function createEmployeeRow(emp) {
  let phoneHtml = '-';
  if (emp.short_num) {
    const shortNums = emp.short_num.split(' ').map(num => 
      num.length === 3 ? `88512614${num}` : num
    );
    phoneHtml = shortNums.join('<br>');
  }
  
  const emailHtml = emp.email.split(' ').map(email => 
    `<a href="mailto:${email}"><img src="/static/img/mail.png">${email}</a>`
  ).join('<br>');
  
  return `
    <div class="container-row">
      <div class="cont-el"><p>${emp.fio || '-'}</p></div>
      <div class="cont-el phone-num"><p>${phoneHtml}</p></div>
      <div class="cont-el phone-num"><p>${emp.short_num || '-'}</p></div>
      <div class="cont-el job-title"><p>${emp.job_title || '-'}</p></div>
      <div class="cont-el email"><p>${emailHtml || '-'}</p></div>
      <div class="cont-el cabinet"><p>${emp.cabinet || '-'}</p></div>
    </div>
  `;
}

// Универсальная функция для загрузки данных отдела
function loadDepartmentData(departmentName) {
  fetch('/search?q=' + encodeURIComponent(departmentName))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(employees => {
      const container = document.getElementById('container-main');
      
      // Инициализация массива отделов
      const html_mass = Array(151).fill().map(() => ['', false]);
      
      // Заполнение заголовков отделов
      Object.entries(departmentMap).forEach(([name, index]) => {
        html_mass[index][0] = `<div class="unit-title">${name}</div>`;
      });

      // Обработка сотрудников
      employees.forEach(emp => {
        const deptIndex = departmentMap[emp.unit];
        if (deptIndex !== undefined) {
          html_mass[deptIndex][0] += createEmployeeRow(emp);
          html_mass[deptIndex][1] = true;
        }
      });

      // Формирование итогового HTML
      let resultHtml = '';
      html_mass.forEach(([html, hasData]) => {
        if (hasData) {
          resultHtml += html;
        }
      });
      
      container.innerHTML = resultHtml;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Добавляем обработчики для всех кнопок
Object.entries(departmentButtons).forEach(([btnId, departmentName]) => {
  const button = document.getElementById(btnId);
  if (button) {
    button.addEventListener('click', () => {
      loadDepartmentData(departmentName);
    });
  }
});

// Обработчик для кнопки "Все подразделения"
const btnAll = document.getElementById('btn-all');
if (btnAll) {
  btnAll.addEventListener('click', () => {
    // Очищаем поле поиска, если оно есть
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.value = '';
    
    // Запрашиваем данные с правильным endpoint и заголовками
    fetch('/', { // Убедитесь, что используете правильный URL
      headers: {
        'Accept': 'application/json' // Явно указываем, что ожидаем JSON
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(employees => {
      const container = document.getElementById('container-main');
      
      // Инициализация массива отделов
      const html_mass = Array(151).fill().map(() => ['', false]);
      
      // Заполнение заголовков отделов
      Object.entries(departmentMap).forEach(([name, index]) => {
        html_mass[index][0] = `<div class="unit-title">${name}</div>`;
      });

      // Обработка всех сотрудников
      employees.forEach(emp => {
        const deptIndex = departmentMap[emp.unit];
        if (deptIndex !== undefined) {
          html_mass[deptIndex][0] += createEmployeeRow(emp);
          html_mass[deptIndex][1] = true;
        }
      });

      // Формирование итогового HTML
      let resultHtml = '';
      html_mass.forEach(([html, hasData]) => {
        if (hasData) {
          resultHtml += html;
        }
      });

      container.innerHTML = resultHtml;
    })
    .catch(error => {
      console.error('Error loading all employees:', error);
      // Можно показать сообщение об ошибке пользователю
      const container = document.getElementById('container-main');
      container.innerHTML = '<div class="error-message">Не удалось загрузить данные. Пожалуйста, попробуйте позже.</div>';
    });
  });
}