<script setup>
// Fetch data from the dogs API endpoint
const { data } = await useFetch("/api/dogs");
// clean up the data
const { _value: dataValues } = data;
const { message: breeds } = dataValues;
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
