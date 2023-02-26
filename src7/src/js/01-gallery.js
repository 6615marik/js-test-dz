// import * as basicLightbox from "basiclightbox";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance;
// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const iteamgall = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", iteamgall);
// console.log(iteamgall);
gallery.addEventListener("keydown", onPressEscToCloseImage);
gallery.addEventListener("click", onLargeImageOpen);

function onLargeImageOpen(e) {
  e.preventDefault();
  gallery.addEventListener("keydown", onPressEscToCloseImage);

  if (e.target.nodeName !== "IMG") {
    return;
  }
  //   console.log(e.target.dataset.source);
  instance = basicLightbox.create(`
    <img src= ${e.target.dataset.source} width="1200" >
`);
  instance.show();
}

function onPressEscToCloseImage(e) {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
  gallery.removeEventListener("keydown", onPressEscToCloseImage);
}
