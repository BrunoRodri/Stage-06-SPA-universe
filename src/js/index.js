import { Router } from './router.js';
import { Backgrounds } from './events.js';
import * as el from './elements.js';

const backgrounds = Backgrounds({
  home,
  universe,
  exploration
});

if (el.home) {
  el.home.addEventListener('click', () => {
    backgrounds.backgroundHome();
  });
}
if (el.universe) {
  el.universe.addEventListener('click', () => {
    backgrounds.backgroundUniverse();
  });
}
if (el.exploration) {
  el.exploration.addEventListener('click', () => {
    backgrounds.backgroundExploration();
  });
}

const router = new Router();
router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
