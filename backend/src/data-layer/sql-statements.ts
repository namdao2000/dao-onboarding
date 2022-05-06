export const SQL_STATEMENTS = {
  initialiseDatabase: `
      CREATE TABLE IF NOT EXISTS user
      (
          discord_username VARCHAR
      (
          255
      ) PRIMARY KEY,
          user_role VARCHAR
      (
          255
      ) NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
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
