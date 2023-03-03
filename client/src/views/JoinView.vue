<template>
    <v-sheet max-width="1000" class="mx-auto pa-6" rounded="lg">
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
                    <v-text-field
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        label="Confirm Password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        label="Email address"
                        type="email"
                    ></v-text-field>
                    <v-text-field
                        label="Date of birth"
                        type="date"
                    ></v-text-field>
                    <v-text-field
                        label="Phone Number"
                        type="tel"
                    ></v-text-field>

                    <v-btn type="submit" block class="mt-2" color="primary">
                        Sign up
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup>
import AppLogo from "@/components/AppLogo.vue";
</script>
