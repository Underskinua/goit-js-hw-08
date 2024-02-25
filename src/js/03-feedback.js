// Импортируем библиотеку lodash.throttle, позволяет ограничивать частоту вызова функции
import throttle from 'lodash.throttle';
// console.log('JS подключен');

// Определяем переменные для элементов формы
const formRef = document.querySelector('.feedback-form');
// Определяем объект для хранения данных формы, содержит значения email и message, согласно условия
let objOfValue = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  // Получаем данные из локального хранилища, если их нет, то создаем пустой объект
  email: '',
  message: '',
};
// Получаем элементы формы input[name="email"] и textarea[name="message"]
const { email, message } = formRef.elements;

//Заполняем поля формы значениями из объекта objOfValue,чтобы при перезагрузке страницы значения в полях формы были восстановлены
email.value = objOfValue.email.trim();
message.value = objOfValue.message.trim();

// Добавляем обработчик события 'input' на форму, будет срабатывать при каждом изменении значения в полях формы
formRef.addEventListener('input', throttle(() => {
  // Обновляем объект objOfValue значениями из полей формы
  objOfValue.email = email.value.trim();
  objOfValue.message = message.value.trim();
  // Сохраняем объект objOfValue в локальном хранилище, чтобы сохранить данные формы при перезагрузке страницы
  localStorage.setItem('feedback-form-state', JSON.stringify(objOfValue));
}, 500));

// Добавляем обработчик события 'submit' на форму, Он будет срабатывать при нажатии кнопки "Отправить"
formRef.addEventListener('submit', (event) => {
  // Предотвращаем стандартное действие браузера, необходимо, чтобы не произошло перенаправление на другую страницу
  event.preventDefault();
  // Удаляем объект objOfValue из локального хранилища, чтобы после отправки формы данные из нее были удалены
  localStorage.removeItem('feedback-form-state');

  // Проверяем, заполнены ли поля формы, Если нет, то выводи
  //if (email.value === '' || message.value === '') {
    //return alert('Пожалуйста, заполните все поля!'); или
    //console.log('Пожалуйста, заполните все поля!');
    //return;
  //}

  console.log(objOfValue);
  //console.log('Информация о пользователе:', objOfValue); - вариант вывода в консоле 

  // Сбрасываем форму, чтобы после отправки формы поля формы были очищены
  formRef.reset();
});
