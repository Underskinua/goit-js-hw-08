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
  captions: true,
  captionSelector: '.self', // Получить подпись с атребута A-Tag
  captionType: 'data', // Получить подптсь с атрибута 'data-caption'
  captionsData: 'caption', // Использовать значение атрибута 'data-caption' как подпись
  captionDelay: 250, // Задержка перед появлением подписи (в милисекундах)

  captionAttribute: 'data-caption'
});


//console.log(galleryItems);
