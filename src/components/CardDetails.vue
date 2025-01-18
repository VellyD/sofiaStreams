<script>
  export default {
    props: {
      source: {
        type: Object,
        required: true,
      },
      isRecipeDetails: {
        type: Boolean,
        required: true,
      },
    },
    emits: ["onClose"],
    data() {
      return {
        isDetails: true,
      };
    },
  };
</script>

<template>
  <v-container v-if="isRecipeDetails">
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="8"
      >
        <v-dialog
          v-model="isDetails"
          transition="dialog-top-transition"
          width="auto"
        >
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                :title="source.name"
                color="primary"
              ></v-toolbar>

              <v-card-text
                class="pa-4"
                style="background-color: #fff8ef"
              >
                <v-row
                  class="details"
                  align="start"
                  no-gutters
                >
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-img
                      :src="source.image"
                      max-height="350"
                      cover
                      class="relative-container"
                    >
                      <template v-slot:placeholder>
                        <div
                          class="d-flex align-center justify-center fill-height"
                        >
                          <v-progress-circular
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </div>
                      </template>
                    </v-img>
                  </v-col>

                  <div>
                    <div class="details-right">
                      <div class="rating">
                        <v-icon color="surface">mdi-star</v-icon>
                        Rating: {{ source.rating }}
                      </div>
                      <div class="tags d-flex flex-wrap mt-2">
                        <v-chip
                          color="accent"
                          :text="source.cuisine"
                        ></v-chip>
                        <v-chip
                          :color="
                            source.difficulty === 'Easy'
                              ? 'green-lighten-2'
                              : source.difficulty === 'Medium'
                                ? 'orange-lighten-2'
                                : 'red-lighten-2'
                          "
                          :text="source.difficulty"
                          class="ml-2"
                        ></v-chip>
                        <v-chip
                          class="ml-2"
                          color="accent"
                        >
                          Prep time: {{ source.prepTimeMinutes }} min
                        </v-chip>
                        <v-chip
                          class="ml-2"
                          color="accent"
                        >
                          Cook time: {{ source.cookTimeMinutes }} min
                        </v-chip>
                        <v-chip
                          class="ml-2"
                          color="accent"
                        >
                          Servings: {{ source.servings }}
                        </v-chip>
                      </div>
                    </div>

                    <v-col
                      cols="12"
                      md="12"
                    >
                      <h3>Ingredients</h3>
                      <ul>
                        <li
                          v-for="(ingredient, index) in source.ingredients"
                          :key="index"
                        >
                          {{ ingredient }}
                        </li>
                      </ul>
                    </v-col>
                  </div>
                </v-row>

                <v-divider class="my-4"></v-divider>
                <v-row class="instructions">
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <h3>Instructions</h3>
                    <ol>
                      <li
                        v-for="(instruction, index) in source.instructions"
                        :key="index"
                      >
                        {{ instruction }}
                      </li>
                    </ol>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions class="justify-end">
                <v-btn
                  text="Close"
                  @click="$emit('onClose', false)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .details {
    width: 75vw;
    margin: 25px;
    gap: 25px;
  }
  .instructions {
    margin-left: 25px;
  }
</style>
