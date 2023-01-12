<template>
  <section class="container">
    <div class="overflow-hidden">
      <p class="text-6xl font-bold" ref="heading">Timeline</p>
    </div>
    <div class="flex flex-col my-10 text-xl tracking-wide" ref="text">
      <p>
        A Timeline is a powerful sequencing tool that acts as a container for
        tweens and other timelines, making it simple to control them as a whole
        and precisely manage their timing.
      </p>
      <p class="mt-4">
        Without timelines you'd need to use a delay for every animation, in
        order to play them in sequence.
      </p>
      <div class="grid grid-cols-3 my-4 overflow-hidden">
        <div>
          <img
            src="https://media.istockphoto.com/id/813499652/photo/furry-british-cat-white-color-on-isolated-black-background.jpg?s=612x612&w=0&k=20&c=UGoYKMfcS3-EyM1NMWyuA_TxQ9XRUylm59HzujE-1nw="
            ref="catLeft"
            class="object-scale-down w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/468583653/photo/cat-portrait.jpg?s=612x612&w=0&k=20&c=-cMtH_bzO5nDy1sltTKbJ5JV_u1GXS7ki-CaD-ek0aA="
            ref="catMiddle"
            class="object-scale-down w-full h-full"
          />
        </div>
        <div>
          <img
            src="https://s1.1zoom.me/big3/942/Cats_Leopard_cat_Gold_Black_background_Glance_530149_4915x3277.jpg"
            ref="catRight"
            class="object-scale-down w-full h-full"
          />
        </div>
      </div>
    </div>
    <div class="mt-8 w-full">
      <input
        id="progressSlider"
        type="range"
        min="0"
        max="1"
        value="0"
        step="0.001"
        class="w-full"
        style="color: greenyellow"
      />
    </div>
  </section>
</template>

<script async setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const heading = ref(null);
const text = ref(null);
const catLeft = ref(null);
const catMiddle = ref(null);
const catRight = ref(null);
let progressSlider: HTMLElement | null = null;

const updateSlider = () => {
  if (progressSlider) {
    (progressSlider as any).value = timeline.progress();
  }
};

const timeline = gsap.timeline({
  defaults: { duration: 1, ease: "power3.out" },
  onUpdate: updateSlider,
});

const update = () => {
  timeline.progress((progressSlider as any).value).pause();
};

onMounted(() => {
  progressSlider = document.getElementById("progressSlider");
  (progressSlider as any).addEventListener("input", update);

  timeline
    .from(heading.value, {
      y: 100,
      duration: 2,
    })
    .from(text.value,
      {
        opacity: 0,
        duration: 2.5,
      },
      "<0.4"
    )
    .from(catMiddle.value,
      {
        y: 300,
      },
      "<0.6"
    )
    .from(catRight.value,
      {
        y: 300,
      },
      "<0.2"
    )
    .from(catLeft.value,
      {
        y: 300,
      },
      "<2"
    );
});
</script>
