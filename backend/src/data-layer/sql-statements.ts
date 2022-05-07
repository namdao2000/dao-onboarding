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
      SET updatedAt = CURRENT_TIMESTAMP
      WHERE discordUsername = NEW.discordUsername;
      END;
  `,
  createUser: `
      INSERT INTO user (discordUsername, userRole)
      VALUES (?, ?)
  `,
  getUsers: `
      SELECT *
      FROM user
      ORDER BY updatedAt DESC LIMIT 15
      OFFSET ?
  `,
};
