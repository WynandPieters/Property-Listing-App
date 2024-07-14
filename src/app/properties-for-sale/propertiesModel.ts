export interface Property {
    id: number;
    username: string;
    address: string;
    price: number;
    type: string;
    nrBathrooms: number;
    nrBedrooms: number;
    nrFloors: number;
    garden: boolean;
    powerBackUp: boolean;
    description: string;
    imageUrls: string[];
}

export class Property implements Property {
    constructor(
        public id: number,
        public username: string,
        public address: string,
        public price: number,
        public type: string,
        public nrBathrooms: number,
        public nrBedrooms: number,
        public nrFloors: number,
        public garden: boolean,
        public powerBackUp: boolean,
        public description: string,
        public imageUrls: string[],
    ) {}
}