import { initial } from './actions/actions';
import { render } from './components/render/render';

import './styles/index.scss';

export const app = document.getElementById('app');

initial().then(render);
