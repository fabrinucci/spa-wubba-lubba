import { getData, getHash } from "../utils";


export const Character = async () => {
  const id = getHash();
  const data = await getData(id);
  console.log({id, data});
  const view = `
  
  <div class="Character-inner">
    <article class="Characters-card">
      <img src="${data.image}" alt="${data.name}">
    </article>
    <h2>${data.name}</h2>

    <article class="Character-card">
      <h3>Episodes: <span>${data.episode.length}</span></h3>
      <h3>Status: <span>${data.status}</h3>
      <h3>Species: <span>${data.species}</h3>
      <h3>Gender: <span>${data.gender}</h3>
      <h3>Origin: <span>${data.origin.name}</h3>
      <h3>Last Location: <span></span>${data.location.name}</h3>

    </article>

  </div>
  
  `
  return view;
}