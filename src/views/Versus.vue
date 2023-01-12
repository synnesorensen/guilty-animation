<template>
  <div class="container">
    <div class="overflow-hidden">
      <p class="text-6xl font-bold pb-8" ref="heading">Why GreenSock?</p>
    </div>
    <div class="text-2xl text-white leading-10">
      <div ref="reason">
        <p class="text-green font-bold">Our requirements</p>
        <p>No need for 3D animations.</p>
        <p>Need for interactivity.</p>
        <p>Easy to learn and to use.</p>
      </div>
      <div class="mt-4 space-y-1 text-green font-bold" ref="list">
        <p>Popularity</p>
        <p>Controls</p>
        <p>Performance</p>
        <p>Compatibility</p>
        <p>Price</p>
      </div>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

const heading = ref(null);
const reason = ref(null)
const list = ref(null);
gsap.registerPlugin(SplitText);

onMounted(() => {
  let split = new SplitText(heading.value, { type: "chars" });
  const tl = gsap.timeline();

  tl
  .from(split.chars, {
    y: "200%",
    ease: "power1.out",
    duration: 0.4,
    stagger: 0.05,
  })
  .from(reason.value, { opacity: 0, duration: 4 }, "<2")
  .from(list.value, { opacity: 0, duration: 4 }, "<7")

});
</script>
