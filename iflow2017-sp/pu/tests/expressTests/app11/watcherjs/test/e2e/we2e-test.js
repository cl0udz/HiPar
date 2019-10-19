'use strict';

var rest = require('restler');
var logger = require('../../src/logger');
var assert = require('chai').assert;
var _ = require('underscore');
var s = require('underscore.string');

describe('watcherjs web console', function() {

    var driver = browser.driver;
    before(function() {
        browser.get('http://localhost:7777/console');
        driver = browser.driver;
    });

    function filterByEndpointId(id) {
        return element.all(by.repeater('endpoint in endpoints').column('endpoint.id'))
            .filter(function(col, index) {
                return col.getText().then(function(id) {
                    return id === 'x';
                });
            });
    }

    it('add new endpoint', function() {
        element.all(By.tagName('button')).first().click()
            .then(function() {
                element(By.id('add-endpoint')).click()
                    .then(function() {
                        element(By.id('endpointId')).sendKeys('x');
                        element(By.id('endpointDesc')).sendKeys('x-desc');
                        element(By.id('endpointHost')).sendKeys('localhost');
                        element(By.id('endpointPort')).sendKeys('7777');
                        element(By.id('submit-endpoint')).click()
                            .then(function() {
                                logger.debug('Add endpoint button clicked');
                                filterByEndpointId('x')
                                    .then(function(filteredCols) {
                                        assert.equal(filteredCols.length, 1, 'The endpoint "x" must be created');
                                    });
                            });
                    })
            });
    });

    it('get new endpoint', function(done) {
        rest.get('http://localhost:7777/endpoints/x')
            .on('complete', function(data, response) {
                assert.equal(200, response.statusCode);
                assert.equal('x', data.id);
                done();
            });
    });

    it('remove endpoint', function() {
        element.all(By.repeater('endpoint in endpoints'))
            .filter(function(row, index) {
                return row.getText().then(function(text) {
                    return s.contains(text, 'x x-desc');
                });
            })
            .then(function(filteredRows) {
                filteredRows[0].element(By.css('.action-delete')).click()
                    .then(function() {
                        logger.debug('Delete action clicked');
                        driver.wait(protractor.until.elementLocated(By.id('confirm-action'), 3000))
                            .then(function(confirm) {
                                confirm.click()
                                    .then(function() {
                                        logger.debug('Confirm deletion clicked');
                                        filterByEndpointId('x')
                                            .then(function(filteredCols) {
                                                assert.equal(filteredCols.length, 0, 'The endpoint "x" must be removed');
                                            });
                                    });
                            });
                    });
            });
    });

    it('try to get the removed endpoint', function(done) {
        rest.get('http://localhost:7777/endpoints/x')
            .on('complete', function(data, response) {
                assert.equal(422, response.statusCode);
                done();
            });
    });

});