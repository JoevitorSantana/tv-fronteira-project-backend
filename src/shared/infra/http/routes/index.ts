import {Router} from 'express';
import { authRoutes } from './auth.routes';
import { computerRoutes } from './computer.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/computers', computerRoutes);

export {routes};