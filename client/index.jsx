import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, IndexRoute, Route } from 'react-router-dom'
import App from './containers/App.jsx'

import './style.less'

ReactDom.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter> 

	, document.getElementById('app')
)