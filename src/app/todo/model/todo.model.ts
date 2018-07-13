
export class Todo {
    public id: number;
    public texto: string;
    public terminado: boolean;

    constructor ( text: string ) {
        this.texto = text.charAt(0).toUpperCase() + text.slice(1);
        this.terminado = false;
        this.id = Math.random();
    }
}
