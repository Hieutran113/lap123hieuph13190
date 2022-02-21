const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
            <img src="https://picsum.photos/150/40" class="w-10px"  />
                <li><a href="/" class="block py-3 px-4 text-[#28a745] font-bold hover:text-lg hover:text-red-500">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-[#28a745] font-bold hover:text-lg hover:text-red-500"">Tuyển sinh</a></li>
                <li><a href="/ctdt" class="block py-3 px-4 text-[#28a745] font-bold hover:text-lg hover:text-red-500"">Chương trình đào tạo</a></li>
                <li><a href="/gsv" class="block py-3 px-4 text-[#28a745] font-bold hover:text-lg hover:text-red-500"">Góc sinh viên</a></li>
                <li><a href="/td" class="block py-3 px-4 text-[#28a745] font-bold hover:text-lg hover:text-red-500"">Tuyển dụng</a></li>
                <div class="float-right ml-12  mt-3">
                <input class="border-solid border-2 border-indigo-600  " type="text" name="tk" value=" mời nhập">
                <input class="bg-black text-white w-15px rounded-md" type="button" name="search" value="tìm kiếm">
                <a href="/signin"  class=" absolute top-2 right-5 text-red-500 hover:text-orange-700" >signin</a>
             </div>
            </ul>
            
            
        </nav>`;
        
        
    },
};
export default Nav;