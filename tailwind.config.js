module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/ngx-loading/src/**/*.{html,ts}",
  ],
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
