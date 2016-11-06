export const Genders: string[] = ["Male", "Female"];

export interface IPlayer {
    _id: any;
    name: string;
    lastName?: string;
    birthday?: Date;
    gender?: string 
    email?: string;
}

