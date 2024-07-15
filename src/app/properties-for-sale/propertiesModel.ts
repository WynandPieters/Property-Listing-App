export interface Property {
    person_name: string;
    property_name: string;
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
        public person_name: string,
        public property_name: string,
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