import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const loadBtn = document.querySelector(".load-btn")

let page = 1;


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    page = 1;

    if (input.value.trim() === "") {
        iziToast.error({
                  title: '',
                  message: 'The field cannot be empty',
                  position: "topRight"
                });
        return;
    };

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(input.value, page);
        const arr = data.hits;
        if (arr.length === 0) {
                iziToast.error({
                    title: '',
                    message: 'Sorry, there are no images matching<br> your search query. Please try again!',
                    position: "topRight"
                });
        } else {
            createGallery(arr);
            let res = Math.ceil(data.totalHits / 15);
            if (page < res) {
                showLoadMoreButton();
            } else {
                iziToast.info({
                  title: '',
                  message: "We're sorry, but you've reached the end of search results.",
                  position: "topRight"
              });
            }
            page += 1;
            };
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
});

loadBtn.addEventListener("click", async () => {
    try {
    showLoader();
    const data = await getImagesByQuery(input.value, page);
    const arr = data.hits;
    createGallery(arr);
    hideLoader();
    let res = Math.ceil(data.totalHits / 15);
    if (page === res) {
        iziToast.info({
            title: '',
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight"
        });
        hideLoadMoreButton();
    };
        
    const galleryItem = document.querySelector(".gallery-item");
    if (galleryItem) {
       const itemHeight = galleryItem.getBoundingClientRect();
       window.scrollBy({
          top: itemHeight.height * 2,
          behavior: "smooth"
    });
    };
        
    page += 1;
    } catch (error) {
        console.log(error);
    }
})