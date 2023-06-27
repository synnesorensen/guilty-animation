<template>
  <main class="mx-2 md:mx-8 lg:mx-24">
    <div class="mb-10 text-base md:text-2xl">
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
    { x: "675" },
    {
      x: "-10",
      duration: 1,
      yoyo: true,
      repeatDelay: 0.5,
      repeat: -1,
      ease: "Power2.easeInOut",
      //ease: "none",
      stagger: {
        amount: 0.3,
      },
    }
  );
});
</script>
