const API_KEY = `46950452-7815ceb93240c1d1876de68f7`;
const BASE_URL = 'https://pixabay.com/api/';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function fetchData(inputValue) {

    const params = new URLSearchParams({
        key: API_KEY,
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15
    });

    const urlWithParams = `${BASE_URL}?${params.toString()}`;

    return fetch(urlWithParams)
        .then(res => {
            if (!res.ok) {
                throw new Error("Oooooppppssss");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);

            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                    backgroundColor: 'red',
                });
                return [];
            }
            return data.hits;
        })
        .catch(err => {
            console.log(err);

            iziToast.error({
                title: 'Error',
                message: '',
                position: 'topRight',
                backgroundColor: 'red',
            });
        });
}