// get an XHR instance
const xhr = new XMLHttpRequest();

// callback that fires every time the "readyState" changes.
xhr.onreadystatechange = function () {

  // Ignore all the readyStates except 4. Get out of this function ASAP.
  if (xhr.readyState !== 4) {
    return;
  }

  document.body.innerHTML = '<p>' + xhr.responseText + '</p>';
};

// open the connection
xhr.open('GET', 'http://numbersapi.com/random/trivia');

// make the actual request
xhr.send(); // Asynchronous


// display the result
