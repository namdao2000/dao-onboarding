# Dao Dashboard 
This website allows you to sign up to a DAO project and view other contributors via a dashboard

[Live Page]()

## Frontend
The frontend is written in React, Tailwind and Typescript.

## Backend 
The backend of this application is implemented in Expressjs, Typescript and Sqlite3. It has built in JWT Authentication with Bcrypt password storage.

Make sure you have an sqlite in ~/database/database.db

### Features 
- Database backup

#### Authentication
- In-house JWT Authentication (powered by jsonwebtoken)
- Stored passwords are hashed using Bcrypt (10 rounds of salting as well)

#### DevOps

#### SQLite
- SQL Triggers for automatic `updated_at` column update.

#### Observability
- Full logging capability for possible run-time errors
- WIP: Analytics
