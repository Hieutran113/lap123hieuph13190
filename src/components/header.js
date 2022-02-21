import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-7xl mx-auto relative">
            
            <div class="">
                ${Nav.render()}
            </div>
            
        </header>`;
    },
};
export default Header;