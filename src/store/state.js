
export default {
  toast: {
    options: {
      position: 'top-right'
    }
  },
  dark: window.localStorage.getItem('dark')
    ? JSON.parse(window.localStorage.getItem('dark'))
    : (
        !!window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      )
};
