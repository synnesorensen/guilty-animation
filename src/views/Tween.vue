<template>
  <section class="container">
    <div class="overflow-hidden">
      <p class="text-6xl font-bold" ref="heading">What is a TWEEN?</p>
    </div>
    <div class="flex flex-col my-10 text-xl tracking-wide" ref="">
      <p>
        Tweening is a short for <b>inbetweening</b> and it's the process of
        generating images that go between keyframes.
      </p>
      <p class="mt-4">
        Keyframe based animation: By specifying keyframes for specific points in
        the animation, we can let the computer interpolate the values for the
        animated properties between the keyframes.
      </p>
      <p class="mt-6">
        The most common methods for creating a Tween with GSAP:
      </p>
      <ul class="my-2 space-y-2 text-green font-bold pl-4">
        <li>gsap.to()</li>
        <li>gsap.from()</li>
        <li>gsap.fromTo()</li>
      </ul>
      <p class="mt-6">When sequencing is needed:</p>
      <ul class="my-2 space-y-2 text-green font-bold pl-4">
        <li>gsap.timeline()</li>
      </ul>
    </div>
  </section>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

const heading = ref(null);
gsap.registerPlugin(SplitText);

onMounted(() => {
  gsap.from(heading.value, {
    y: 100,
    duration: 2,
  });
});
</script>
