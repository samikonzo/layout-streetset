import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
/*import AppActions from '../flux/actions/AppActions.js'
import AppStore from '../flux/stores/AppStore.js'*/

import './App.less'

class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {}

		this._historyObjGrabber = this._historyObjGrabber.bind(this)
	}

	_historyObjGrabber(elem){
		if(this.state._historyObj) return
		
		if(elem && elem.context && elem.context.router && elem.context.router.history){
			var _historyObj = elem.context.router.history
			//AppActions.pageSetHistoryObj(_historyObj)
		}
	}

	render(){
		return (
			<div> 
				<Switch> 
					<Route exact path='/'  />
					<Route path='/contacts' />
					<Route path='/page' />
				</Switch>

				
				{/* historyGrabber renders once */}
				{!this.state._historyObj && (
					<Link to='/' ref={elem => {this._historyObjGrabber(elem)}}/>
				)}
			</div>
		)
	}
}




export default App