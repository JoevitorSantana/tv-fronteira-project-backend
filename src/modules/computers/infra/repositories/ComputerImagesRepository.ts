import mongoose from 'mongoose'
import ComputerImages, { ComputerImagesClass } from "../../../../models/ComputerImages";
import { IComputerImagesRepository } from "../../repositories/IComputersImageRepository";

export class ComputerImagesRepository implements IComputerImagesRepository{
    
    
    async listById(id: string): Promise<ComputerImagesClass> {                            
        const computerImages = await ComputerImages.find({computer: id});        
        return computerImages;
    }
    
    async create(computer: string, imageUrl: string[]): Promise<void> {
        
        const formatedUrl = `http://localhost:3333/computers/${imageUrl}`        

        await ComputerImages.findByIdAndUpdate({
            _id: computer, imageUrl: formatedUrl
        })        
    };
        
    
};