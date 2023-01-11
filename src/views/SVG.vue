<template>
  <section class="container">
    <div class="overflow-hidden">
      <h1 class="text-6xl font-bold pb-8" ref="heading">SVG Animation</h1>
    </div>
    <Doggies />
  </section>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import Doggies from "@/components/Doggies.vue";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const heading = ref(null);

onMounted(() => {
  let split = new SplitText(heading.value, { type: "chars" });

  gsap.from(split.chars, {
    y: "200%",
    ease: "power1.out",
    duration: 0.4,
    stagger: 0.05,
  });
});
</script>
