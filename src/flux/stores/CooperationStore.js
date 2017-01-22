import riot from 'riot'

export default class CooperationStore {

    constructor() {
        var store = this

        new riot.observable(store)

        store.cooperations = [
            {
                name: 'D – spot Arhitektonski Centar',
                logo: '/assets/images/cooperation/dspot.png',
                coords: {lat: 44.8167617, lng: 20.4653833},
                info: 'D-spot je prostor za rad i profesionalni razvoj mladih arhitekata.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.d-spot.rs/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/D-spot-Arhitektonski-Centar-718409834970167/'
                    }
                ],
                address: 'Bulevar despota Stefana 36',
                city: 'Beograd',
                email: 'office@d-spot.rs',
                contact: '+381 114077360'
            },
            {
                name: 'Galerija 12 Hub',
                logo: '/assets/images/cooperation/12hub.png',
                coords: {lat: 44.8139746, lng: 20.4515381},
                info: `Galerija12 HUB (G12HUB) je centar za umetnost i tehnologiju posvećen promociji i razvoju intermedijske umetnosti i performansa. HUB ima za cilj da alate za digitalno istraživanje i produkciju učini dostupnim i da podstakne i promoviše eksperiment na granici umetnosti, nauke i živog izvođenja. Struktura programa G12HUB kombinuje izložbe, performance, live stream događaje, digitalne sustrete, dijaloge, debate, prezentacije i radionice sa ciljem da promoviše među sektorski i interdisciplinarni pristup umetničkoj produkciji i interpretaciji. G12HUB teži da razvije saradnju sa širokim krugom relevantnih međunarnodnih institucija i pojedinaca.`,
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.g12hub.com/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/G12Hub/'
                    },
                    {
                        type: 'vimeo',
                        href: 'https://vimeo.com/g12hub'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/g12hub'
                    }
                ],
                address: 'Karađorđeva 59',
                city: 'Beograd',
                email: 'info@g12hub.com',
                contact: '+381 60 442 5544'
            },
            {
                name: 'ICT Hub',
                logo: '/assets/images/cooperation/icthub.png',
                coords: {lat: 44.8036448, lng: 20.502795},
                info: `ICT Hub je centar za razvoj tehnološkog preduzetništva. ICT Hub ima za cilj da pomogne tehnološke preduzetnike da uspešno razviju svoj proizvod i omogući prelazak u fazu finansiranja i izlaska na tržište. Mladim ljudima pružamo moderan prostor za rad i punu mentorsku, tehničku i infrastrukturnu podršku da svoje ideje pretvore u uspešan biznis.
ICT Hub je upisan u Registar inovacione delatnosti Ministarstva prosvete, nauke i tehnološkog razvoja kao organizacija za infrastrukturnu podršku inovacionoj delatnosti u statusu poslovno-tehnološki inkubator.
ICT Hub je „no equity incubator“ u kom sva intelektualna svojina nastala u ICT Hub-u ostaje u apsolutnom vlasništvu njegovih korisnika.`,
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.icthub.rs/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/ICTHubBgd'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/ICTHubBgd'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/ict-hub'
                    }
                ],
                address: 'Naučno tehnološki park Veljka Dugoševića 54',
                city: 'Beograd',
                email: 'info@icthub.rs',
                contact: '+381 11 411 8881'
            },
            {
                name: 'Impact Hub',
                logo: '/assets/images/cooperation/impacthub.png',
                coords: {lat: 44.8156678, lng: 20.4628565},
                info: 'Impact Hub postoji u više od 49 zemalja sveta, i predstavlja inspirativno radno okruženje po principu fleksibilnog korišćenja coworking prostora i iznajmljivanja sala za konferencije i radionice. Pored multufunkcionalnog prostora i društvene mreže, Impact Hub članovi takođe imaju pristup različitim programima kroz koje se inovatori, preduzetnici, "free-lanceri" informišu, inspirišu, povezuju i šire svoj uspeh širom sveta.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://belgrade.impacthub.net/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/ImpactHubBelgrade'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/ImpactHubBGD'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/user/ICTHub/videos'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/company/impact-hub-belgrade?trk=top_nav_home'
                    }
                ],
                address: 'Makedonska 21',
                city: 'Beograd',
                email: 'belgrade@impacthub.net',
                contact: '+381 11 408 2550'
            },
            {
                name: 'Nova Iskra',
                logo: '/assets/images/cooperation/novaiskra.png',
                coords: {lat: 44.8093621, lng: 20.4583919},
                info: `Nova iskra je jedinstveno mesto susreta vodećih kreativnih profesionalaca, i kompanija otvorenih ka inovativnim pristupima poslovanju i razvoju proizvoda.
Mi upravljamo dizajnom i primenjujemo inovacije u cilju ostvarenja novih vrednosti u sferama kreativnog poslovanja, edukacije, društvenog razvoja i jačanja lokalnih zajednica.
Naša svestrana platforma koristi proces dizajna kao polazište za razvoj ideja, projekata i usluga koje rešavaju probleme, a razvijaju ih jedinstveni, transdisciplinrani timovi sačinjeni od vodećih stručnjaka, profesionalaca i kreativaca.
Povezujemo kreativce, inovatore, kompanije I preduzetnike.`,
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.novaiskra.com/en'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/novaiskra'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/novaiskra'
                    },
                    {
                        type: 'instagram',
                        href: 'https://www.instagram.com/novaiskra/'
                    },
                    {
                        type: 'vimeo',
                        href: 'https://vimeo.com/novaiskra'
                    }
                ],
                address: 'Gavrila Principa 43',
                city: 'Beograd',
                email: 'office@novaiskra.com',
                contact: '+381 11 4051 897'
            },
            {
                name: 'Startit centar',
                logo: '/assets/images/cooperation/startit.png',
                coords: {lat: 44.8072273, lng: 20.4559043},
                info: `Centar znanja
Kroz naše obrazovne programe, konferencije i festivale prošlo je više od 12.000 ljudi. U Centru ćemo razviti mnoge nove obrazovne programe ali i pružiti prostor drugima koji žele da razviju sopstvene. Bogata biblioteka Startit Centra će biti besplatno dostupna celoj zajednici.
Startit Centar nudi prostor za timove koji traže dobre (i povoljne) uslove za rad, priliku da upoznaju sjajne ljude, podršku za razvoj svojih proizvoda i biznisa i atmosferu koja podstiče ambiciju i inovaciju.`,
                links: [
                    {
                        type: 'globe',
                        href: 'http://startit.rs/centar/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/startitrs'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/startitrs'
                    }
                ],
                address: 'Savska 5',
                city: 'Beograd',
                email: 'kontakt@startit.rs',
                contact: '+38164 2970767'
            }
        ]

        store.on('cooperation:fetch', function () {
            // call api and get data
            store.trigger('cooperation:changed', store.cooperations)
        })
    }
}
