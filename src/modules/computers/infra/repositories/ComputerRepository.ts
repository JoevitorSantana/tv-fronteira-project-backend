import Computer, { ComputerClass } from "../../../../models/Computer";
import { ICreateComputerDTO } from "../../dto/ICreateComputerDTO";
import { IComputerRepository } from "../../repositories/IComputerRepository";

export class ComputerRepository implements IComputerRepository{
    
    async showComputerById(_id: string): Promise<ComputerClass[]> {
        const computer = await Computer.aggregate([{$match:{"_id":_id}}, {$lookup:{from:"computerimages", localField: '_id', foreignField: "computer", as: "images"}}]);

        return computer;
    };
    
    
    async listComputers(): Promise<ComputerClass[]> {
        const computers = await Computer.aggregate([{$lookup:{from:"users", localField: "user", foreignField:"_id", as:"user"}}]);

        return computers;
    };

    async create({processor, description, memory, storage,user, value, videoCard, imageUrl}: ICreateComputerDTO): Promise<void> {
        await Computer.create({
            processor, description, memory, storage,user, value, videoCard, imageUrl
        });        
    };
    
    async findComputerByUser(_id: string): Promise<ComputerClass> {
        const computer = await Computer.find({user: _id});

        return computer;
    };

    async findById(_id: string): Promise<ComputerClass> {
       const computer = await Computer.findById(_id);
       return computer;
    };

}