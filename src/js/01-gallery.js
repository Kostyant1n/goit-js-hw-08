// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
//
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  galleryImage: document.querySelector('.gallery'),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li style = "list-style: none">
  <a 
  class="gallery__item"
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>
`;
  })
  .join('');
refs.galleryImage.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
