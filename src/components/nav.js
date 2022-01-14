const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển sinh</a></li>
                <li><a href="/ctdt" class="block py-3 px-4 text-white hover:bg-blue-500">Chương trình đào tạo</a></li>
                <li><a href="/gsv" class="block py-3 px-4 text-white hover:bg-blue-500">Góc sinh viên</a></li>
                <li><a href="/td" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển dụng</a></li>
                <div class="float-right ml-12  mt-3">
                <input type="text" name="tk" value=" mời nhập">
                <input class="bg-black text-white w-10px" type="button" name="search" value="tìm kiếm">
             </div>
            </ul>
            
            
        </nav>`;
        
        
    },
};
export default Nav;