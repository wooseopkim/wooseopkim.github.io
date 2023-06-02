import Observable from '@lib/Observable';
import $sanity from './$sanity';

const $favicon = Observable.derive($sanity, (value) => {
  if (value <= 0) {
    return '💀';
  }
  return '👻';
});

export default $favicon;
