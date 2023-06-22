<template>
  <div>hello this is the champ, Yahya! (y)</div>
  <pre>
    {{ config }}
</pre
  >
</template>
<script setup lang="ts">
import { useRuntimeConfig } from "nuxt/app";
const config = useRuntimeConfig();
</script>
