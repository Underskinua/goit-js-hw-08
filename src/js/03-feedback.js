import throttle from 'lodash.throttle';

console.log('JS подключен');

// Определяем переменные для элементов формы
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function updateStorage() {
    // Получаем данные с полей формы
    const email = emailInput.value;
    const message = messageInput.value;
  
    // Создаем объекты с данными
    const formData = {
      email,
      message,
    };
  
    // Сохраняем данные в локальном хранилище
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
// Используем функцию updateStorage
  form.addEventListener('submit', updateStorage);
  
// Обновление хранилища не чаще, раз на 500 милисекунд
const throttledUpdateStorage = throttle(updateStorage, 500);
// Прив'язка оновлення сховища до події
form.addEventListener('submit', (event) => {
    throttledUpdateStorage();
    console.log('Хранилище обновлено!');
    event.preventDefault();
});

// Шаг-2 --Определяем функцию для получения данных из локального хранилища
function getFormDataFromStorage() {
    const storedFormData = localStorage.getItem('feedback-form-state');
    if (storedFormData) {
      return JSON.parse(storedFormData);
    }
    return null;
  }

// Функция для обновления данных в локальном хранилище
function updateFormData() {
  // Создаем объект с данными формы
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Преобразуем объект в JSON
  const jsonFormData = JSON.stringify(formData);

  // Сохраняем данные в локальном хранилище
  localStorage.setItem('feedback-form-state', jsonFormData);
}

// Добавляем обработчик события 'input' к форме
form.addEventListener('input', () => {
  // Обновляем данные в локальном хранилище при каждом изменении
  updateFormData();
});

// Швг-2--Добавляем обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Получение данных из локального хранилища и заполнение формы
    const storedFormData = getFormDataFromStorage();
    if (storedFormData) {
      emailInput.value = storedFormData.email;
      messageInput.value = storedFormData.message;
    }
  });
// Шаг-3--
function clearFormData() {
    // Очищение локального хранилища
    localStorage.clear();  
    // Очищение полей формы
    emailInput.value = '';
    messageInput.value = '';
  }

  form.addEventListener('submit', (event) => {
    // Отримання даних з полів форми
    const email = emailInput.value;
    const message = messageInput.value;
    // Очищення сховища та полів форми
    clearFormData();
    // Створення об'єкта з даними
    const formData = {
      email,
      message,
    };
  
    // Виведення об'єкта в консоль
    console.log(formData);
    event.preventDefault();
  });



// Функция для отображения сообщения в консоли
function logFormData() {
    console.log('**Отслеживаю на форме событие input:**');
    console.log('**Email:**', emailInput.value);
    console.log('**Сообщение:**', messageInput.value);
  }
  // Вызов функции при изменении значений в полях
form.addEventListener('input', logFormData);