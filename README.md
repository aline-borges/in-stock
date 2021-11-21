<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript-badge"/>
  <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="amazon-badge"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-badge"/>
</p>

<p align="center">
  <img src="https://www.unicarioca.edu.br/sites/all/themes/unicarioca/imgs/logo-unicarioca.png" alt="unicarioca-logo"/>
</p>

<h1 align="center">
  TRABALHO DE CONCLUSÃO DE CURSO EM CIÊNCIA DA COMPUTAÇÃO
</h1>

<h2 align="center">
  Tema: Cloud Computing com foco em SaaS
</h2>

<h3 align="center">
  Centro Universitário Carioca - UniCarioca
</h3>

#
#
| Alunos | 
| ------ | 
| Alan Martins Proença | 
| Aline Pires Borges | 

### A Aplicação


<p align="center">
  <img src="https://github.com/aline-borges/in-stock/blob/master/src/assets/images/logo.png?raw=true" alt="logo-in-stock"/>
</p>

O serviço deste site é um controle de estoque onde o usuário pode cadastrar um produto, deletar um produto, alterar a quantidade do estoque, pesquisar o produto pelo nome e ordenar pelo campo de tabela.

O usuário deve:

- Cadastrar um produto;
- Alterar a quantidade do produto;
- Remover um produto;
- Procurar um produto pelo nome;

### Entidade
##### Produto
O produto deve consistir nas seguintes informações:

| Produto |
| ------ | 
| Identificador (string) |
| Nome (string) | 
| Quantidade em stock (int) |
| Valor unitário (float) |
| Valor total (float) |

Lista de tecnologias utilizadas nesta aplicação:
- [React] - Biblioteca
- [JavaScript] - Linguagem

### React
React é uma biblioteca JavaScript de front-end gratuita e de código aberto para a construção de interfaces de utilizador baseadas em componentes UI.

### JavaScript
JavaScript (frequentemente abreviado para JS) é uma linguagem leve, interpretada, orientada para objectos com funções de primeira classe, e é mais conhecida como a linguagem de script para páginas Web, mas também é utilizada em muitos ambientes não navegáveis.

## Bibliotecas
Tabela com as bibliotecas mais importantes do projeto:

| Dependência | Documentação |
| ------ | ------ |
| React | [aqui](https://pt-br.reactjs.org/) | [aqui](https://pt-br.reactjs.org/)
| JavaScript | [aqui](https://www.javascript.com/) | [aqui](https://www.javascript.com/)

### Scripts disponíveis

No diretório, rodar o comando:

```sh
yarn start 
```

Executa a aplicação no modo de desenvolvimento.
Abrir [http://localhost:3000](http://localhost:3000) para o visualizar no browser.

A página será recarregada se fizer edições.

```sh
yarn test   
```

Lança o test runner no modo de relógio interativo.

Ver a seção sobre [testes em execução](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

```sh
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


```sh
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Para se fazer um commit, executar o comando:
```sh
git cz 
```

Para depurar, executar o comando:
```sh
 npx react-devtools 
```
