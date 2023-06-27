<template>
  <main class="p-0 m-0 box-border">
    <video
      id="video"
      class="video fixed w-full h-full"
      playsinline="true"
      preload="auto"
      muted
    >
      <source src="cotton.mp4" type="video/mp4" />
    </video>
  </main>
</template>

<script async setup lang="ts">
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const video = document.querySelector("video");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: video,
      start: "top 290px",
      end: "bottom+=200% bottom",
      scrub: true,
      markers: true,
    },
  });

  video!.onloadedmetadata = () => {
    tl.to(video, { currentTime: video!.duration });
  };
});
</script>

<style></style>
