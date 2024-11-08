const list = document.querySelector(".list");

export function formResults(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" width="360" height="200"/>
            </a>
            <div class="info">
                <p class="info-text"><b class="text2">Likes:</b> ${likes}</p>
                <p class="info-text"><b class="tex2">Views:</b> ${views}</p>
                <p class="info-text"><b class="text2">Comments:</b> ${comments}</p>
                <p class="info-text"><b class="text2">Downloads:</b> ${downloads}</p>
            </div>
        </div>
    `).join("");

    list.innerHTML = "";
    list.insertAdjacentHTML("beforeend", markup);
}