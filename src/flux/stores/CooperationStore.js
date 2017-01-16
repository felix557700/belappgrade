import riot from 'riot'

export default class CooperationStore {

    constructor() {
        var self = this

        new riot.observable(self)

        self.cooperations = [
            {name: 'Startit centar', coords: {lat: 44.8072273, lng: 20.4559043}},
            {name: 'D – spot Arhitektonski Centar', coords: {lat: 44.8167617, lng: 20.4653833}},
            {name: 'Galerija 12 Hub 1', coords: {lat: 44.8139746, lng: 20.4515381}},
            {name: 'ICT Hub', coords: {lat: 44.8036448, lng: 20.502795}},
            {name: 'Impact Hub', coords: {lat: 44.8156678, lng: 20.4628565}},
            {name: 'Nova Iskra', coords: {lat: 44.8093621, lng: 20.4583919}}
        ]

        self.on('cooperation:fetch', function () {
            // call api and get data
            self.trigger('cooperation:changed', self.cooperations)
        })
    }
}
