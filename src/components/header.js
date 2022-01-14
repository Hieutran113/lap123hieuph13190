import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        
        <header class="max-w-5xl mx-auto relative">
            <div class="bg-blue-800 py-4">
                <img src="https://picsum.photos/150/40" class="mx-auto" />
                <a href="/signin"  class=" absolute top-2 right-5 text-red-500 hover:text-orange-700" >signin</a>
            </div>
            
            <div class="bg-orange-500">
                ${Nav.render()}
            </div>
            
        </header>`;
    },
};
export default Header;