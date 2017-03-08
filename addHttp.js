
'use strict';

Object.defineProperty(String.prototype, 'addHttp', {
    value(useHttps) {

        const https = (typeof useHttps === 'undefined') 
            ? false 
            : useHttps;

        const url = this.toLowerCase();

        if (url.slice(0, 7) === 'http://' && !https) {
            return url;
        }

        if (url.slice(0, 7) !== 'http://' && !https) {
            return 'http://' + url;
        }

        if (url.slice(0, 7) === 'http://' && https) {
            return url.replace(new RegExp('http://', 'g'), 'https://');
        }

        if (url.slice(0, 8) !== 'https://' && https) {
            return 'https://' + url;
        }

        if (url.slice(0, 8) === 'https://' && https) {
            return url;
        }

        return url;
    }
});