// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Initialize SimpleLightbox
new SimpleLightbox(gallery, {
    captions: true,
    captionSelector: 'self', // Отримати підпис з елементу A-Tag
    captionType: 'data', // Отримати підпис з атрибута 'data-caption'
    captionsData: 'caption', // Використовувати значення атрибута 'data-caption' як підпис
    captionDelay: 250, // Затримка перед появою підпису (в мілісекундах)
  });