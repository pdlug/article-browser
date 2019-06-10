module.exports = ({ file, options, env }) => ({
  plugins: {
    "postcss-preset-env": {
      features: {
        "nesting-rules": true,
      },
      stage: 1,
    },
    "tailwindcss": "",
  },
});
