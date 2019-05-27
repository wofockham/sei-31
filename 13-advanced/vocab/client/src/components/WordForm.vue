<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please complete both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter word..." v-model.trim="word.german" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter word..." v-model.trim="word.english" />
    </div>

    <button class="positive ui button">Save</button>
  </form>
</template>

<script>
export default {
  name: 'word-form',
  props: {
    word: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      errorsPresent: false
    }
  },
  methods: {
    onSubmit() {
      if (this.word.english === '' || this.word.german === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdateWord', this.word);
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
