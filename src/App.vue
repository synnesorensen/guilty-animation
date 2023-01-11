<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import GuiltyMorph from "./components/GuiltyMorph.vue";
import Guilty from "./assets/Guilty.vue";
</script>

<template>
  <div class="container">
    <div class="text-white">
      <header class="flex justify-around place-items-center mt-10">
        <div v-if="$route.name !== 'svg-morphylorphy2'">
          <RouterLink to="/">
            <GuiltyMorph />
          </RouterLink>
        </div>
        <!-- <div v-else>
          <Guilty width="200" />
        </div> -->
        <div class="my-10">
          <div class="flex items-start flex-wrap">
            <h1 class="text-5xl font-bold">
              Animations with <span class="text-green">GreenSock</span>
            </h1>
          </div>
          <h3 class="text-xl">a Tech Talk by Guilty</h3>
        </div>
        <a href="https://www.greensock.com" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
            width="100"
          />
        </a>
      </header>
      <div class="flex flex-row items-center">
        <nav class="w-full mb-20 px-24 text-xl text-left">
          <RouterLink class="px-4" to="/intro">Intro</RouterLink>
          <RouterLink class="px-4" to="/css-versus-js">Why GSAP?</RouterLink>
          <RouterLink class="px-4" to="/tween">Tween</RouterLink>
          <RouterLink class="px-4" to="/timeline">Timeline</RouterLink>
          <RouterLink class="px-4" to="/ease">Easing</RouterLink>
          <RouterLink class="px-4" to="/scroll">Scroll Trigger</RouterLink>
          <RouterLink class="px-4" to="/svg">SVG animation</RouterLink>
          <RouterLink class="px-4" to="/svg-morph">SVG Morph</RouterLink>
        </nav>
      </div>
      <div class="">
        <RouterView/>
      </div>
    </div>
  </div>
</template>
