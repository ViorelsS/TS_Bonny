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
        console.log(
            `Incentivo ${this.id} assegnato alla startup ${startup.nome}.`
        );
        console.log(`Valore: ${this.valore}.`);
        console.log(`Descrizione incentivo: ${this.descrizione}\n`);
    }
}
