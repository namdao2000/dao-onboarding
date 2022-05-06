import './utils/loadenv';
import app from './server';
import { logger } from './utils/logger';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  logger.info(`Dao Dashboard API server started on port: ${PORT}`);
});
