import riot from 'riot'

export default class JobOffersStore {

    constructor() {
        const store = this

        new riot.observable(store)

        store.offers = [
            {
                name: '3 Heroes Studio',
                logo: '/assets/images/startups/3heroesstudio.png',
                positions: [
                    'internships'
                ],
            },
            {
                name: 'EON+',
                logo: '/assets/images/startups/eonplus.png',
                positions: [
                ],
            },
            {
                name: 'mBrainTrain',
                logo: '/assets/images/startups/mbraintrain.png',
                positions: [
                ],
            },
            {
                name: 'Nordeus',
                logo: '/assets/images/startups/nordeus.png',
                positions: [
                ],
            },
            {
                name: 'Strawberry Energy',
                logo: '/assets/images/startups/strawberryenergy.png',
                positions: [
                ],
            },
        ]

        store.on('offers:fetch', function () {
            // call api and get data
            store.trigger('offers:changed', store.offers)
        })
    }
}
