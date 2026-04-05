import { config } from './config.js';
import { logger } from './utils/logger.js';

logger.info('NumNinjas starting...', {
  timezone: config.timezone,
  isDev: config.isDev,
});
