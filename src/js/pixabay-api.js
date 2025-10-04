import axios from "axios";

export default function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "36689321-8b59aad86c27c2e69221e9297",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    })
        .then(response => {
            return response.data.hits;
        })
        .catch(error => {
            console.log(error);
            throw error;
    })
};