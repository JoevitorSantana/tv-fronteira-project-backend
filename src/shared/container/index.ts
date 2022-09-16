import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ComputerImagesRepository } from "../../modules/computers/infra/repositories/ComputerImagesRepository";
import { ComputerRepository } from "../../modules/computers/infra/repositories/ComputerRepository";
import { IComputerRepository } from "../../modules/computers/repositories/IComputerRepository";
import { IComputerImagesRepository } from "../../modules/computers/repositories/IComputersImageRepository";
import { LocalStorage } from "./providers/StorageProvider/implementations/LocalStorage";
import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IStorageProvider>(
    "StorageProvider",LocalStorage
)

container.registerSingleton<IComputerRepository>(
    "ComputerRepository", ComputerRepository
)

container.registerSingleton<IComputerImagesRepository>(
    'ComputerImagesRepository',
    ComputerImagesRepository  
);