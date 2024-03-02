<template>
    <div>
      <h2 class="text-center text-2xl font-bold">Top Donations:</h2>
      <div class="bg-blue-200 flex flex-col items-center justify-center h-auto m-3">
      <ul>
        <li v-for="donation in donations" :key="donation.id">
          <!-- <li v-for="donation in donations.donations" :key="donation.id"> -->
          <!-- Donator Name: {{ donation.name }} - Donation Amount: ${{ donation.amount }} -->
          Name:<span class="font-bold"> {{ donation.name }} </span> - Donation Amount:<span class="font-bold"> £{{ donation.amount }} </span>
        </li>
      </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      donations: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  };
  </script>
  