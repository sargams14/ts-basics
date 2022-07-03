# ts-basics

> **Sample Typescript Project for Learning**

### How to get started with creating a basic TS project?

- Create a directory ts-basics in your desired location through terminal or command prompt.
  `mkdir ts-basics`

- Open ts-basics folder in your preferred IDE. I prefer **Visual Studio Code** for TypeScript.
  If you have node installed, run: `npm init -y` in terminal.
  If you have yarn, run `yarn init -y`

  This will create package.json
  I use npm, so will be writing the next commands with npm. If you are using yarn, please substitute npm with yarn.
  
- Create file **basics.ts** inside **ts-basics** folder.
```sh
npm add typescript -D
```
This creates a package-lock.json file in developer mode.
```sh
npm add ts-node -D
```
This adds node_modules to the project.
```sh
npx tsc --init
```
Tsc is TypeScipt compiler. It adds a tsconfig.json file in the project.


And finally, to run it:
```sh
npx ts-node <filename>
``` 
  In our case, filename would be **basics.ts**
