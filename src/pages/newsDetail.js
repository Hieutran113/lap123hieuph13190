//import data from "../data";

const NewsDetail = {
    render(id) {
        return  fetch("https://620f3f97ec8b2ee28338b9c3.mockapi.io/news/"+id)
    .then((Response) => Response.json())
    .then((data) =>
         `<div class="max-w-5xl mx-auto">
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        </div>`);
    },
};
export default NewsDetail;