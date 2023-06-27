<template>
  <div class="container">
    <div class="text-white">
      <header class="flex justify-around place-items-center mt-10">
        <div v-if="!isSmallScreen">
          <RouterLink to="/">
            <GuiltyMorph />
          </RouterLink>
        </div>
        <div v-else>
          <RouterLink to="/">
            <img src="/guilty.png" width="80" />
          </RouterLink>
        </div>
        <div class="my-10 ml-4 md:ml-0">
          <div class="flex items-start flex-wrap">
            <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">
              Animations with <span class="text-green">GreenSock</span>
            </h1>
          </div>
          <h3 class="text-base md:text-xl">a Tech Talk by Guilty</h3>
        </div>
        <div v-if="!isSmallerScreen">
          <a href="https://www.greensock.com" target="_blank">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
              width="100"
            />
          </a>
        </div>
      </header>
      <div class="hidden md:flex md:flex-row md:items-center">
        <nav class="w-full mb-20 lg:pl-20 text-base md:text-xl">
          <RouterLink class="px-4" to="/">Home</RouterLink>
          <RouterLink class="px-4" to="/intro">Intro</RouterLink>
          <RouterLink class="px-4" to="/why-gsap">Why GSAP?</RouterLink>
          <RouterLink class="px-4" to="/tween">Tween</RouterLink>
          <RouterLink class="px-4" to="/timeline">Timeline</RouterLink>
          <RouterLink class="px-4" to="/ease">Easing</RouterLink>
          <RouterLink class="px-4" to="/scroll">Scroll Trigger</RouterLink>
          <RouterLink class="px-4" to="/svg">SVG animation</RouterLink>
          <RouterLink class="px-4" to="/svg-morph">SVG Morph</RouterLink>
          <RouterLink class="px-4" to="/video">Video Scroll</RouterLink>
        </nav>
      </div>
      <div class="md:hidden flex flex-row md:items-start">
        <button
          type="button"
          class="right-8 top-8 absolute z-50"
          @click="toggleMenu"
          :aria-label="isMenuOpen ? 'close menu' : 'open menu'"
        >
          <IconHamburger :class="[isMenuOpen ? 'hidden' : 'visible']" />
          <IconClose
            aria-hidden="true"
            :class="[isMenuOpen ? 'visible' : 'hidden']"
          />
        </button>
        <div
          v-if="isMenuOpen"
          class="md:hidden fixed right-0 top-0 pr-14 pt-40 z-40 w-full flex flex-row justify-end bg-black"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <ul class="flex h-screen flex-col text-lg text-white text-right font-bold leading-10">
            <li @click="toggleMenu"><RouterLink to="/">Home</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/intro">Intro</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/why-gsap">Why GSAP?</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/tween">Tween</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/timeline">Timeline</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/ease">Easing</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/scroll">Scroll Trigger</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/svg">SVG animation</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/svg-morph">SVG Morph</RouterLink></li>
            <li @click="toggleMenu"><RouterLink to="/video">Video Scroll</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup async lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import GuiltyMorph from "./components/GuiltyMorph.vue";
import IconHamburger from "./assets/IconHamburger.vue";
import IconClose from "./assets/IconClose.vue";

const isSmallScreen = screen.width < 1024;
const isSmallerScreen = screen.width < 700;

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle("overflow-hidden", isMenuOpen.value);
};
</script>
