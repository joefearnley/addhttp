(function() {
    'use strict';

//    String.prototype.addHttp = function(useHttps) {
    Object.defineProperty(String.prototype, 'addHttp', {

        // this.replace( pattern, "THE" );
        // console.log(this.splice(0, 7));

        const https = (typeof useHttps === 'undefined') 
            ? false 
            : useHttps;

        if (this.slice(0, 7) === 'http://' && !https) {
            return this;
        }

        if (this.slice(0, 7) !== 'http://' && !https) {
            return 'http://' + this;
        }

        // if (this.slice(0, 7) === 'http://' && https) {
        //     let pattern =  new RegExp('http://', 'g');
        //     console.log(this.replace(pattern, this));
        //     return 'https://' + this.splice(0, 7);
        // }

        if (this.slice(0, 8) !== 'https://' && https) {
            return 'https://' + this;
        }

        if (this.slice(0, 8) === 'https://' && https) {
            return this;
        }

        return this;
    };
})();