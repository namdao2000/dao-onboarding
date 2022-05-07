import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { SignupReqArgs } from './types';

export const UserController = {
  signup: async (
    req: Request<{}, {}, SignupReqArgs>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await UserService.createNewUser({
        ...req.body,
      });
      res.status(201).json({
        message: `Successfully registered a new user ${req.body.discordUsername}.`,
        user: {
          username: req.body.discordUsername,
          user_role: req.body.userRole,
        },
      });
      next();
    } catch (e) {
      next(e);
    }
  },
  getUsers: async (
    req: Request<{}, {}, {}, { offset: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const users = await UserService.getUsers(parseInt(req.query.offset) || 0);
      res.status(200).json({
        users,
      });
    } catch (e) {
      next(e);
    }
  },
};
