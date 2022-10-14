import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
//console.log(galleryContainer);
const imgMarkup = createImgMarkup(galleryItems);
//console.log(imgMarkup);

galleryContainer.insertAdjacentHTML(`beforeend`, imgMarkup);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
   `;
    })
    .join(``);
}


let lightbox = new SimpleLightbox('.gallery a', { 
    /* options */ 
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",

});