## How to install:
Clone it from Github

### Pre-Install (LuciadRIA from private npm repository) 
Make sure you have recent LuciadRIA packages available in a private npm repository. If you already have a private repository just make the LuciadRIA packages are available. Make sure your private npm, repository is reachavle from this npm project, you can achieve this by modifying your local or glabal .npmrc

If you currently don't have a private npm repository, you could deploy Verdaccio (https://www.npmjs.com/package/verdaccio), a zero configuation and easy to use option. Then deploy your LuciadRIA packages in there. Check the verdaccio website for more info.

### Install dependencies
Intall all the project dependencies
```
npm install
```
## To use
### Start development
```
npm start
```
### Build for production
```
npm run build
```
