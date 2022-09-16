import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import CreateComputerController from "../../../../modules/computers/useCases/CreateComputer/CreateComputerController";
import { ListComputerImagesController } from "../../../../modules/computers/useCases/ListComputerImages/ListComputerImagesController";
import { ListComputersController } from "../../../../modules/computers/useCases/ListComputers/ListComputersController";
import { ShowComputerController } from "../../../../modules/computers/useCases/ShowComputer/ShowComputerController";
import { UploadComputerImageController } from "../../../../modules/computers/useCases/UploadImageComputer.ts/UploadComputerImageController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const computerRoutes = Router();
const uploadImage = multer(uploadConfig)

const createComputerController = new CreateComputerController();
const listComputersController = new ListComputersController();
const uploadComputerImageController = new UploadComputerImageController();
const listComputerImagesController = new ListComputerImagesController();
const showComputerController = new ShowComputerController();

computerRoutes.post('/create', ensureAuthenticated, uploadImage.single("imageUrl"), createComputerController.create);
computerRoutes.get('/', ensureAuthenticated, listComputersController.listComputers);
computerRoutes.post('/images/:id', ensureAuthenticated, uploadImage.array("images"), uploadComputerImageController.handle);
computerRoutes.get('/images/:id', ensureAuthenticated, listComputerImagesController.handle);
computerRoutes.get('/computer/:id', showComputerController.list);

export {computerRoutes};