import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-btn")

let lightbox = new SimpleLightbox('.gallery-item a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250
    });


export function createGallery(images) {
    const code  = images.map(pic => {
        return `<div class="gallery-item">
          <a class="gallery-link" href="${pic.largeImageURL}">
            <img class="gallery-image" src="${pic.webformatURL}" alt="${pic.tags}" />
          </a>
          <div class="descr">
            <div class="descr-container">
              <h6 class="pic-title">Likes</h6>
              <p class="pic-txt">${pic.likes}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Views</h6>
              <p class="pic-txt">${pic.views}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Comments</h6>
              <p class="pic-txt">${pic.comments}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Downloads</h6>
              <p class="pic-txt">${pic.downloads}</p>
            </div>
          </div>
        </div>`
    }).join("");
    gallery.insertAdjacentHTML("beforeEnd", code);
    lightbox.refresh();
};

export function clearGallery() {
    gallery.innerHTML = "";
};

export function showLoader() {
  loader.classList.remove('hidden');
};

export function hideLoader() {
    loader.classList.add('hidden');
};

export function showLoadMoreButton() {
  loadBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadBtn.classList.add('hidden');
}