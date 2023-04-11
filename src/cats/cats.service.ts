import { Injectable } from '@nestjs/common';
import {CreateCatDto} from "./dto/cats.dto";

@Injectable()
export class CatService {
    private cats: any = [];

    async createCat(catData: CreateCatDto) {
        this.cats.push(catData);
        return this.cats;
    }

    async deleteCat(id: string) {
        const cat = this.cats.find((item: { id: string; }) => item.id === id);
        return this.cats;
    }

    async patch(id: string, catData: CreateCatDto) {
        const cat = this.cats.find((item: { id: string; }) => item.id === id);
        this.cats.push(catData);
        return this.cats;
    }

    async getCat(id: string) {
        const cat = this.cats.find((item: { id: string; }) => item.id === id);
        return this.cats;
    }
}