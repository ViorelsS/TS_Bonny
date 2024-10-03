import { Cittadino } from './classes/Cittadino';
import { Incentivo } from './classes/Incentivo';
import { Startup } from './classes/Startup';

// ----------------- STARTUP -----------------
const startupA = new Startup('A', 'Settore A', 'Descrizione A', 'Offerta A');
const startupB = new Startup('B', 'Settore B', 'Descrizione B', 'Offerta B');
const startupC = new Startup('C', 'Settore C', 'Descrizione C', 'Offerta C');

// ----------------- INCENTIVI -----------------
const incentivo1 = new Incentivo('A01', 'descr1', 1000, [
    'Criterio A1',
    'Criterio A2',
    'Criterio A3',
]);
const incentivo2 = new Incentivo('B01', 'descr2', 2000, [
    'Criterio B1',
    'Criterio B2',
    'Criterio B3',
]);
const incentivo3 = new Incentivo('C01', 'descr3', 3000, [
    'Criterio A1',
    'Criterio A2',
    'Criterio A3',
]);

// ----------------- CITTADINI -----------------
const cittadino1 = new Cittadino('Nome1', 'Cognome1', 20, [
    'calcio',
    'karate',
    'pallavolo',
    'nuoto',
]);
const cittadino2 = new Cittadino('Nome1', 'Cognome1', 20, [
    'calcio',
    'karate',
    'pallavolo',
    'nuoto',
]);
const cittadino3 = new Cittadino('Nome1', 'Cognome1', 20, [
    'calcio',
    'karate',
    'pallavolo',
    'nuoto',
]);
const cittadino4 = new Cittadino('Nome1', 'Cognome1', 20, [
    'calcio',
    'karate',
    'pallavolo',
    'nuoto',
]);

startupA.riceviIncentivo(incentivo1);
startupB.riceviIncentivo(incentivo2);
startupC.riceviIncentivo(incentivo3);

cittadino1.partecipaAttività(startupA);
cittadino2.partecipaAttività(startupA);
cittadino3.partecipaAttività(startupB);
cittadino4.partecipaAttività(startupC);
