import { ComputerClass } from "../../../models/Computer";
import { ICreateComputerDTO } from "../dto/ICreateComputerDTO";

export interface IComputerRepository{
    create(data: ICreateComputerDTO):Promise<void>;
    findComputerByUser(_id: string):Promise<ComputerClass>;
    findById(_id: string): Promise<ComputerClass>;
    listComputers():Promise<ComputerClass[]>; 
    showComputerById(_id: string):Promise<ComputerClass[]>;
}