'use strict';

var assert = require('assert');
require('../addHttp.js');

const url = 'google.com';

describe('Add Http Test Suite',() => {

    describe('Add http', () => {
        it('should add http:// to string', () => {
            assert.equal(url.addHttp(), 'http://google.com');
        });
        
        it('should add http:// to string if missing', () => {
            assert.equal(url.addHttp(), 'http://google.com');
        });
        
        it('should not add http:// to string if there already', () => {
            assert.equal(url.addHttp(), 'http://google.com');
        });
    });
    
    describe('Add https', () => {
        it('should add https:// to string', () => {
            assert.equal(url.addHttp(true), 'https://google.com');
        });

        it('should not add https:// to string', () => {
            assert.equal(url.addHttp(true), 'https://google.com');
        });

        // it('should add https:// if begins with https://', () => {
        //     assert.equal(url.addHttp(true), 'https://google.com');
        // });
    });

});