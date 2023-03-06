<template>
    <v-container>
        <v-sheet rounded="lg" class="pa-6">
            <v-row>
                <v-col
                    v-for="(item, index) in movies.results"
                    :key="index"
                    sm="6"
                    md="3"
                >
                    <v-card>
                        <v-img
                            :src="makeImagePath(item.poster_path, 'w300')"
                            cover
                        ></v-img>

                        <v-card-item>
                            <v-card-title>{{ item.title }}</v-card-title>

                            <v-card-subtitle>
                                {{ item.release_date }}
                            </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating
                                    :model-value="item.vote_average / 2"
                                    color="amber"
                                    density="compact"
                                    half-increments
                                    readonly
                                    size="small"
                                ></v-rating>

                                <div class="text-grey ms-2">
                                    {{ item.vote_average }}
                                </div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { getMovies } from "@/services/api.movie.js";
import { makeImagePath } from "@/util.js";

const movies = ref([]);

const fetchMovies = async () => {
    const { data } = await getMovies();
    movies.value = data;
};
fetchMovies();
</script>
