import riot from 'riot'

export default class StartupStore {

    constructor() {
        const store = this

        new riot.observable(store)

        store.startups = [
            {
                name: '3 Heroes Studio',
                logo: '/assets/images/startups/3heroesstudio.png',
                coords: {lat: 44.8060856, lng: 20.4778164},
                info: '3 Heroes Studio je mali programerski studio sa sedištem u Beogradu, Srbija . Mi smo strastveni igrači koji realizuju njihovo dete san u stvaranju i vođenju kompanija za igre . Mi stvaramo igre , ali smo isto tako Autsorsing za druge kompanije koje nemaju vremena ili veštine za stvaranje mnogih drugih softverskih proizvoda koji su im potrebni . Naš tim je posvećen u ispopunjavanju svakog zadatka koji  imaju pred njima na vreme i sa najboljim kvalitetom.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.3heroesstudio.com'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/3HeroesStudio'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/3heroesstudio'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/3-heroes-studio'
                    }
                ],
                address: 'Ruzveltova 1a',
                city: 'Beograd',
                email: 'office@3heroesstudio.com'
            },
            {
                name: '012LAB',
                logo: '/assets/images/startups/012LAB.png',
                coords: {lat: 44.8060856, lng: 20.4778164},
                info: '012LAB predstavlja tim stručnjaka i zaljubljenika u elektroniku koji žele ovu tehničku nauku da približe korisnicima svih uzrasta i nivoa znanja. U okviru 012LAB platforme okupljamo sve zainteresovane za bavljenje elektronikom, kako one koji već imaju značajno iskustvo, tako i one koji su potpuni početnici. Bavimo se popularizacijom i edukacijom u oblasti elektronike i robotike, ali i interesantnim praktičnim projektima, uključujući aktuelne platforme za realizaciju projekata i razvoj elektronskih proizvoda, kao što su Arduino, Raspberry Pi, BeagleBone i slični.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://012lab.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/012lab'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/012lab'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/groups/4921151/profile'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCyqiSd6r_26fetCF60PZlJg'
                    }
                ],
                address: 'Ruzveltova 1a',
                city: 'Beograd',
                email: 'info@012lab.rs'
            },
            {
                name: 'EON+',
                logo: '/assets/images/startups/eonplus.png',
                coords: {lat: 44.8036448, lng: 20.502795},
                info: 'Eon plus L.L.C. ( Ili jednostavno EON + ) je startap kompanija iz Beograda koja stvara i razvija softver i ekspertne sisteme za zaštitu životne sredine . Eon + takođe pruža stručne i savetodavne usluge u oblasti zaštite životne sredine i hemijskog inženjerstva.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.eon-plus.com'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/eon.plus.easy.environment/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/eon_plus'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/eon-'
                    }
                ],
                address: 'Veljka Dugoševića 54 Zgrada A3 II sprat',
                city: 'Beograd',
                email: 'contact@eon-plus.com'
            },
            {
                name: 'HONORARCI',
                logo: '/assets/images/startups/honorarci.png',
                coords: {lat: 44.8036448, lng: 20.502795},
                info: 'Sajt je nastao kao želja i potreba da se odgovori na rastući globalni trend samozaposlenih ljudi koji je sve prisutniji na tržištu Srbije. Srbija ima veliki broj nezaposlenih ljudi najrazličitijih zanimanja, znanja i veština sa jedne, kao i veliki broj pojedinaca i firmi kojima su potrebni radnici za honorarne poslove, sa druge strane. Mi želimo da omogućimo ljudima koji žele dodatno da zarade i da sami oglašavaju sebe i svoje usluge da to učine na najjednostavniji i najefikasniji način i tako se približe potencijalnim poslodavcima kojima trebaju njihove usluge.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.honorarci.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/honorarci/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/honorarcirs'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/honorarci-rs'
                    }
                ],
                address: '',
                email: ''
            },
            {
                name: 'mBrainTrain',
                logo: '/assets/images/startups/mbraintrain.png',
                coords: {lat: 44.8060856, lng: 20.4778164},
                info: 'mBrainTrain razvija potpuno mobilni, noseći uređaj za snimanje i analizu električnu aktivnost mozga. Ovo se završava period u kojem mozak Snimci su jedini privilegija visoko kontrolisanim laboratorijskom okruženju. Više nema potrebe za kabasti laboratorijsku opremu, mozak snimanje kod kuće postaje moguće. Naš SMARTING projekat razvija revolucionarni sistem koji omogućava korisnicima da kontrolišu svoje moždane signale u toku zabavni program obuke u cilju poboljšanja opšteg mozga kondiciju.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.mbraintrain.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/mBrainTrain'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/mbraintrain'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/mbraintrain'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCGtpku8Bixc3A2aUDxnjYWQ'
                    }
                ],
                address: 'Adresa: Ruzveltova 1a/ II',
                city: 'Beograd',
                email: 'info@mbraintrain.rs'
            },
            {
                name: 'Navitas Labs',
                logo: '/assets/images/startups/navitas.png',
                coords: {lat: 44.8052902, lng: 20.5012597},
                info: 'Navitas Labs DOO je start-up kompanija osnovana 2015. godine sa idejom da razvija visokotehnološke proizvode i usluge iz domena industrijske elektroenergetike i automatike. Putem jasno definisanih ciljeva, misije i vizije i uz upotrebu savremenih poslovnih modela organizacije i ponašanja, Navitas Labs DOO stremi da razvija svoj poslovni potencijal u skladu sa najnovijim naučnim i tehnološkim saznanjima kao i tržišnim potrebama i tendencijama. Želja osnivača je da ostvare održivu kompaniju koja bi svojim korisnicima i klijentima uvek pružala novu vrednost a zaposlenim i saradnicima omogućavala šansu da ožive svoje inovativne ideje uz marljivi rad.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.navitas.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/navitaslabs/photos'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/navitaslabs'
                    }
                ],
                address: 'Veljka Dugoševića 54',
                city: 'Beograd',
                email: 'office@navitas.rs'
            },
            {
                name: 'Neopix',
                logo: '/assets/images/startups/Neopix.jpg',
                coords: {lat: 44.8060856, lng: 20.4778164},
                info: 'Veruju u u kvalitet bez kompromisa, specijalizovani su za promovisanje niša i luksuznih brendova, proizvoda i usluga. Neopix nudi brendiranje, dizajn i razvoj usluga sa bazom klijenata u rasponu od početnika u biznisu do uspostavljenih organizacija.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://weareneopix.com/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/neopixrs/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/neopixrs'
                    },
                    {
                        type: 'instagram',
                        href: 'https://www.instagram.com/explore/tags/neopix/'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/neopix'
                    }
                ],
                address: 'Ruzveltova 1a',
                city: 'Beograd',
                email: 'office@neopix.rs',
                contact: '+381 60 65 44 564'
            },
            {
                name: 'Nordeus',
                logo: '/assets/images/startups/nordeus.png',
                coords: {lat: 44.8221971, lng: 20.4167819},
                info: 'Mi smo vodeća i nagrađivana tehnološka kompanija, najpopularnija za društvene sportske video igre na svetu. U Nordeusu, naš cilj je da pruži besprekorno igračko iskustvo za milione ljudi, bez obzira na uređaja koje koriste. Zato smo u objavi visokog kvaliteta, besplatne igre koje kombinuju vrhunske tehnološke inovacije.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://nordeus.com'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/nordeus/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/nordeus'
                    },
                    {
                        type: 'instagram',
                        href: 'https://www.instagram.com/lifeatnordeus/'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/nordeus'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCph-kgpRdu-BQoV6-Jz7rdA'
                    }
                ],
                address: 'Bulevar Mihajla Pupina 165v',
                city: 'Beograd',
                email: 'contact@nordeus.com'
            },
            {
                name: 'Strawberry Energy',
                logo: '/assets/images/startups/strawberryenergy.png',
                coords: {lat: 44.8060856, lng: 20.4778164},
                info: 'Mi razvijamo zelene i pametne urbane koje obezbađuju ljudima energiju, povezivanje i lokalne informacije na javnim mestima. Dovodeći IOT na otvorenom javnom prostoru oko 400.000 korisnika, nastojimo poboljšanju gradskog života. Mi smo pioniri na tržištu javnih stanica za punjenje prenosivih uređaja. Napravili smo prvi na svetu solarnu stanicu za punjenje mobilnih telefona.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://senergy.rs/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/strawberryenergy'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/e_strawberry'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/strawberry-energy'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCnwLmvRtFm42BMKOuwGhSWw'
                    }
                ],
                address: 'Ruzveltova 1a',
                city: 'Beograd',
                email: 'jagodica@senergi.rs',
                contact: '+ 381 11 3370950'
            },
            {
                name: 'TESO',
                logo: '/assets/images/startups/teso.png',
                coords: {lat: 44.8120313, lng: 20.4699723},
                info: 'Mi smo elektrotehčka dizajn kompanja sa klijentima i partnerima širom sveta koje su dobro poznate međunarodne IT kompanije. Naši inženjeri imaju priliku da rade sa najnovijim tehnologijama, uključujući ugrađene sisteme, digitalne obrade signala, softverskog inženjeringa, itd Kao deo našeg inženjerskog tima, imaće priliku da učestvuju u svim aspektima razvoja proizvoda, koji uključuju istraživanje i razvoj potpuno funkcionalnih proizvoda.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.teso.rs'
                    }
                ],
                address: 'Takovska 35',
                city: 'Beograd',
                email: 'office@teso.rs',
                contact: '+381 11 3341154'
            },
            {
                name: 'Veritek',
                logo: '/assets/images/startups/veritek.png',
                coords: {lat: 44.8132756, lng: 20.3905217},
                info: 'Stvorite svoje podatke! Veritek tim je posvećen i nudi ekskluzivne usluge širom sveta. Imamo viziju za svaku vladu i veliku korporaciju u svetu koje  koriste naše usluge. Mogućim klijentima je zagarantovana ekskluzivnost u okviru svojih zemalja ili globalno ekskluzivitet u svojoj oblasti rada. Razvili smo matematički alat koji je sposoban da analizira i upućuje ogromnu količinu podataka (Big Data) u realnom vremenu. Mi ne koristimo veštačku inteligenciju. Uspeli smo da stvorimo prvu matematičku inteligenciju svoje vrste.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.veritek-global.com'
                    }
                ],
                address: '',
                email: 'office@veritek-global.com',
                contact: '+381 62 9609779'
            }
        ]

        store.on('startup:fetch', function () {
            // call api and get data
            store.trigger('startup:changed', store.startups)
        })
    }
}
