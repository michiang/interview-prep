//d = {
  //"capitals": {"CA": "Sacramento", "AZ": "Phoenix"},
  //"plants": {"CA": "poppy",
             //"LA": {"flower": "magnolia", "wildflower": "iris"}}
//}

//... you could call getv() in the following ways with these expected return values:

/*
Sample Call
Expected Return Value
getv("capitals", d)
{"CA": "Sacramento", "AZ": "Phoenix"}
getv("capitals.CA", d)
"Sacramento"
getv("plants.LA.wildflower", d)
"iris"
getv("capitals.CA.North", d)
null
getv("capitals.TX", d)
null
getv("birds", d)
null
getv("", d)
null
*/

//Grab the first parameter and find a way to concat to the end of the object
//Ex: d.capitals or d[“capitals”]

function getv(key, d) {
  let splitByPeriod = key.split(‘.’);

  function recurseNestedObject(currentObj, index) {
    let object = currentObj || d;
      for (let j = index || 0; j < splitByPeriod.length; j++) {
        if (object[splitByPeriod[j] && (j === splitByPeriod.length-1)) {
              return object[key];
        } else if (object[splitByPeriod[j]) {
              recurseNestedObject(object[splitByPeriod[j], j);
        } else if (object[key] === null) {
              return null;
        }
      ));
    }
      let result = recurseNestedObject(d, 0);
      return result;
    }



//Example ajax call
$.ajax({
  url: 'http://myserver/user/643b3c1',
  method: 'PUT',
  data: obj,
  success: sfunc,
  error: efunc
});

//Write a function that retries ajax call numRetries times
//Is there anything else that you would add to optimize the ajax call?
function rajax(url, method, data, sfunc, efunc, numRetries) {
  $.ajax({
    url: url,
    method: method,
    data: data,
    success: sfunc,
    error: (status_code) => {
       if (status_code === 400 && numRetries > 0) {
          rajax(url, method, data, sfunc, efunc, numRetries-1); 
      } else {
        alert(‘failed!’);
      }
    }
  });
}
