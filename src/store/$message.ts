import Observable from '@lib/Observable';
import $interactions from './$interactions';

const $message = Observable.derive($interactions, (interactions) => {
  if (interactions.size === 0) {
    return (_: number) => 'Hi.';
  }

  return (max: number) => {
    if (interactions.size === max) {
      return 'Thanks a lot.';
    }
    return 'Thanks.';
  };
});

export default $message;
