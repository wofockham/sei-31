<template>
  <div>
    <h1>Edit Word</h1>
    <word-form :word=this.word @createOrUpdateWord="createOrUpdate"></word-form>
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    // dependencies: registering a <word-form> tag.
    'word-form': WordForm
  },
  data() {
    return {
      word: {}
    }
  },
  methods: {
    createOrUpdate: async function(word) {
      await api.updateWord(word);
      alert('Word updated successfully!');
      this.$router.push(`/words/${ word._id }`);
    }
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  }
};
</script>

<style>
</style>
