<template>
    <div class="header flex items-center px-6">
        <ul class="header-left-section flex items-center">
            <li>
                <img
                    class="img-logo"
                    style="width: 91px; height: 34px"
                    src="../../image/logo-udemy.svg" alt="">
            </li>
            <li class="px-4">
                <a class="li-text">Categories</a>
            </li>
        </ul>
        <ul class="search-bar flex items-center content-center w-100">
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dilediğiniz Şeyi Arayın" required="">
                </div>

            </form>

        </ul>
        <ul class="ml-2.5 header-right-section flex items-center content-right  w-100">
            <li class="px-2.5 li-text">Udemy Business</li>
            <li class="px-2.5 li-text" >Teach on Udemy</li>
            <li class="px-2.5">
                <img width="20" src="../../image/shopping-cart.svg" alt="">
            </li>
            <div class="buttons flex items-center content-center ml-3">
                <button type="button" class="flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Oturum Aç</button>
                <button type="button" class="flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Kaydol</button>
                <button type="button" class="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <img width="16" src="../../image/language.svg" alt="">
                </button>

            </div>

        </ul>
    </div>

</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 72px;
    background-color: #FFF;
    box-shadow:0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
}
.img-logo{
   min-width: 91px;
    min-height: 34px;
}
.img-logo:hover{
    cursor: pointer;
}
.li-text{
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.2px;
    color: #1C1D1F;
}
.li-text:hover{
    color: #5624D0;
}
.search-bar{
    width: 1100px;
}
#simple-search{
    height: 46px;
    width: 1100px;
    border: 0.5px solid #000;
    text-decoration: none solid rgb(28,29,31);
    background-color: #F8F9FB!important;
    border-radius: 22px;

}
#simple-search:focus{
    border: 0.5px solid #000;
}
#simple-search::placeholder{
    font-size: 12px;
    color: rgb(106,111,115);
}
.buttons button{
    font-weight: 700;
    border: 1px solid #1C1D1F;
    margin:0 5px!important;
    display: flex;
    align-items: center;
    padding: 14px;
    max-height: 38px;
}
</style>