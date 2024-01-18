<script setup>
const { data } = await useFetch("/api/hello");
const clientSideExample = "Updated Blah";
</script>

<template>
  <main>
    <header>
      <h1>Hello CPRG</h1>
    </header>

    <section>
      <h2>Hello Data Endpoint Example</h2>
      <p>{{ data.hello }}</p>
      {{ clientSideExample }}
    </section>
  </main>
</template>
