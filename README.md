# React X Express Server Side Render Tutorial

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preparation

1. Clone this repo.\
   `git clone https://github.com/Dragon-Huang0403/react-express-ssr-tutorial.git`
2. Install dependency.\
   `npm install`

## Goal

- To see server side render react with express server to be seen in localhost:3001

## Steps

1. Observe files.

   - webpack.server.js for bundling express app.
   - src/common, react app files.
   - src/server, express app.

2. Run `npm run all`, to start express server in localhost:3001.

3. Display build/index.html in localhost:3001.

4. Use react-dom/server method, [renderToString](https://reactjs.org/docs/react-dom-server.html), to render App.js only.

5. Try to render whole html(build/index.html).

   - Hint: try `fs.readFile(filePath, 'utf8', callback);`

6. [Hydrate](https://reactjs.org/docs/react-dom-client.html#hydrateroot) App.

7. Well done!!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the client side.\

### `npm run all`

To run express server.\

### `npm run watch`

To auto build react script.\
