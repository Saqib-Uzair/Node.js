import url from 'url';

const parseUrl = url.parse("https://www.iba.edu.pk/");


console.log(parseUrl.hostname);
console.log(parseUrl.pathname);
console.log(parseUrl.path);