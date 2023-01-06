import React from "react";

const Footer = () => {
  return (
    <div className="">







      {/* Footer */}
      <div className="border-b pb-1">

        <nav className="xl:px-16 flex justify-between  px-3 py-1 border-b lg:border-b-0">
          <div className="my-auto lg:hidden">
            <div className=" my-auto md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 my-auto">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
              <h3 className="hidden md:block text-xs my-auto font-bold">MENU</h3>
            </div>
          </div>


          <img className="w-44 lg:w-64 lg:ml-3 mt-2" src="https://believerssign.com/wp-content/uploads/2022/11/logo-header-black-2022-dec-01.png"></img>



          <div className="my-auto hidden lg:block w-full">
            <div className="flex h-11 my-auto w-full mx-6">
              <input type="text" className="  w-full   text-gray-600 border-t-2 border-b-2 border-l-2 px-4 py-4 rounded-l outline-none" placeholder="search for produts" />
              <div className=" bg-yellow-400 hover:bg-yellow-500 w-max py-2 px-4 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="w-6 h-6 text-white cursor-pointer my-0.5">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex my-auto lg:hidden">
            <a className="cursor-pointer absolute ml-4 -mt-1 text-sm bg-orange-400 w-3 h-3 p-0.5 rounded-full text-center"> <h4 className=" text-xs -mt-0.5" >1</h4>  </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer hover:text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

          </div>

          <div className="my-auto hidden lg:block pl-10">
            <div className="my-auto flex space-x-6 ">
              <div className="flex text-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 my-auto ">
                  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                </svg>
                <h2 className="text-xl my-auto cursor-pointer hover:text-yellow-700">+880123456789</h2>
              </div>
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-500">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
              </svg>
              </div>
              <div className="flex">
                <a className="cursor-pointer absolute ml-4 -mt-1 text-sm bg-orange-400 w-3 h-3 p-0.5 rounded-full text-center"> <h4 className=" text-xs -mt-0.5" >1</h4>  </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer hover:text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <h3 className="ml-2 flex">
                  &#2547;
                  <h4 className="ml-1">0</h4>
                </h3>
              </div>

            </div>
          </div>
        </nav>

        <div className="mx-4 mt-1 lg:hidden">
          <input type="text" className="w-full     text-sm text-gray-600 border-2 px-4 py-2 rounded outline-none" placeholder="search for produts" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            class="w-6 h-6 absolute text-gray-400 hover:text-gray-600 cursor-pointer -mt-8 right-0 mr-8">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
          </svg>
        </div>


      </div>




      {/* lg: Categories */}

      <div className="hidden lg:block">
        <div className="px-8 xl:px-16 flex justify-between border-b">

          <div className="flex space-x-4">

            <div className="flex justify-between bg-yellow-400 space-x-24 py-3.5 px-2 cursor-pointer">
              <div className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <h2 className="text-lg font-medium ml-2 my-auto">CATEGORIES</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 my-auto ">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </div>

            <div className="flex space-x-6 text-sm font-medium my-auto">
              <h2 className=" cursor-pointer hover:text-yellow-500">HOME</h2>
              <h2 className="flex">
                <h2 className=" cursor-pointer hover:text-yellow-500">MEN CLOTHING</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-400 my-auto ">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </h2>
            </div>
          </div>

          <div className="my-auto flex space-x-4 text-sm font-medium">
            <h2 className="text-gray-800 border-r pr-2 cursor-pointer">OUR SHOWROOMS</h2>
            <h2 className="text-yellow-500 border-r pr-2 cursor-pointer">AFFILIATE DASHBOARD</h2>
            <h2 className="flex space-x-2">
              <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/2787/2787368.png" />
              <h2 className="text-gray-800 cursor-pointer">ORDER TRACK</h2>
            </h2>
          </div>
        </div>



      </div>



      {/* caregories items */}
      <div className="flex bg-gray-100 md:px-8 xl:px-16">

        <div className="hidden lg:block">

          <ul className="space-y-3 bg-white pt-4 text-base font-montserrat">
            <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Combo offer</li>        <hr />
            <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Exclusive Attar</li>        <hr />
            <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Organic produts</li>        <hr />
            <li className="flex">
              <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Attar</li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" absolute w-5 h-5 ml-60 text-gray-500">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </li>         <hr />
            <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Jacket</li>        <hr />
            <li className="flex">
              <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Winter Shawl</li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" absolute w-5 h-5 ml-60 text-gray-500">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </li>       <hr />
            <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Borqa & Niquab</li>        <hr />
            <li className="flex">
              <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Jersey, T-shirt & polo</li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" absolute w-5 h-5 ml-60 text-gray-500">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </li>       <hr />
            <li className="flex">
              <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Men clothing</li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" absolute w-5 h-5 ml-60 text-gray-500">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </li>       <hr />
            <li className="flex">
              <li className="cursor-pointer hover:text-yellow-400 ml-4 w-64">Other</li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" absolute w-5 h-5 ml-60 text-gray-500">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </li>       <hr />
          </ul>


        </div>


        {/* slider image */}
        <div className="bg-gray-100 lg:p-4">

          <img className="px-1 mt-10 lg:px-0 lg:mt-0  mx-auto" src="https://believerssign.com/wp-content/uploads/2022/11/slider-attar.jpeg" />

        </div>
      </div>



      {/* Items */}

      <div className="md:hidden p-2 bg-gray-100 pt-6">

        <div className="grid grid-cols-4 gap-6 border border-gray-600 rounded-md p-2 ">

          {/* items 1 */}
          <div className="">
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-2" src="https://cdn-icons-png.flaticon.com/512/2163/2163350.png" />
            </div>
            <h4 className="text-sm font-medium  text-center mt-1">Combo offer</h4>
          </div>

          {/* items 2 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/1867/1867565.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1"> Jersey T-shirt</h4>
          </div>

          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/2435/2435586.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1">Joggers & pant</h4>
          </div>


          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/5670/5670190.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1">Organic produts</h4>
          </div>


          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://as2.ftcdn.net/v2/jpg/02/89/27/83/1000_F_289278359_tK35md8CajUHmln8CTmPV9pGuzFWR0ZB.jpg" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1">Borqa & niquab</h4>
          </div>


          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/7150/7150346.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1">Attar</h4>
          </div>


          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/2163/2163350.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1"> Panjabi</h4>
          </div>

          {/* items 1 */}
          <div>
            <div className="w-14 rounded-full border border-gray-600 mx-auto">
              <img className=" p-3" src="https://cdn-icons-png.flaticon.com/512/1348/1348895.png" />
            </div>
            <h4 className="text-sm font-medium text-center mt-1">Jacket</h4>
          </div>


        </div>

      </div>


      {/* Produts list */}

      <div className="bg-gray-100 px-2 pt-2 xl:px-10">


        <div>

          <div className="flex justify-between border-b">
            <div className="space-x-6 text-center md:text-left pt-4 py-3 md:text-lg text-gray-600">
              <a className=" cursor-pointer hover:text-yellow-400">NEW</a>
              <a className=" cursor-pointer hover:text-yellow-400">TOP</a>
              <a className=" cursor-pointer hover:text-yellow-400">FEATURED</a>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" cursor-pointer hover:text-yellow-300 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" cursor-pointer hover:text-yellow-300 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>





          {/* Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 pt-4">

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2022/12/Premium-Honey-Nuts-1-Kg.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts- 1 Kg | প্রিমিয়াম মধু বাদাম- ১ কেজি</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2022/12/832-Teal-Follow-the-sunnah.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2022/06/Half-Tshirt-14-White-scaled.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts- 1 Kg | প্রিমিয়াম মধু বাদাম- ১ কেজি</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2021/10/BLUE-GRAPES-1.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts- 1 Kg | প্রিমিয়াম মধু বাদাম- ১ কেজি</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2022/12/Premium-Honey-Nuts-1-Kg.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts- 1 Kg | প্রিমিয়াম মধু বাদাম- ১ কেজি</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg">
              <div className="">
                <div className=" absolute mt-1 ml-1 bg-yellow-400 text-xs w-8 h-8  rounded-full text-center pt-2 ">NEW</div>
                <img className="rounded-lg" src="https://believerssign.com/wp-content/uploads/2022/12/832-Teal-Follow-the-sunnah.jpg" />
              </div>
              <div className="pt-2 flex flex-col ">
                <h2 className="text-center text-xs lg:text-base h-8 md:h-12 lg:h-16">Premium Honey Nuts- 1 Kg | প্রিমিয়াম মধু বাদাম- ১ কেজি</h2>

                <h2 className="text-lg font-medium text-center py-1">&#2547;1,390</h2>

                <a className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-md text-center mx-auto text-sm">ADD TO CART</a>
              </div>
            </div>






          </div>

        </div>


      </div>








    </div>
  );
};

export default Footer;
