
'use strict';

String.prototype.addHttp = function(useHttps) {

    const https = (typeof useHttps === 'undefined') ? false : useHttps;

    if (this.slice(0, 7) === 'http://' && !https) {
        return this;
    }
    
    if (this.slice(0, 7) !== 'http://' && !https) {
        return 'http://' + this;
    }
    
    if (this.slice(0, 8) !== 'https://' && https) {
        return 'https://' + this;
    }

    if (this.slice(0, 8) === 'https://' && https) {
        return this;
    }

    return this;
};