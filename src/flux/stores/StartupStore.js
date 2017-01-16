import riot from 'riot'

export default class StartupStore {

    constructor() {
        var self = this

        new riot.observable(self)

        self.startups = [
            {name: '3 Heroes Studio', coords: {lat: 44.8060856, lng: 20.4778164}},
            {name: '012LAB', coords: {lat: 44.8060856, lng: 20.4778164}},
            {name: 'EON+', coords: {lat: 44.8036448, lng: 20.502795}},
            {name: 'Honorarci', coords: {lat: 44.8036448, lng: 20.502795}},
            {name: 'mBrain Train', coords: {lat: 44.8060856, lng: 20.4778164}},
            {name: 'Navitas Labs', coords: {lat: 44.8052902, lng: 20.5012597}},
            {name: 'Neopix', coords: {lat: 44.8060856, lng: 20.4778164}},
            {name: 'Nordeus', coords: {lat: 44.8221971, lng: 20.4167819}},
            {name: 'Strawberry Energy', coords: {lat: 44.8060856, lng: 20.4778164}},
            {name: 'Teso', coords: {lat: 44.8120313, lng: 20.4699723}},
            {name: 'Veritek', coords: {lat: 44.8132756, lng: 20.3905217}},
        ]

        self.on('startup:fetch', function () {

            console.log('startup fetch')
            // call api and get data
            self.trigger('startup:changed', self.startups)
        })
    }
}
