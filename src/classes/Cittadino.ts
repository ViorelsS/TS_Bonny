import { ICittadino } from '../interfaces/ICittadino';
import { IStartup } from '../interfaces/IStartup';

export class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    constructor(
        nome: string,
        cognome: string,
        eta: number,
        interessiSportivi: string[]
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }

    partecipaAttività(startup: IStartup): void {
        console.log(
            `${this.nome} ${this.cognome} sta partecipando all'attività della startup ${startup.nome}.`
        );
        console.log(`Descrizione attività: ${startup.descrizione}\n`);
    }
}
