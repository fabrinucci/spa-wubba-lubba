import { getData } from "../utils";

export const Home = async () => {
  const data = await getData();
  const view = `
  <div class="Characters">
    ${data.results.map( character => `
    <article class="Character-item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
    `).join('')}
  </div>
  `

  return view;
}