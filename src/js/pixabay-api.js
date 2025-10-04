import axios from "axios";

export default async function getImagesByQuery(query, page) {
    try {
        const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: "36689321-8b59aad86c27c2e69221e9297",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page: page,
            per_page: 15
        }
    });
    return response.data;      
    } catch (error) {
        console.log(error);
        throw error;
    }
};