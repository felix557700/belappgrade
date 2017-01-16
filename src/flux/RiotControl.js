import riot from 'riot'

var _RiotControlApi = ['on', 'one', 'off', 'trigger']
function Global() {
    riot.observable(this)
}
var RiotControl = {
    _namespace_delimeter: ':',
    _global: new Global(),
    _observers: {},

    addObserver: function (namespace, observer) {
        this._observers[namespace] = observer
    },
}

_RiotControlApi.forEach(function (api) {
    RiotControl[api] = function () {
        var args = [].slice.call(arguments)
        var storeNamespace = args[0].split(this._namespace_delimeter)[0]
        try {
            this._observers[storeNamespace][api].apply(null, args)
        } catch (_) {
            this._global[api].apply(null, args)
        }
    }
})

export default RiotControl
