import {Router} from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';
import { CreateUsersController } from '../../../../modules/accounts/useCases/CreateUserUseCase/CreateUsersController';
import { ListAllGeolocationsController } from '../../../../modules/accounts/useCases/ListAllGeolocation/ListAllGeolocationsController';
import { ListAllUsersController } from '../../../../modules/accounts/useCases/ListAllUsers/ListAllUsersController';
import { ListComputersByUserController } from '../../../../modules/accounts/useCases/ListComputersByUser/ListComputersByUserController';
import { ProfileController } from '../../../../modules/accounts/useCases/ProfileUseCase/ProfileController';
import { ShowSingleUserController } from '../../../../modules/accounts/useCases/ShowSingleUser/ShowSingleUserController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUsersController = new CreateUsersController();
const profileController = new ProfileController();
const listAllUsersController = new ListAllUsersController();
const showSingleProfileController = new ShowSingleUserController();
const listComputersByUserController = new ListComputersByUserController();
const listAllGeolocationsController = new ListAllGeolocationsController()

usersRoutes.post('/', createUsersController.create);
usersRoutes.get('/profile', ensureAuthenticated, profileController.show);
usersRoutes.put('/update', ensureAuthenticated, profileController.update);
usersRoutes.get('/', ensureAuthenticated, ensureAdmin, listAllUsersController.list);
usersRoutes.get('/profile/:id', ensureAuthenticated, showSingleProfileController.show);
usersRoutes.patch('/update/avatar', ensureAuthenticated, uploadAvatar.single("avatar"), profileController.updateAvatar);
usersRoutes.get('/computers', ensureAuthenticated, listComputersByUserController.list);
usersRoutes.get('/geolocations', listAllGeolocationsController.list);

export {usersRoutes};