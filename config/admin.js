module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b3ded8d8db8709fb932b34b459eaf127'),
  },
});
