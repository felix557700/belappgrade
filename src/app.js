import riot from 'riot'
import RiotControl from 'RiotControl'
import StartupStore from './flux/stores/StartupStore'
import CooperationStore from './flux/stores/CooperationStore'
import JobOffersStore from './flux/stores/JobOffersStore'
import './components/home/home.tag.html'
import './components/menu/menu.tag.html'
import './components/menu/company-links/company-links.tag.html'
import './components/menu/culture-links/culture-links.tag.html'
import './components/menu/company-info/company-info.tag.html'
import './components/google-maps/google-maps.tag.html'
import './components/tooltip/tooltip.tag.html'
import './components/map-logo/map-logo.tag.html'
import './components/job-offers/job-offers.tag.html'

function initApp() {
    let startupStore = new StartupStore()
    RiotControl.addObserver('startup', startupStore)

    let cooperationStore = new CooperationStore()
    RiotControl.addObserver('cooperation', cooperationStore)

    let jobOffersStore = new JobOffersStore()
    RiotControl.addObserver('offers', jobOffersStore)

    riot.mount('*')
}

window.onload = function () {
    initApp()
}
