import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const resJsonInterceptor = (req: Request, res: Response, next: NextFunction) => {
  const oldResJson = res.json;
  res.json = (data) => {
    logger.info({
      message: 'Http Response',
      data,
    });
    res.json = oldResJson;
    return res.json(data);
  };
  next();
};
