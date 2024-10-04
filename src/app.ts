import { Cittadino } from './classes/Cittadino';
import { Incentivo } from './classes/Incentivo';
import { Startup } from './classes/Startup';

// ----------------- STARTUP -----------------
const startupA = new Startup(
    'Bending Spoons',
    'mobile games',
    `Bending Spoons è una tech company italiana fondata nel 2013, specializzata nello sviluppo di applicazioni mobili e software. È nota per aver creato app di successo in diverse categorie, tra cui editing video, fitness, e salute. La filosofia di Bending Spoons si concentra sull'innovazione, l'uso intensivo di dati e l'ottimizzazione continua dei prodotti, con un team di ingegneri, designer e data scientist che lavorano insieme per creare esperienze utente di alta qualità. La società è particolarmente riconosciuta per l'approccio agile e per la cultura aziendale orientata alla crescita e alla collaborazione.`,
    'App mobile - SaaS - Analisi Dati - Collaborazioni speciali'
);
const startupB = new Startup(
    'Joinrs',
    'talent matching',
    `Joinrs è una piattaforma italiana che collega giovani professionisti e aziende attraverso progetti reali e collaborazioni. La sua missione è fornire un ponte tra il mondo accademico e quello lavorativo, offrendo a studenti e neolaureati l'opportunità di partecipare a esperienze pratiche in cui possono applicare le proprie competenze e sviluppare nuove abilità. Le aziende, d'altra parte, possono avvalersi del talento di giovani qualificati per risolvere sfide aziendali o sviluppare progetti innovativi. Joinrs si concentra sull'offrire un'esperienza win-win per entrambe le parti, favorendo lo sviluppo professionale e creando opportunità di networking.`,
    'Progetti reali - Esperienze pratiche - Collaborazioni aziendali - Sviluppo professionale'
);
const startupC = new Startup(
    'Stripe',
    'pagamenti digitali',
    `Stripe è una piattaforma tecnologica globale che fornisce infrastrutture per i pagamenti online. Fondata nel 2010, è progettata per facilitare l'accettazione di pagamenti, la gestione di transazioni e lo sviluppo di soluzioni finanziarie per aziende di tutte le dimensioni. Stripe offre strumenti per l'elaborazione dei pagamenti, la gestione degli abbonamenti, la prevenzione delle frodi e molto altro, rendendo semplice l'integrazione di soluzioni di pagamento in siti web e applicazioni. È particolarmente apprezzata per la sua semplicità d'uso, la sicurezza e la scalabilità.`,
    'Elaborazione pagamenti - Gestione abbonamenti - Prevenzione delle frodi - Soluzioni di pagamento integrate - Strumenti finanziari per aziende'
);

// ----------------- INCENTIVI -----------------
const incentivoInnovazione = new Incentivo(
    'IT01',
    `Questo incentivo è destinato alle startup che sviluppano soluzioni tecnologiche innovative. L'obiettivo è supportare la ricerca e lo sviluppo di nuove tecnologie che possono avere un impatto significativo sul mercato.`,
    5000,
    [
        `La startup deve avere meno di 5 anni.`,
        `Il progetto deve essere in fase di prototipo.`,
        `La soluzione proposta deve avere un potenziale di scalabilità.`,
    ]
);
const incentivoSostenibilita = new Incentivo(
    'SA01',
    `Questo incentivo è rivolto alle startup che lavorano su progetti di sostenibilità ambientale. L'obiettivo è promuovere iniziative che riducono l'impatto ambientale e favoriscono pratiche ecologiche.`,
    7000,
    [
        `La startup deve operare nel settore delle energie rinnovabili o della gestione dei rifiuti.`,
        `Il progetto deve dimostrare una riduzione significativa delle emissioni di CO2.`,
        `La startup deve collaborare con enti o organizzazioni ambientali.`,
    ]
);
const incentivoInclusione = new Incentivo(
    'IS01',
    `Questo incentivo è destinato alle startup che sviluppano soluzioni per l'inclusione sociale. L'obiettivo è supportare progetti che migliorano l'accesso ai servizi per le comunità svantaggiate.`,
    6000,
    [
        `La startup deve avere un impatto diretto su comunità svantaggiate.`,
        `Il progetto deve includere programmi di formazione o supporto.`,
        `La startup deve dimostrare un modello di business sostenibile.`,
    ]
);

const incentivoGiovani = new Incentivo(
    'GIO01',
    `Questo incentivo è destinato alle startup che sviluppano soluzioni per supportare i giovani. L'obiettivo è promuovere iniziative che migliorano l'accesso all'istruzione, alla formazione professionale e alle opportunità di lavoro per i giovani.`,
    8000,
    [
        `La startup deve avere un programma specifico per i giovani.`,
        `Il progetto deve includere attività di formazione o mentoring.`,
        `La startup deve dimostrare un impatto positivo sulla comunità giovanile.`,
    ]
);

// ----------------- CITTADINI -----------------
const cittadino1 = new Cittadino('Mario', 'Rossi', 30, [
    'calcio',
    'lettura',
    'viaggi',
    'fotografia',
]);
const cittadino2 = new Cittadino('Luca', 'Bianchi', 25, [
    'basket',
    'musica',
    'cinema',
    'cucina',
]);
const cittadino3 = new Cittadino('Giulia', 'Verdi', 28, [
    'yoga',
    'pittura',
    'escursionismo',
    'danza',
]);
const cittadino4 = new Cittadino('Anna', 'Neri', 35, [
    'nuoto',
    'giardinaggio',
    'scrittura',
    'teatro',
]);

startupA.riceviIncentivo(incentivoInnovazione);
startupA.riceviIncentivo(incentivoGiovani);
startupB.riceviIncentivo(incentivoGiovani);
startupB.riceviIncentivo(incentivoSostenibilita);
startupC.riceviIncentivo(incentivoInclusione);

cittadino1.partecipaAttività(startupA);
cittadino2.partecipaAttività(startupA);
cittadino3.partecipaAttività(startupB);
cittadino4.partecipaAttività(startupC);
