const $result = document.querySelector('#result')
const q = (new URLSearchParams(location.search)).get('q')

fetch('https://us-east4.gcp.data.mongodb-api.com/app/application-0-dojzngj/endpoint/search', {
    method: 'POST', body: q || '*'
}).then(r => r.json()).then(list => {
    $result.innerHTML = list.map(
        e => `<p><a href="${ e.h }" target="_blank"><b>${ e.t }</b></a> | <i>${ e.l.toUpperCase() }</i> | <small>${ e.d.split('T')[0] }</small></p>`
    ).join('')
})