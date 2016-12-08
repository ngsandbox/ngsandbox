const MY_NG_SANDBOX_COOKIE_KEY: string = "MY_NG_SANDBOX_OPTIONS";

export class CommonUtils {

    static getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static format(...args: any[]) {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        let theString = args[0];

        // start with the second argument (i = 1)
        for (let i = 1; i < args.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            const regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, args[i]);
        }

        return theString;
    }


    static save(name: string, value: any) {
        let options = {};
        let cookie = localStorage.getItem(MY_NG_SANDBOX_COOKIE_KEY);
        if (cookie) {
            cookie = JSON.parse(cookie);
            if (cookie) {
                options = cookie;
            }
        }

        options[name] = value;
        localStorage.setItem(MY_NG_SANDBOX_COOKIE_KEY, JSON.stringify(options));
    }

    static load(name: string, defVal: any) {
        let cook = localStorage.getItem(MY_NG_SANDBOX_COOKIE_KEY);
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

    static genUuid(): string {
        // http://www.ietf.org/rfc/rfc4122.txt
        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        let d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
    }
}