var clone = require('fast-clone');
var utils = require('../TestcaseUtils')

var input  = {
	name: 'Natasha Rominov',
	age: 30,
	skills: [
		'Pistols',
		'Espionage'
	],
	dateOfBirth: new Date('1986-05-21T00:00:00.000Z')
};


function test(input){
    var b = clone(input);
    console.log(b);
}


utils.entry(test,input)