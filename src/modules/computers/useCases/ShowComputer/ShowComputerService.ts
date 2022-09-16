import { inject, injectable } from "tsyringe";
import { ComputerClass } from "../../../../models/Computer";
import { IComputerRepository } from "../../repositories/IComputerRepository";

@injectable()
export class ShowComputerService{

    constructor(
        @inject("ComputerRepository")
        private computersRepository: IComputerRepository,
    ){}

    async execute(_id: string):Promise<ComputerClass>{
        const computer = await this.computersRepository.findById(_id);

        return computer;
    };
}