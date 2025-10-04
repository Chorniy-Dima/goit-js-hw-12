import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = document.querySelector(".form input");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim() === "") {
        iziToast.error({
                  title: '',
                  message: 'The field cannot be empty',
                  position: "topRight"
                });
        return;
    };

    clearGallery();
    showLoader();
    getImagesByQuery(input.value)
        .then(arr => {
            if (arr.length === 0) {
                hideLoader();
                iziToast.error({
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight"
                });
            } else {
                hideLoader();
                createGallery(arr);
            };
        })
        .catch(err => {
            hideLoader();
            console.log(err);
    })
});