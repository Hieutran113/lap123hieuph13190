
import Header from "../components/header";
import Banner from "../components/banner";
import NewsList from "../components/newslist";
import Footer from "../components/footer";
const HomePage = {
   async render() {
        return /* html */`
        <div class="header">
            ${Header.render()}
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="content">
                    ${await NewsList.render()}
                </div>
                <div>
                    ${Footer.render()}
                <div>
            </main>
        </div>




        
        
        `;
    },
};

export default HomePage;