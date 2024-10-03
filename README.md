# TS Bonny

TS Bonny è un'applicazione TypeScript progettata per aiutare le persone a trovare i loro bonus. Questo progetto include la gestione di cittadini, startup e incentivi.

## Struttura del Progetto

.gitignore .vscode/ settings.json eslint.config.mjs index.todo package.json README.md src/ app.ts classes/ Cittadino.ts Incentivo.ts Startup.ts interfaces/ ICittadino.ts IIncentivo.ts IStartup.ts tsconfig.json

## Installazione

1. Clona il repository:
    ```sh
    git clone https://github.com/ViorelsS/TS_Bonny.git
    ```
2. Installa le dipendenze:
    ```sh
    npm install
    ```

## Utilizzo

Per avviare l'applicazione, esegui il comando:

```sh
npm start
```

Struttura del Codice
src/app.ts
Il file principale dell'applicazione. Qui vengono creati gli oggetti Cittadino, Startup e Incentivo e vengono eseguite le operazioni principali.

src/classes/Cittadino.ts
Definisce la classe Cittadino che implementa l'interfaccia ICittadino.

src/classes/Incentivo.ts
Definisce la classe Incentivo che implementa l'interfaccia IIncentivo.

src/classes/Startup.ts
Definisce la classe Startup che implementa l'interfaccia IStartup.

src/interfaces/ICittadino.ts
Definisce l'interfaccia ICittadino.

src/interfaces/IIncentivo.ts
Definisce l'interfaccia IIncentivo.

src/interfaces/IStartup.ts
Definisce l'interfaccia IStartup.

## Script Disponibili

`sh npm start`

Avvia l'applicazione utilizzando ts-node.

`sh npm run build`Compila il progetto TypeScript.

## Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue e pull request per migliorare il progetto.
