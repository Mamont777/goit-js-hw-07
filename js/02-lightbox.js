import { galleryItems } from "./gallery-items.js";
const galleryContainer = document.querySelector(".gallery");
const galleryRender = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryRender);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
