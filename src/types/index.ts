import { Schema } from "mongoose";

export interface User {
    name: string;
    age: number;
    email: string;
}

export type MyFirstType = {
    attr1: string;
    attr2: number;
    attr3: boolean;
}


export const carSchema = new Schema({
    _id: { type: String },
    brand: { type: String },
    model: { type: String },
    itv: { type: Boolean }
});