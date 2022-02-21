import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ctdt from "./pages/ctdt";
import gsv from "./pages/gsv";
import td from "./pages/td";
import signin from "./pages/signin";
import signup from "./pages/signup";
import dashboard from "./pages/admin/dashboard";
import adminnews from "./pages/admin/news/index";
import addnews from "./pages/admin/news/add";
import adminproduct from "./pages/admin/products/index";
import addproduct from "./pages/admin/products/add";
import NewsDetail from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    
    document.getElementById("content").innerHTML = await content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/ctdt": () => {
        print(ctdt.render());
    },
    "/gsv": () => {
        print(gsv.render());
    },
    "/td": () => {
        print(td.render());
    },
    "/signin": () => {
        print(signin.render());
    },
    "/signup": () => {
        print(signup.render());
    },
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/news": () => {
        print(adminnews.render());
    },
    "/admin/news/add": () => {
        print(addnews.render());
    },
    "/admin/products": () => {
        print(adminproduct.render()); 
    },
    "/admin/products/add": () => {
        print(addproduct.render());
    },
    
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },

});

router.resolve();

// fetch("https://620f3f97ec8b2ee28338b9c3.mockapi.io/news")
//     .then((Response) => Response.json())
//     .then((data) =>console.log(data));