const MY_NG_SANDBOX_COOKIE_KEY: string = "MY_NG_SANDBOX_OPTIONS";

export class Utils {

    static getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static format(...args: any[]) {
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
    }


    static save(name: string, value: any) {
        let options = {};
        let cookie = $.cookie(MY_NG_SANDBOX_COOKIE_KEY);
        if (cookie) {
            cookie = JSON.parse(cookie);
            if (cookie) {
                options = cookie;
            }
        }

        options[name] = value;
        $.cookie(MY_NG_SANDBOX_COOKIE_KEY, JSON.stringify(options));
    }

    static load(name: string, defVal: any) {
        let cook = $.cookie(MY_NG_SANDBOX_COOKIE_KEY);
        if (cook) {
            let options = JSON.parse(cook);
            if (options) {
                let ret = options[name];
                if (ret && ret !== 0 && ret !== "") {
                    return ret;
                }
            }
        }

        return defVal;
    }
}