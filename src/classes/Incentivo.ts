import { IIncentivo } from '../interfaces/IIncentivo';
import { Startup } from './Startup';

export class Incentivo implements IIncentivo {
    id: string;
    descrizione: string;
    valore: number;
    criteri: string[];

    constructor(
        id: string,
        descrizione: string,
        valore: number,
        criteri: string[]
    ) {
        this.id = id;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteri = criteri;
    }

    assegnaAStartup(startup: Startup): void {
        console.log(startup.nome);
    }
}
