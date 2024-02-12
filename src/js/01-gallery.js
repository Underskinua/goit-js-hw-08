// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описаный в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');


// Генерация макета галереи 
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}" data-caption="${description}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      <div class="sl-caption">${description}</div>
    </a>
  </li>`
)
.join('');

// Добавление галереии 
gallery.innerHTML = galleryItemsMarkup;

// Initialize SimpleLightbox
new SimpleLightbox('.gallery a', {
  captions: true, // Включаем отображение подписей к изображениям  
  captionsData: 'alt', // Получить подптсь с атрибута 'alt'
  
  captionDelay: 250, // Задержка перед появлением подписи (в милисекундах)
  
});


//console.log(galleryItems);
