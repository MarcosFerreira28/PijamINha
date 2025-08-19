import { ResourceNotFoundError } from "./resource-not-found-error";


export class PajamaNotFoundError extends ResourceNotFoundError {
    constructor() {
        super("Pajama");
    }
}