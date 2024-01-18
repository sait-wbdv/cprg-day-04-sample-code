<script setup>
// Fetch data from the dogs API endpoint
const { data: breeds } = await useFetch("/api/dogs");
</script>
<template>
  <main>
    <header>
      <h1>Dog Breeds</h1>
    </header>
    <div>
      <ul>
        <!-- Loop through the data to show all dog breeds -->
        <li v-for="breed in breeds" :key="breed.id">
          {{ breed }}
        </li>
      </ul>
    </div>
  </main>
</template>
