import { IIncentivo } from '../interfaces/IIncentivo';
import { IStartup } from '../interfaces/IStartup';

export class Startup implements IStartup {
    nome: string;
    settore: string;
    descrizione: string;
    offerta: string;

    constructor(
        nome: string,
        settore: string,
        descrizione: string,
        offerta: string
    ) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.offerta = offerta;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(
            `La startup ${this.nome} ha ricevuto l'incentivo ${incentivo.id}.`
        );
        console.log(`Valore: ${incentivo.valore}.`);
        console.log(`Descrizione incentivo: ${incentivo.descrizione}\n`);
    }
}
