import { initialByRegion } from './actions';
import { render } from '../components/render/render';

export function filter() {
  const region = this.value;
  return initialByRegion(region).then(render);
}
