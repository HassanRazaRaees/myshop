module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 7778),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      schema: env("DATABASE_SCHEMA", "public"),
      // ssl: { rejectUnauthorized: false },
      
    },
  }
});