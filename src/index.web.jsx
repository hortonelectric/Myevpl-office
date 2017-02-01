import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createStore from './lib/configureStore'
import Router from './lib/routes'
import { AppContainer } from 'react-hot-loader'

const store = createStore()
const rootElement = document.getElementById('app')

render((
	<AppContainer key={Math.random()}>
		<Provider store={store}>
			<Router />
		</Provider>
	</AppContainer>
), rootElement)

if (module.hot) {
  module.hot.accept("./lib/routes", () => {
     const NextRouter = require("./lib/routes").default
     render((
		<AppContainer>
			<Provider store={store}>
				<NextRouter />
			</Provider>
		</AppContainer>
	), rootElement)
   })
}
