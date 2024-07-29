const $result = document.querySelector('#result')
const q = (new URLSearchParams(location.search)).get('q')
const list = [
    {l: 'es', t: 'Title', h:'https://moix.cc/', d: '2024-04-24'},
    {l: 'es', t: 'Title', h:'https://moix.cc/', d: '2024-04-24'},
    {l: 'es', t: 'Title', h:'https://moix.cc/', d: '2024-04-24'}
]
$result.innerHTML = list.map(
    e=>`<p><a href="${e.h}" target="_blank"><b>${e.t}</b></a> | <i>${e.l.toUpperCase()}</i> | <small>${e.d}</small></p>`
).join('')