<template>
  <section class="container">
    <div class="overflow-hidden">
      <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold pb-6" ref="heading">SVG Animation</h1>
      <h2 class="text-xl md:text-2xl font-bold pb-2" ref="msg">Hover us!</h2>
    </div>
    <Doggies />
  </section>
</template>

<script async setup lang="ts">
import Doggies from "@/components/Doggies.vue";

</script>
