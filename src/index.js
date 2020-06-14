import { initial } from './actions/actions';
import { filter } from './actions/filter';
import { render } from './components/render/render';

import './styles/index.scss';

export const app = document.getElementById('app');
const regions = document.getElementsByName('countries');

regions.forEach((region) => region.addEventListener('click', filter));

initial().then(render);
