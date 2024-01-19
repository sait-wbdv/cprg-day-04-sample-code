<script setup>
// Fetch the data from a server route

const { data } = await useFetch("/api/employees", {
  headers: useRequestHeaders(["cookie"]),
});
const employees = data._value.employees;
</script>

<template>
  <main>
    <h1>Employees</h1>
    <!-- render the fetched data -->
    <ul>
      <li v-for="employee in employees" :key="employee.EMPLOYEE_ID">
        <h3>Name: {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}</h3>
        <p>Email: {{ employee.EMAIL }}</p>
        <p>Phone: {{ employee.PHONE_NUMBER }}</p>
      </li>
    </ul>
  </main>
</template>
