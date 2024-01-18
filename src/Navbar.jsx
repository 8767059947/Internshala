import * as React from 'react';
import './App.css'

export default function ButtonAppBar() {
  return (
    <>
     
    <header class= " bg-white flex justify-end items-center py-2  px-7 w-full  sticky top-0">
    <h2 class="mr-auto pb-3 font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-800 text-xl"><b>HyggeX</b></h2>
    
      <nav class = "bg-white justify-right ">
        <ul  class="text-right">
          <li class = "inline-block px-5"><a href="#">Home</a></li>
          <li class="inline-block px-5"><a href="#">Flashcard</a></li>
          <li class="inline-block px-5"><a href="#">Contact</a></li>
          <li class="inline-block px-5"><a href="#" class="">FAQ</a></li>
        </ul>
      </nav>
      <a className = "cta" href="#" class="py-2 px-7 "><button class="bg-gradient-to-r from-blue-800 to-indigo-800 py-2 px-7 text-white rounded-full">Login</button></a>
      </header>
    </>
    
  );
}