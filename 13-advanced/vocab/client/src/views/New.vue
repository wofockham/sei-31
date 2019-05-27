<template>
  <div>
    <h1>New Word</h1>
    <word-form @createOrUpdateWord="createOrUpdate"></word-form>
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-word',
  components: {
    'word-form': WordForm
  },
  methods: {
    createOrUpdate: async function (word) {
      const result = await api.createWord(word);
      this.flash('Word created', 'success');
      this.$router.push(`/words/${ result._id }`);
    }
  }
}
</script>

<style>
</style>
