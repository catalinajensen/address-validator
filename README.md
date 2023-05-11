# Address Validator

A simple address validator app using React and Typescript that allows users to pick a street name and building number from any nordic country, while displaying the coordinates, if available.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architectural choices

This source folder has the following structure:

### `src/api`

Contains the axios call to the API used for fetching addresses.

### `src/components`

Contains the components used for choosing the country and the street number, as well as search and select the street name.

### `src/containers`

Contains the state where the list of valid streets and street numbers are stored. The container manages its state using React Hooks; and React Query for managing the API calls. As the scope of the application is very limited, other state managemnt libraries such as Redux were not necessary; but it could be useful once multiple containers are introduced and shared state becomes available.

### `src/mocks`

Contains mocks that can be used for unit tests. The unit tests are run using Enzyme and Jest, using react-testing-library for visializing the rendered components.

## Future improvements

- Expand the functionality to include floor numbers and other address related data that is available via the API
- Improve the UI with better choices of colors, patterns and icons
- Add validation for missing data from the API
- Add keyboard navigation
- Expand suit of tests to cover all functionality

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
