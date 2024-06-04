import { defineStore } from 'pinia'

export const useFactStore = defineStore('fact', {
  state: () => ({
    facts: [] as string[],
    currentIndex: 0,
    currentFact: '',
  }),
  actions: {
    async fetchFacts() {
      try {
        const {data}: any = await $fetch('https://meowfacts.herokuapp.com/', {
          params: {
            count: 30
          }
        })

        this.facts = [...this.facts, ...data];
        if (this.currentIndex === 0 && data.length > 0) {
          this.currentFact = data[0];
        }
      } catch (error) {
        console.error(error)
      }
    },
    showNextFact() {
      if (this.facts.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.facts.length;
        this.currentFact = this.facts[this.currentIndex];

        if (this.currentIndex > this.facts.length - 5) {
          this.fetchFacts();
        }
      }
    },
  }
})