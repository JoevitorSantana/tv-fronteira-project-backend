import { inject, injectable } from "tsyringe";
import Computer, { ComputerClass } from "../../../../models/Computer";
import { UserClass } from "../../../../models/User";
import { IComputerRepository } from "../../repositories/IComputerRepository";

@injectable()
export class ListComputersService{

    constructor(
        @inject("ComputerRepository")
        private computersRepository: IComputerRepository,
    ){}

    async execute():Promise<UserClass[]>{
        const computers = await Computer.find();

        return computers;
    }

    async listComputers():Promise<ComputerClass[]>{
        const computers = await this.computersRepository.listComputers();

        return computers;
    }
}