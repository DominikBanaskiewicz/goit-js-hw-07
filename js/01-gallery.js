import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let element = document.createElement("div");
  element.classList.add("gallery__item");

  let img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.setAttribute("data-source", item.original);

  element.append(img);
  gallery.append(element);
});

gallery.addEventListener("click", (event) => {
  // console.log(event.target.dataset.source);
  //finding big image url
  let findGalleryItemByPreview = galleryItems.find(
    (el) => el.preview === event.target.parentNode.firstChild.src
  );
  console.log(findGalleryItemByPreview);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${findGalleryItemByPreview.description}" width="800" height="600">
`);

  instance.show();
});
