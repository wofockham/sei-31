const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    // Ignore all the readyStates except 4. Get out of this function ASAP.
    if (xhr.readyState !== 4) {
      return;
    }
    const p = document.createElement('p');
    const data = JSON.parse( xhr.responseText ); // Convert the JSON string into a JS object.
    p.innerHTML = data.text; // data["text"]
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // Asynchronous
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
