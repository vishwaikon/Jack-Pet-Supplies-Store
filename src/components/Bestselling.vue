<template>
    <div class="pt-32 bg-white" style="padding-top: 16px; padding-bottom: 16px;">
  <h1 class=" font-sans text-center sm: text-2xl lg:text-4xl font-bold text-gray-800">Best Sellers</h1>
</div>
<section class="py-10 bg-blue-200 m-3">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <article class="bg-white rounded-lg shadow-lg ">
        <img src="../assets/dog1.webp" alt="Product 1" class="w-full  object-cover rounded-t-lg ">
        <div class="p-4 flex flex-col items-center justify-center">
          <h2 class="text-xl font-semibold text-gray-800 ">Pedigree Chciken & Vegetables 3Kg</h2>
          <p class="text-gray-600">Adult Dogs</p>
          <p class="text-gray-600">£15.00</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>
        </div>
      </article>
      <article class="bg-white rounded-lg shadow-lg ">
        <img src="../assets/dog2.webp" alt="Product 2" class="w-full  object-cover rounded-t-lg">
        <div class="p-4 flex flex-col items-center justify-center">
          <h2 class="text-xl font-semibold text-gray-800 ">Pedigree Chciken & Vegetables 10Kg</h2>
          <p class="text-gray-600">Adult Dogs</p>
          <p class="text-gray-600">£30</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>
        </div>
      </article>
      <article class="bg-white rounded-lg shadow-lg">
        <img src="../assets/dog3.webp" alt="Product 3" class="w-full object-cover rounded-t-lg">
        <div class="p-4 flex flex-col items-center justify-center">
          <h2 class="text-xl font-semibold text-gray-800">Pedigree Chicken & Milk 1.2Kg</h2>
          <p class="text-gray-600">Puppies</p>
          <p class="text-gray-600">£10</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>
        </div>
      </article>
      <article class="bg-white rounded-lg shadow-lg">
        <img src="../assets/dog4.webp" alt="Product 4" class="w-full  object-cover rounded-t-lg">
        <div class="p-4 flex flex-col items-center justify-center">
          <h2 class="text-xl font-semibold text-gray-800">Pedigree Chicken & Milk 3Kg</h2>
          <p class="text-gray-600">Puppies</p>
          <p class="text-gray-600">£24</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>
        </div>
      </article>
    </div>
  </div>
</section>
</template>

<script>
import dog1 from '../assets/dog1.webp';
import dog2 from '../assets/dog2.webp';
import dog3 from '../assets/dog3.webp';
import dog4 from '../assets/dog4.webp';

export default {
    name:"Bestselling",
};

</script>


