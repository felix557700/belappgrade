import riot from 'riot'

export default class CooperationStore {

    constructor() {
        var self = this

        new riot.observable(self)

        self.cooperations = [
            {name: 'Startit centar', coords: {lat: 44.8072273, lng: 20.4559043},  logo: '/assets/images/cooperation/startit.png'},
            {name: 'D – spot Arhitektonski Centar', coords: {lat: 44.8167617, lng: 20.4653833},  logo: '/assets/images/cooperation/dspot.png'},
            {name: 'Galerija 12 Hub 1', coords: {lat: 44.8139746, lng: 20.4515381},  logo: '/assets/images/cooperation/12hub.png'},
            {name: 'ICT Hub', coords: {lat: 44.8036448, lng: 20.502795},  logo: '/assets/images/cooperation/icthub.png'},
            {name: 'Impact Hub', coords: {lat: 44.8156678, lng: 20.4628565},  logo: '/assets/images/cooperation/impacthub.png'},
            {name: 'Nova Iskra', coords: {lat: 44.8093621, lng: 20.4583919},  logo: '/assets/images/cooperation/novaiskra.png'}
        ]

        self.on('cooperation:fetch', function () {
            // call api and get data
            self.trigger('cooperation:changed', self.cooperations)
        })
    }
}
