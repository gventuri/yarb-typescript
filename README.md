# Yet another react boilerplate

Here we are... Yet another react boilerplate! There are a tons out there, so why did I do? Mostly for educational purposed. I'm sure we can always learn by doing. This helped me to understand more deeply how a react application works.
Finally, I needed to to this in order to write down some best practises for my team and I.

## Stack

This boilerplate is using the following libraries/frameworks:

- React
- Redux (using [Ducks file structure](https://github.com/erikras/ducks-modular-redux) for the redux part)
- Typescript
- Eslint
- Prettier

## Best practises

Please, before you start working on the project, read the best practises. This will help you and the team to scale every project with the right approach.

### Styling

We use Sass (SCSS) for giving super-powers to css. Also, we use css modules to create BEM components and for adding "scopes" to each component style.

### Naming convention

- PascalCase for component file name and folder name
- Indicate if my components are a container or a view. Containers will usually be class components that contain state and logic, whereas components will house the actual content, styling and receive props from container. Example:
  - `MyComponent.container.js`
  - `MyComponent.view.js`
  - `MyComponent.scss`
- lowerCamelCase for Higher Order Component file and folder name
- lowercase for all other root directory folders. For example: `src`, `components`, `assets`

### Destructure all the objects

```
<label>{ this.props.foo }</label> // wrong
const { foo } = this.props;
<label>{ foo }</label>            // right

const someFunction = (arguments) =>
  this.setState({
   foo: arguments.bar
}); 	                         // wrong

const someFunction = ({ baz }) =>
  this.setState({
    foo: baz
});         	                // right
```

### Use arrow functions

Arrow functions help to contextualize the code. Also, they are awesome :) Team members should definitely use them.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# yarb
