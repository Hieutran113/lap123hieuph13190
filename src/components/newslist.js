//import data from "../data";
const NewsList = {
    render() {
      return  fetch("https://620f3f97ec8b2ee28338b9c3.mockapi.io/news")
    .then((Response) => Response.json())
    .then((data) => /* html */`
         
    <div class="max-w-7xl mx-auto"> 
        
        <div class="news test">
            <h2 class="text-2xl font-semibold my-4">Tin Tức Học Tập</h2>
            <div class="grid grid-cols-4 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="news">
            <h2 class="text-2xl font-semibold my-4"> Hoạt Động Sinh Viên</h2>
            <div class="grid grid-cols-4 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    </div>
    <div class="my-10">
    
    <div>
    `);
        

           
    },
};
export default NewsList;