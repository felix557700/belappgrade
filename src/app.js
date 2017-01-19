import riot from 'riot'
import RiotControl from 'RiotControl'
import StartupStore from './flux/stores/StartupStore'
import CooperationStore from './flux/stores/CooperationStore'
import './components/home/home.tag.html'
import './components/menu/menu.tag.html'
import './components/menu/company-links/company-links.html'
import './components/menu/culture-links/culture-links.html'
import './components/google-maps/google-maps.tag.html'
import './components/tooltip/tooltip.html'

function initApp() {
    let startupStore = new StartupStore()
    RiotControl.addObserver('startup', startupStore)

    let cooperationStore = new CooperationStore()
    RiotControl.addObserver('cooperation', cooperationStore)

    riot.mount('*')
}

window.onload = function () {
    initApp()
}
