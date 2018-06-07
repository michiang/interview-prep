// /*
// // Given
// var endorsements = [
//   { skill: 'css', user: 'Bill' },
//   { skill: 'javascript', user: 'Chad' },
//   { skill: 'javascript', user: 'Bill' },
//   { skill: 'css', user: 'Sue' },
//   { skill: 'javascript', user: 'Sue' },
//   { skill: 'html', user: 'Sue' }
// ];

// // Result
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ];
// */

// //Input - an array of objects
// //Output - an array of objects

function sortEndorsements(endorsements) {
    if (endorsements === undefined) {
        console.log('endorsements undefined');
        return;
    }
    let result = [];
    endorsements.forEach((endorsement) => {
        let storage = {};
        if (result.findIndex((skillObj) => skillObj.skill === endorsement.skill) !== -1) {
            let index = result.findIndex((skillObj) => skillObj.skill === endorsement.skill);
            result[index].user.push(endorsement.user);
            result[index].count++;
        } else {
            storage.skill = endorsement.skill;
            storage.user = [endorsement.user];
            storage.count = 1;
            result.push(storage);
        }
    });
    return result;
// }
// //Iterating over endorsements
//     //Establish a result object
//     //{'skill', users (array), count (length of values in storage object)}
//     //Establish a storage object
//     //{'skill': users (array)}
//     //To get the count, access the value array pertaining to each skill and get the length of the array
//     //Return the result object

var Foo = function (a) {
    function bar() {
        return a;
    }
    this.baz = function () {
        return a;
    };
};

Foo.prototype = {
    biz: function () {
        return a;
    }
};

var f = new Foo(7);
console.log(f.baz()); //7
Foo.prototype.biz.bind(f);
f.biz(); //undefined

// What happens when this executes?
// How would you fix it so it returns the same value? return 7
