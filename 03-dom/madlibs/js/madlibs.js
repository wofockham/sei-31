const madLibButton = document.getElementById('lib-button');

const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;

  const story = `${ person } really likes ${ adjective } ${ noun }`;

  document.getElementById('story').innerHTML = story;
};

madLibButton.addEventListener('click', makeMadLib);
