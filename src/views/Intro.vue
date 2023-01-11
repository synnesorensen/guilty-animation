<template>
  <section class="container">
    <div class="overflow-hidden">
      <p class="text-6xl font-bold" ref="heading">What is an animation?</p>
    </div>
    <div class="flex flex-row my-6 opacity-0" ref="quote">
      <p class="text-2xl text-green">
        Wikipedia: The illusion of motion caused by a rapid succession of images
        that minimally differ from each other, with unnoticeable interruptions.
      </p>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col my-2 opacity-0" ref="rendering">
        <p class="text-4xl font-bold pb-8">Rendering graphics in the browser</p>
        <p class="text-2xl leading-8 mb-4">
          Animation on the web is typically done by
        </p>
        <ul class="text-2xl leading-10 pl-6 text-green">
          <li>JavaScript, including canvas and WebGL</li>
          <li>CSS animation</li>
          <li>SVG</li>
          <li>Video</li>
          <li>Animated GIFS</li>
          <li>Animated images</li>
        </ul>
        <p class="text-2xl leading-8 my-4">
          It is commonly accepted that 60 frames per second is the rate at which
          animations will appear smooth.
        </p>
      </div>
    </div>
  </section>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

const heading = ref(null);
const quote = ref(null);
const rendering = ref(null);

gsap.registerPlugin(SplitText);
const timeline = gsap.timeline();

onMounted(() => {
  let split = new SplitText(heading.value, { type: "chars" });

  timeline
    .from(split.chars, {
      y: "120%",
      ease: "power1.out",
      duration: 0.4,
      stagger: 0.05,
    })
    .to(quote.value, { opacity: "100%", duration: 4 })
    .to(rendering.value, { opacity: "100%", duration: 4 }, "<5");
});
</script>
