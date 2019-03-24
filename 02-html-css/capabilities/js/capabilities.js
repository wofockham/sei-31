let content = '';

// extended ASCII
for (let i = 0; i < 2 ** 14; i++) {
  content += String.fromCharCode( i )
}

// Don't do shit like this IRL.
document.body.innerHTML = content;
