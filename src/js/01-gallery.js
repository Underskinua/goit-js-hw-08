// Add imports above this line


import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const createGallery = galleryItems =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li>
          <a class="gallery__item" href="${original}">
            <img style="display:block" class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    )
    .join('');

const inputGalleryToDocument = (() => {
  document.querySelector('.gallery').innerHTML = createGallery(galleryItems);
})();

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});