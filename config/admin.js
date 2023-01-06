module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1762b788a4889e8fa456fc89dba1eb3b'),
  },
});
