import riot from 'riot'

export default class CulturalPlacesStore {

    constructor() {
        const store = this

        new riot.observable(store)

        store.curturalPlaces = [
            {
                name: 'GUARNERIUS',
                logo: '/assets/images/culturalplaces/guarnerius.png',
                coords: {lat: 44.817788, lng: 20.46758},
                info: 'GUARNERIUS, Centar lepih umetnosti Jovana Kolundžije, je odlukom Vlade Republike Srbije, 2013. godine proglašen za USTANOVU KULTURE OD NACIONALNOG ZNAČAJA Centar lepih umetnosti GUARNERIUS je 1996. godine osnovao naš proslavljeni umetnik, violinista Jovan Kolundžija, kao prvu privatnu instituciju kulture u našoj zemlji, a centar je počeo sa radom 2. oktobra 2001. godine, posle pet godina obimne rekonstrukcije i opremanja nekada potpuno ruiniranom zdanju iz 1924. godine, Guarnerius je centar edukacije, gde se mladima pruža mogućnost učešća na brojnim majstorskim kursevima i takmičenjima, a takođe, važan segment svake umetničke sezone u Guarneriusu, su ciklusi koncerata mladih talenata, koji se realizuju uz veliku medijsku podršku.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://guarnerius.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/guarnerius.centarlepihumetnosti'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/cluguarnerius'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCI0i2M1xcH0wAhDFrIoD5mQ'
                    }
                ],
                address: 'DŽORDŽA VAŠINGTONA 12',
                city: 'Beograd',
                email: 'INFO@GUARNERIUS.RS'
            },
            {
                name: 'Zaduzbina Ilije M. Kolarca',
                logo: '/assets/images/culturalplaces/kolarac.png',
                coords: {lat: 44.8191121, lng: 20.4563296},
                info: 'lija Milosavljević Kolarac 1878. godine testamentom je sav svoj imetak ostavio srpskom narodu u cilju širenja nauke i kulture. Od sveg imanja trebalo je osnovati Fond za podizanje srpskog univerziteta, koji će se zvati Univerzitet Ilije M. Kolarca osnovan sopstvenim trudom na korist svoga naroda. Kolarčev narodni univerzitet otpočeo je svoju programsku delatnost 9. oktobra 1932. Odlukom 05 BR. 022-3566/2013 Ministarstva kulture i informisanja od 13. aprila 2013. godine Zadužbina Ilije M. Kolarca dobila je status ustanove kulture od nacionalnog značaja.Centar promoviše umetničku muziku i muzičku kulturu u Beogradu. Program je namenjen ljubiteljima i poznavaocima muzike kao i profesionalnim muzičarima. U Velikoj dvorani i Muzičkoj galeriji se godišnje održi više od 300 različitih priredbi i koncerata.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.kolarac.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/Zaduzbina.Ilije.M.Kolarca'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/ilijamkolarac'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/user/KolaracFoundation'
                    },
                    {
                        type: 'linkedin',
                        href: 'https://www.linkedin.com/in/kolarac-%D0%BA%D0%BE%D0%BB%D0%B0%D1%80%D0%B0%D1%86-5379335a'
                    }
                ],
                address: 'Studentski trg 5',
                city: 'Beograd',
                contact: '+381 11 263 05 50'
            },
            {
                name: 'SKC',
                logo: '/assets/images/culturalplaces/skc.png',
                coords: {lat: 44.8060389, lng: 20.4640464},
                info: 'Studentski kulturni centar osnovali su 1968. godine Beogradski univerzitet i Univerzitetski odbor saveza studenata Beograda sa inicijalnim mandatom da se omogući kulturna komunikacija studenata Beogradskog univerziteta. Godine 1992. ingerencije osnivača preuzela je Vlada Republike Srbije – Ministarstvo prosvete. Aktivnosti SKC-a odvijaju se prema godišnjim planovima koje koncipiraju urednici pojedinačnih programa čiji broj je, međutim, promenljiv, kako bi se pravovremeno odreagovalo na „pritiske“ stvarne kulturne scene, kao što su promenljivi i profili i tzv. nezamenljivih programa u zavisnosti od afiniteta aktuelnih urednika i aktivnih redakcijskih saradnika.Javnost se o odvijanju programa obaveštava putem mesečnog biltena SKiCa, saopštenjima za medije i pojedinačnim pratećim propagandnim materijalima.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.skc.org.rs/'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/Studentski-Kulturni-Centar-SKC-782862711821579'
                    },
                    {
                        type: 'instagram',
                        href: 'https://www.instagram.com/skcbeograd'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/SKCBeograd'
                    }
                ],
                address: 'Kralja Milana 48',
                city: 'Beograd',
                email: ''
            },
            {
                name: 'DOM OMLADINE',
                logo: '/assets/images/culturalplaces/domomladine.png',
                coords: {lat: 44.8154752, lng: 20.4628924},
                info: 'Dom omladine Beograda je ustanova kultura i obrazovanja Grada Beograda, koja već 50 godina, još od 1964. godine, kreira i organizuje programe za mlade i u saradnji sa mladima.  U svom spektru delatnosti Dom omladine obuhvata sve umetničke discipline i forme: muziku, film, pozorište, vizuelne umetnosti i nove medije.Osnovna načela i kriterijumi u kreiranju programa su kvalitet, inovativnost, aktuelnost i dostupnost programa mladima. Profesionalnost, fleksibilnost i prilagodljivost bilo kom zahtevu, te visoki standardi u realizaciji podrazumevaju se u svim aktivnostima Doma omladine Beograda.Posebna pažnja posvećena je obrazovnom programu, koji je za učenike i studente potpuno besplatan, a realizuje se kroz brojne radionice i predavanja iz najrazličitijih oblasti.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://www.domomladine.org'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/domomladinebeograd/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/DomOmladineBG'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/channel/UCRgUGLjulifkYR89Wtr16AA'
                    }
                ],
                address: 'Makedonska 22',
                city: 'Beograd',
                email: 'dobinfo@domomladine.org',
                contact: '011 3220 127'
            },
            {
                name: 'MIKSER HOUSE',
                logo: '/assets/images/culturalplaces/mikserhouse.png',
                coords: {lat: 44.8138565, lng: 20.4512815},
                info: 'Mikser je multidisciplinarna platforma koja podstiče razvoj kreativne ekonomije zemlje i regiona, i uspostavlja dijalog između savremenih globalnih tendencija i domaće i regionalne prakse.Mikser House predstavlja novi koncept kulturne institucije koja spaja kulturne, edukativne, ali i komercijalne aktivnosti u multifunkcionalnom prostoru koji je nastao kreativnom transformacijom starog gradskog magacina. Danas, na mestu nekadašnje industrijske garaže, u Savamali, jednom od sada najperspektivnijih beogradskih kvartova, Mikser House doprinosi novim transformacijama ovog dela grada, pretvarajući ga u kulturni distrikt. Pet dana, dva stejdža i desetine izvođača obeležiće muzički program ovogodišnjeg Mikser festivala. Sedmi po redu Mikser festival, “Neizdrž”, traje od 3. do 7. juna, obuhvatiće devet programskih celina i odvijaće se na različitim lokacijama širom Savamale.',
                links: [
                    {
                        type: 'globe',
                        href: 'http://house.mikser.rs'
                    },
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/mikser.belgrade'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/MIKSERBeograd'
                    },
                    {
                        type: 'instagram',
                        href: 'https://www.instagram.com/mikserbeograd/'
                    },
                    {
                        type: 'youtube',
                        href: 'https://www.youtube.com/user/MIKSERfestival'
                    }
                ],
                address: 'Karađorđeva 46',
                city: 'Beograd',
                email: 'office@mikser.rs',
                contact: '+38111 26 26 068'
            },
            {
                name: 'Ben Akiba',
                logo: '/assets/images/culturalplaces/benakiba.png',
                coords: {lat: 44.81428, lng: 20.45067},
                info: 'Prvi klub komedije u Srbiji koji je nastao iz saradnje Ben Akiba ugostiteljskog tima i Standup.rs, organizacije koja je osnovala scenu stand up komedije',
                links: [
                    {
                        type: 'facebook',
                        href: 'https://www.facebook.com/Ben-Akiba-comedy-club-bar-724952837589379/'
                    },
                    {
                        type: 'twitter',
                        href: 'https://twitter.com/BenAkibaBeograd'
                    }
                ],
                address: 'Braće Krsmanovića 6',
                city: 'Beograd',
                email: '',
            }
        ]

        store.on('curturalplaces:fetch', function () {
            // call api and get data
            store.trigger('curturalplaces:changed', store.curturalPlaces)
        })
    }
}
