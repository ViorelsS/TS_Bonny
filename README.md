# 🎉 TS Bonny 🎉

**TS Bonny** is a TypeScript application designed to manage citizens, startups, and incentives. The main goal of the project is to facilitate the assignment of incentives to innovative, sustainable, and socially inclusive startups, helping citizens participate in the activities of these startups.

## 🚀 Project Structure

The project file structure is as follows:

```
.gitignore
.vscode/
  settings.json
eslint.config.mjs
index.todo
package.json
README.md
src/
  app.ts
  classes/
    Cittadino.ts
    Incentivo.ts
    Startup.ts
  interfaces/
    ICittadino.ts
    IIncentivo.ts
    IStartup.ts
tsconfig.json
```

## 🛠️ Installation

To install and configure the application, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/ViorelsS/TS_Bonny.git
    ```

2. Navigate to the project folder:

    ```sh
    cd TS_Bonny
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## 🏃‍♂️ Usage

To start the application, run the command:

```sh
npm start
```

The application uses `ts-node` to execute TypeScript code without manual compilation.

## 📂 Code Structure

-   **src/app.ts**: The main file of the application, where instances of `Cittadino`, `Startup`, and `Incentivo` are created, and main operations are carried out.
-   **src/classes/Cittadino.ts**: Defines the `Cittadino` class, which implements the `ICittadino` interface.
-   **src/classes/Incentivo.ts**: Defines the `Incentivo` class, which implements the `IIncentivo` interface.
-   **src/classes/Startup.ts**: Defines the `Startup` class, which implements the `IStartup` interface.
-   **src/interfaces/ICittadino.ts**: Defines the interface for the `Cittadino` model.
-   **src/interfaces/IIncentivo.ts**: Defines the interface for the `Incentivo` model.
-   **src/interfaces/IStartup.ts**: Defines the interface for the `Startup` model.

## 📜 Features

The application manages incentives and interactions between citizens and startups, using classes and interfaces to ensure a clear separation of responsibilities.

### Interfaces

-   **ICittadino**: Defines the properties of a citizen (name, surname, age, sports interests) and includes the `partecipaAttività()` method, which allows a citizen to participate in a startup's activities.
-   **IIncentivo**: Defines the properties of an incentive (ID, description, value, criteria) and includes the `assegnaAStartup()` method, which assigns the incentive to a startup.
-   **IStartup**: Defines the properties of a startup (name, sector, description, offer) and includes the `riceviIncentivo()` method, which allows a startup to receive an incentive.

### Classes

-   **Startup**: Implements the `IStartup` interface. Defines the behavior for receiving an incentive and logging the information.
-   **Incentivo**: Implements the `IIncentivo` interface. Defines the behavior for assigning an incentive to a startup and logging the information.
-   **Cittadino**: Implements the `ICittadino` interface. Defines the behavior for participating in a startup's activities and logging the information.

### Usage Examples

Here are some examples of how the classes are used in the project:

```typescript
const startupA = new Startup(
    'Bending Spoons',
    'mobile games',
    'Tech company specialized in app development',
    'Mobile apps - SaaS - Data Analytics'
);
const incentivoInnovazione = new Incentivo(
    'IT01',
    'Incentive for innovative tech solutions',
    5000,
    ['Less than 5 years', 'Prototype', 'Scalability']
);
const cittadino1 = new Cittadino('Mario', 'Rossi', 30, ['soccer', 'travel']);

startupA.riceviIncentivo(incentivoInnovazione);
cittadino1.partecipaAttività(startupA);
```

## 🌐 Demo on CodePen

You can view a preview of the project on CodePen at the following link:

[TS Bonny on CodePen](https://codepen.io/viorelss/pen/oNKxWWm?editors=1112)

## 🤝 Contributions

Contributions to the project are welcome! If you'd like to contribute, feel free to open an **issue** to report a bug or a **pull request** to propose improvements or new features.
