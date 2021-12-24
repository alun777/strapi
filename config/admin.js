module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9da188b68e27453bbb66e60c5c89cd50'),
  },
});
