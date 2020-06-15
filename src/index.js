import { initial } from './actions/actions';
import { filter } from './actions/filter';
import { render } from './components/render/render';

import './styles/index.scss';

export const app = document.getElementById('app');
const regions = document.querySelectorAll('.region-change');

regions.forEach((region) => region.addEventListener('click', filter));

initial().then(render);
