import Observable from '@lib/Observable';
import zalgo from '@lib/zalgo';
import $sanity from './$sanity';

const $title = Observable.derive($sanity, (value) => {
  const intensity = Math.abs(value - 100) / 10;
  if (value <= 0) {
    return zalgo('𝐒𝐔𝐅𝐅𝐄𝐑𝐈𝐍𝐆', intensity);
  }
  return zalgo('wooseop.kim', intensity);
});

export default $title;
