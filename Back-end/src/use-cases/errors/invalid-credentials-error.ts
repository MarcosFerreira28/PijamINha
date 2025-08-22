export class InvalidCredentialsError extends Error {
    constructor(message: string = 'Credenciais inválidas.') { 
        super(message);
    }
}