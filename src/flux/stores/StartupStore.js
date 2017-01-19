import riot from 'riot'

export default class StartupStore {

    constructor() {
        var self = this

        new riot.observable(self)

        self.startups = [
            {name: '3 Heroes Studio', coords: {lat: 44.8060856, lng: 20.4778164}, logo: '/assets/images/startups/3heroesstudio.png'},
            {name: '012LAB', coords: {lat: 44.8060856, lng: 20.4778164}, logo: '/assets/images/startups/012LAB.png'},
            {name: 'EON+', coords: {lat: 44.8036448, lng: 20.502795}, logo: '/assets/images/startups/eonplus.png'},
            {name: 'Honorarci', coords: {lat: 44.8036448, lng: 20.502795}, logo: '/assets/images/startups/honorarci.png'},
            {name: 'mBrain Train', coords: {lat: 44.8060856, lng: 20.4778164}, logo: '/assets/images/startups/mbraintrain.png'},
            {name: 'Navitas Labs', coords: {lat: 44.8052902, lng: 20.5012597}, logo: '/assets/images/startups/navitas.png'},
            {name: 'Neopix', coords: {lat: 44.8060856, lng: 20.4778164}, logo: '/assets/images/startups/Neopix.jpg'},
            {name: 'Nordeus', coords: {lat: 44.8221971, lng: 20.4167819}, logo: '/assets/images/startups/nordeus.png'},
            {name: 'Strawberry Energy', coords: {lat: 44.8060856, lng: 20.4778164}, logo: '/assets/images/startups/strawberryenergy.png'},
            {name: 'Teso', coords: {lat: 44.8120313, lng: 20.4699723}, logo: '/assets/images/startups/teso.png'},
            {name: 'Veritek', coords: {lat: 44.8132756, lng: 20.3905217}, logo: '/assets/images/startups/veritek.png'},
        ]

        self.on('startup:fetch', function () {
            // call api and get data
            self.trigger('startup:changed', self.startups)
        })
    }
}
