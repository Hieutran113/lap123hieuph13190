const Footer = {
    render() {
        return `<footer class="text-gray-100 bg-gray-800">
        <div class="max-w-3xl mx-auto py-6">
            <h1 class="text-center text-lg lg:text-2xl">
                trần đuc hiếu
            </h1>
    
            <div class="flex justify-center mt-6">
                <div class="bg-white rounded-md">
                    <div class="flex flex-wrap justify-between md:flex-row">
                        <input type="email" class="m-1 p-2 appearance-none text-black  focus:outline-none focus:placeholder-transparent" placeholder="đến trang facebook" aria-label=" your email">
                        <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">ok xnê</button>
                    </div>
                </div>
            </div>
    
            <hr class="h-px mt-6 bg-gray-700 border-none">
    
            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" class="text-xl font-bold text-gray-100 hover:text-gray-400">cảm ơn bạn đã đồng hành cùng chúng tôi</a>
                </div>
    
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                        <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">tư vấn </a>
                        <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">liên hệ</a>
                        <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">kênh khác</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>  ` ;
    },
};
export default Footer;