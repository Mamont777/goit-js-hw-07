import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryRender = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryRender);
galleryContainer.addEventListener("click", openModal);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </div>
  `;
    })
    .join("");
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src='${imageSrc}' width="800" height="600">`
  );

  instance.show();

  const onEscapePress = (event) => {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  };

  window.addEventListener("keydown", onEscapePress);
}
