import Dispatcher from '../dispatcher/AppDispatcher.js'
import Constants from '../constants/AppConstants.js'
import { EventEmitter } from 'events'


const EVENTS = {
	'CHANGE_STATE' : 'CHANGE_STATE'
}









Dispatcher.register( function(action){
	switch(action.type){

		// login
		/*case Constants.CHECK_LOGIN : {
			State.loading = true
			AppStore.emitChange()
			break;
		}*/

	}
})	


const AppStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener(f){
		this.on(Events.CHANGE_STATE, f)
	},

	removeChangeListener(f){
		this.removeListener(Events.CHANGE_STATE, f)
	},

	emitChange(){
		this.emit(Events.CHANGE_STATE)
	},
})


export default AppStore