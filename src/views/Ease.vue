<template>
  <main class="container">
    <div class="mb-10 text-2xl">
      <p>
        Easing in animation is a transition method that modifies motion to make
        it less pronounced and jarring.
      </p>
    </div>
    <div>
      <table>
        <tr v-for="a in 10">
          <td>
            <div class="mb-2 rounded block w-[300px] h-10 bg-green"></div>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script async setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    ".block",
    { x: "650" },
    {
      x: "-100",
      duration: 1,
      yoyo: true,
      repeatDelay: 0.5,
      repeat: -1,
      ease: "Rough.easeInOut",
      stagger: {
        amount: 0.3,
      },
    }
  );
});
</script>
