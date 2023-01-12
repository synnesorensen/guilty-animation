<template>
  <section class="h-[5000px]">
    <div class="flex flex-row justify-between w-full h-screen"></div>

    <div class="flex flex-row justify-between w-full overflow-hidden">
      <!-- Left column -->
      <div class="flex flex-col w-[400px]" ref="text1">
        <p class="text-4xl">Scroll trigger demo</p>
      </div>
      <!-- Right column -->
      <div class="flex flex-col space-y-60">
        <div ref="img1" class="h-[500px]">
          <img
            src="/IMG_2259.jpeg"
            class="object-cover border-black border-4 rounded-2xl w-[600px]"
          />
        </div>
        <div></div>
        <div ref="img2" class="h-[500px]">
          <img
            src="/IMG_2449.jpeg"
            class="object-cover border-black border-4 rounded-2xl w-[600px]"
          />
        </div>
        <div></div>
        <div ref="img3" class="h-[500px]">
          <img
            src="/201613.jpeg"
            class="tre object-cover border-black border-4 rounded-2xl w-[600px]"
          />
        </div>
        <div></div>
        <div ref="img4" class="h-[500px]">
          <img
            src="/A2.jpeg"
            class="object-cover border-black border-4 rounded-2xl w-[600px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

const heading = ref(null);
const text1 = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);
const img4 = ref(null);

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline();

onMounted(() => {
  let split = new SplitText(heading.value, { type: "chars" });

  gsap.from(split.chars, {
    y: "200%",
    ease: "power1.out",
    duration: 0.4,
    stagger: 0.05,
  });

  gsap.to(text1.value, {
    scrollTrigger: {
      id: "pin",
      trigger: text1.value,
      toggleActions: "restart none none reverse",
      pin: true,
      start: "top center",
      end: "bottom 70%",
    },
  });

  gsap.from(img1.value, {
    x: "120%",
    duration: 1.5,
    ease: "Power4.easeOut",
    scrollTrigger: {
      trigger: img1.value,
      toggleActions: "play none none reverse",
      start: "top center",
    },
  });

  gsap.from(img2.value, {
    x: "120%",
    duration: 2,
    rotation: 360,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: img2.value,
      toggleActions: "play none none reverse",
      start: "center center",
    },
  });

  gsap.from(img3.value, {
    x: "120%",
    duration: 2.5,
    ease: "Bounce.easeOut",
    opacity: 0,
    scrollTrigger: {
      trigger: img3.value,
      toggleActions: "play none none reverse",
      start: "top center",
    },
  });

  gsap.to(img4.value, {
    x: "-20%",
    scaleX: "100%",
    scaleY: "100%",
    duration: 2.5,
    ease: "Power1.easeOut",
    opacity: 100,
    scrollTrigger: {
      trigger: img3.value,
      toggleActions: "play none none reverse",
      start: "bottom center",
    },
  });
});
</script>
