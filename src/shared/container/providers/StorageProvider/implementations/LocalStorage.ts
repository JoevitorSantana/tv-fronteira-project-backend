import fs from 'fs';
import upload from '../../../../../config/upload';
import { IStorageProvider } from "../IStorageProvider";
import {resolve} from 'path';

export class LocalStorage implements IStorageProvider{
    async save(file: string, folder: string): Promise<string> {
        await fs.promises.rename(
            resolve(upload.tmpFolder, file),
            resolve(`${upload.tmpFolder}/${folder}`, file)
        );

        return file;
    }
    async delete(file: string, folder: string): Promise<void> {
        const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

        try{
            await fs.promises.stat(filename);
        } catch {
            return;
        }

        await fs.promises.unlink(filename);
    }

}