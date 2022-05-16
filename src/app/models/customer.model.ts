import { CustomerItem } from "./customer.item.model";

export class CustomerDto {
    customer_name!: string;
    id_number!: string;
    phone!: string;
    city!: string;
    address!: string;
    items:CustomerItem[];
    constructor() {
        this.items = [];
    }
}