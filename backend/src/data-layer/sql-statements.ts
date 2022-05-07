export const SQL_STATEMENTS = {
  initialiseDatabase: `
      CREATE TABLE IF NOT EXISTS user
      (
          discordUsername VARCHAR
      (
          255
      ) PRIMARY KEY,
          userRole VARCHAR
      (
          255
      ) NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
          );

      CREATE TRIGGER IF NOT EXISTS user_auto_updated_at
          AFTER
      UPDATE
          ON user
      BEGIN
      UPDATE user
      SET updated_at = CURRENT_TIMESTAMP
      WHERE username = NEW.username;
      END;
  `,
  createUser: `
      INSERT INTO user (discord_username, user_role)
      VALUES (?, ?)
  `,
  getUsers: `
      SELECT *
      FROM user
      ORDER BY updated_at DESC LIMIT 15
      OFFSET ?
  `,
};
