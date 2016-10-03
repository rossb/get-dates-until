const chai = require('chai');
const expect = chai.expect;

const GetDatesUntil = require('./index.js');

describe('GetDatesUntil(endDate, startDate)', function() {

  let tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(tenDaysFromNow.getDate() + 10);

  describe('end date supplied, start date omitted', function(){
    it('should return array of dates', function() {

      expect(GetDatesUntil(tenDaysFromNow).length)
        .to.equal(10);

    });
  });

  describe('end date and start date supplied', function(){
    it('should return array of dates', function() {

      expect(GetDatesUntil(new Date(2000,0,5), new Date(2000,0,1)).length)
        .to.equal(4);

    });
  });

  describe('end date is in the past', function(){
    it('should return empty array', function() {

      expect(GetDatesUntil(new Date(2000,0,5)))
        .to.deep.equal([]);

    });
  });

  describe('no parameters supplied', function(){
    it('should throw error', function() {

      expect(GetDatesUntil.bind(undefined))
        .to.throw(Error);

    });
  });

});