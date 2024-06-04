<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 py-5 px-10 lg:px-20 gap-5">
    <div class="flex flex-col justify-center gap-14">
      <h2 class="text-3xl uppercase text-spaceCadet font-medium">Cat fact:</h2>
      <div v-if="!currentFact" class="rounded-md p-4 max-w-sm w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
      <p v-else class="text-xl text-ultraViolet">
        {{ currentFact }}
      </p>
      <div>
        <Button @click="showNextFact">
          <Icon name="material-symbols:refresh" class="text-[1.5rem]" />
          Get a random cat fact
        </Button>
      </div>
    </div>
    <div class="self-center">
      <CatImages />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useFactStore } from "~/stores/fact";

const factsStore = useFactStore();

onMounted(async () => {
  await factsStore.fetchFacts();
});

const currentFact = computed(() => factsStore.currentFact);

const showNextFact = () => {
  factsStore.showNextFact();
};
</script>