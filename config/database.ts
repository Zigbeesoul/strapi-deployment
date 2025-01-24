import path from 'path';

export default ({ env }) => {
  const client = 'postgres'; // Forcer PostgreSQL

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false, // Désactiver la vérification SSL pour Render
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
