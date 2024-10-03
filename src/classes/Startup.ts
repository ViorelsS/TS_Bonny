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
            `Incentivo ricevuto: ${incentivo.id}, valore: ${incentivo.valore}`
        );
    }
}
