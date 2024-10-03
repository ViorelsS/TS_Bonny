import { IStartup } from './IStartup';

export interface IIncentivo {
    id: string;
    descrizione: string;
    valore: number;
    // TODO: valutare criteri
    criteri: string[];

    assegnaAStartup(startup: IStartup): void;
}
