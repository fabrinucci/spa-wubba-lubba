export const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

//location.hash = #/1/
// split('/') = ['', '1', '']
// finally our getHash function get an id or '/'