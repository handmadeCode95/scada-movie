<template>
    <v-sheet max-width="800" class="mx-auto pa-6" rounded="lg">
        <v-row>
            <v-col
                class="d-none d-sm-flex justify-center align-center rounded-lg bg-light-blue-lighten-5"
            >
                <v-img src="@/assets/logo.svg"></v-img>
            </v-col>
            <v-col class="px-4 py-10">
                <AppLogo class="py-10"></AppLogo>
                <v-form fast-fail @submit.prevent>
                    <v-text-field label="ID"></v-text-field>
                    <v-text-field label="Password"></v-text-field>

                    <v-btn type="submit" block class="mt-2" color="primary">
                        Login
                    </v-btn>
                    <v-btn variant="text" block class="mt-2">Sign Up</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
import AppLogo from "@/components/AppLogo.vue";
</script>
