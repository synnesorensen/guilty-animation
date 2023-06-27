<template>
  <main class="container ml-12 md:ml-20 lg:ml-24 flex flex-col">
    <div class="flex flex-row">
      <div ref="textRef" class="text-2xl md:text-4xl lg:text-6xl font-bold mr-2 md:mr-3 lg:mr-4"></div>
      <div ref="wordRef" class="text-2xl md:text-4xl lg:text-6xl font-bold mr-1"></div>
      <div ref="cursorRef" class="text-green text-4xl font-bold md:text-6xl">
        |
      </div>
    </div>
  </main>
</template>

<script async setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { SteppedEase } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import MorphSVG from "gsap/MorphSVGPlugin";

gsap.registerPlugin(SteppedEase, TextPlugin, MorphSVG);

const textRef = ref(null);
const wordRef = ref(null);
const cursorRef = ref(null);
const words = [
  "Guilty",
  "Design",
  "Tech",
  "Great",
  "Brave",
  "Driven",
  "Eager",
  "Excited",
  "Fiery",
  "Ready",
];

onMounted(() => {
  let tlMain = gsap.timeline({ repeat: -1 });

  gsap.fromTo(
    cursorRef.value,
    { autoAlpha: 0, x: -2 },
    { autoAlpha: 1, duration: 0.8, repeat: -1, ease: SteppedEase.config(1) }
  );

  gsap.to(textRef.value, { text: "We are ", duration: 1 });

  words.forEach((word) => {
    let tlText = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 2,
      delay: 1.5,
    });
    tlText.to(wordRef.value, { text: word, duration: 1 });
    tlMain.add(tlText);
  });
});
</script>
