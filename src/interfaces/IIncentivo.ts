import { IStartup } from './IStartup';

export interface IIncentivo {
    id: string;
    descrizione: string;
    valore: number;
    criteri: string[];

    assegnaAStartup(startup: IStartup): void;
}
