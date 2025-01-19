const images = [
    { preview: './images/foto-1.jpg', original: './images/foto-1.jpg', description: 'my foto 1' },
    { preview: './images/foto-2.jpg', original: './images/foto-2.jpg', description: 'my foto 2' },
    { preview: './images/foto-3.jpg', original: './images/foto-3.jpg', description: 'my foto 3' },
    { preview: './images/foto-4.jpg', original: './images/foto-4.jpg', description: 'my foto 4' },
    { preview: './images/foto-5.jpg', original: './images/foto-5.jpg', description: 'my foto 5' },
    { preview: './images/foto-6.jpg', original: './images/foto-6.jpg', description: 'my foto 6' },
    { preview: './images/foto-7.jpg', original: './images/foto-7.jpg', description: 'my foto 7' },
    { preview: './images/foto-8.jpg', original: './images/foto-8.jpg', description: 'my foto 8' },
    { preview: './images/foto-9.jpg', original: './images/foto-9.jpg', description: 'my foto 9' }
];
const galleryList = document.querySelector(".gallery");

const elementsArray = images.map((element) => {
  
  const addListItem = document.createElement("li");
  addListItem.classList.add("gallery-item");
  
  const imgLink = document.createElement("a");
  imgLink.classList.add("gallery-link");
  imgLink.href = element.original;
  
  const addImage = document.createElement("img");
  addImage.alt = element.description;
  addImage.src = element.preview;
  addImage.width = "312";
  addImage.height = "416";
  addImage.classList.add("gallery-image");
  addImage.dataset.source = element.original;
  
  imgLink.appendChild(addImage);
  addListItem.appendChild(imgLink);
  return addListItem;
});

galleryList.append(...elementsArray);

galleryList.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const instance = basicLightbox.create(`
      <p class="modal-header">${event.target.alt}</p>
      <img src="${event.target.dataset.source}" width="1112" height="640">
    `);
    instance.element().classList.add("modal-overlay");

    instance.show();

    instance.element().addEventListener("click", () => {
      instance.close();
    });
  }
}
