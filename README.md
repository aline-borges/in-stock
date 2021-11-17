
![javascript-badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![amazon-badge](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)![react-badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<p align="center"> 
  <img src="https://raw.githubusercontent.com/aline-borges/in-stock/cb354a8b81c710a8160c49a69453aa6dc89c3df8/src/assets/images/logo.svg?token=AHJ6VFJATUWVAYJJDD74M43BSSXHS">
</p>



### The Application

The service of this site is an inventory control where the user can CRUD any product. 

The user must:

- Add a product;
- Change the quantity of the product;
- Delete a product;
- Search a product by name;

### Entity
##### Product
The product must consist of the following information:

| Product |
| ------ | 
| Identifier (number) |
| Name (string) | 
| Quantity in stock (number) |
| Unit value (number) |
| Total value (number) |

List of technologies used in this application:
- [React] - Library
- [JavaScript] - Language

### React
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

### JavaScript
JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.

## Libraries
Table with the most important libraries in the project

| Dependency | Documentation |
| ------ | ------ |
| React | [aqui](https://pt-br.reactjs.org/)  |
| JavaScript | [aqui](https://www.javascript.com/)  |

### Available Scripts

In the project directory, you can run:

```sh
yarn start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
yarn test   
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

To commit, run the command:
```sh
git cz 
```

To debug, run the command:
```sh
 npx react-devtools 
```
