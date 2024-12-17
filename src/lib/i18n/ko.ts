import dedent from '@lib/dedent';
import type { Text } from './Text';

const ko: Text = {
  hi: '안녕하세요.',
  thanks: '감사합니다.',
  thanksALot: '감사합니다!',
  bio: dedent`공허를 떠도는 거대한 돌 위에,
    평안도 이정표도 없는 처지로
    매일같이 삶을 앓고 있는,
    제 이름은 김우섭입니다.
  `,
  sponsor: '연명을 도와주시겠다면:',
  contacts: '떠나는 법을 아신다면:',
  links: '투병의 자취를 보시려면:',
  copyButton: '복사',
  buyMeABeer: '바이 미 어 비어',
  bitcoin: '비트코인',
  monero: '모네로',
  email: '이메일',
  gitHub: '깃헙',
  blog: '블로그',
  quotes: '무용했던 진통제의 목록:',
  finding: '그렇게 된 겁니다.',
};

export default ko;
