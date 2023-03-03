<template>
    <v-app-bar flat>
        <v-container class="fill-height d-flex align-center py-0">
            <AppLogo></AppLogo>

            <v-tabs centered color="grey-darken-2">
                <RouterLink
                    v-for="link in links"
                    :key="link.pageName"
                    :to="link.url"
                    class="text-decoration-none"
                >
                    <v-tab>
                        {{ link.pageName }}
                    </v-tab>
                </RouterLink>
            </v-tabs>

            <v-spacer></v-spacer>

            <RouterLink to="/join">
                <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </RouterLink>
            <RouterLink to="/login">
                <v-btn icon>
                    <v-icon>mdi-login-variant</v-icon>
                </v-btn>
            </RouterLink>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { reactive } from "vue";
import AppLogo from "@/components/AppLogo.vue";

const links = reactive([
    {
        pageName: "Movies",
        url: "/",
    },
    {
        pageName: "Reviews",
        url: "/reviews",
    },
]);
</script>
