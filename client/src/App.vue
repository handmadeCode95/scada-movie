<template>
    <v-app>
        <v-main>
            <TheLayoutVue></TheLayoutVue>
        </v-main>
    </v-app>
</template>

<script setup>
import TheLayoutVue from "./layout/TheLayout.vue";

components: {
    TheLayoutVue;
}
</script>
