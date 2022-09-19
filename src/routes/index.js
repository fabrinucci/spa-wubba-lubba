import { Character, Home, Error404 } from "../pages";
import { Header } from "../templates";
import { getHash, resolveRoutes } from "../utils";

const routes = {
  '/': Home,
  '/:id': Character,
  'Contact': 'Contact',
}

export const router = async () => {
  const header = null || document.querySelector('#header');
  const content = null || document.querySelector('#content');

  header.innerHTML = Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ?? Error404;
  content.innerHTML = await render();

  window.scrollTo(0, 0);

}