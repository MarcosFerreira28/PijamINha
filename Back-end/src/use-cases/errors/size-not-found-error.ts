import { ResourceNotFoundError } from "./resource-not-found-error";


export class SizeNotFoundError extends ResourceNotFoundError {
    constructor() {
        super("Size");
    }
}