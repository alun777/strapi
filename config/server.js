module.exports = ({ env }) => ({
  host: env("HOST", "https://master.dvfs8qtfggqfz.amplifyapp.com"),
  port: env.int("PORT", 1337),
});
