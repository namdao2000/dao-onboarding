import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { body } from 'express-validator';
import { validateResult } from '../middleware/validate-result.middleware';

export const UserRouter = Router();
UserRouter.post(
  '/signup',
  body('discordUsername')
    .exists()
    .withMessage('required')
    .isLength({ max: 14 })
    .withMessage('Must be between 3 to 14 characters long.'),
  body('userRole')
    .exists()
    .withMessage('required')
    .isLength({ max: 255 })
    .withMessage('Must be less than 255 characters long.'),
  validateResult,
  UserController.signup,
);
UserRouter.get('/users', UserController.getUsers);
