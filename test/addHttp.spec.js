
'use strict';

var assert = require('assert');
require('../addHttp.js');
    
describe('Add Http Test Suite',() => {
    
    describe('Add http', () => {
        it('should add http:// to string', () => {
            let url = 'google.com';
            
            assert.equal(url.addHttp(), 'http://google.com');
        });
        
        it('should add http:// to string if missing', () => {
            let url = 'google.com';
            
            assert.equal(url.addHttp(), 'http://google.com');
        });
        
        it('should not add http:// to string if there already', () => {
           let url = 'http://google.com';

            assert.equal(url.addHttp(), 'http://google.com');
        });
    });
    
    describe('Add https', () => {
        it('should add https:// to string', () => {
            let url = 'google.com';
            
            assert.equal(url.addHttp(true), 'https://google.com');
        });

    });


});