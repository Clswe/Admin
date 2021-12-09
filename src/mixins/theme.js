export default {
  computed: {
    dark: {
      get () {
        return this.$store.getters.dark;
      },
      set () {
        this.$store.dispatch('TOGGLE_THEME');
      }
    }
  }
};
