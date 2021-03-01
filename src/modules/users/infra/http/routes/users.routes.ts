import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { UsersController } from '../controllers/UsersController';

export const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  usersController.create,
);
