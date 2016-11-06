var MY_NG_SANDBOX_COOKIE_KEY = "MY_NG_SANDBOX_OPTIONS";
export var Utils = (function () {
    function Utils() {
    }
    Utils.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Utils.format = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = args[0];
        // start with the second argument (i = 1)
        for (var i = 1; i < args.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, args[i]);
        }
        return theString;
    };
    Utils.save = function (name, value) {
        var options = {};
        var cookie = $.cookie(MY_NG_SANDBOX_COOKIE_KEY);
        if (cookie) {
            cookie = JSON.parse(cookie);
            if (cookie) {
                options = cookie;
            }
        }
        options[name] = value;
        $.cookie(MY_NG_SANDBOX_COOKIE_KEY, JSON.stringify(options));
    };
    Utils.load = function (name, defVal) {
        var cook = $.cookie(MY_NG_SANDBOX_COOKIE_KEY);
        if (cook) {
            var options = JSON.parse(cook);
            if (options) {
                var ret = options[name];
                if (ret && ret !== 0 && ret !== "") {
                    return ret;
                }
            }
        }
        return defVal;
    };
    return Utils;
}());
//# sourceMappingURL=utils.js.map