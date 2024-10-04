import { IIncentivo } from './IIncentivo';

export interface IStartup {
    nome: string;
    settore: string;
    descrizione: string;
    offerta: string;

    riceviIncentivo(incentivo: IIncentivo): void;
}
