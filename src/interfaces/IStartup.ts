import { IIncentivo } from './IIncentivo';

export interface IStartup {
    nome: string;
    settore: string;
    descrizione: string;
    // TODO: valutare se creare una struttura ad hoc
    offerta: string;

    riceviIncentivo(incentivo: IIncentivo): void;
}
