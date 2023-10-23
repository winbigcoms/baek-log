export const categoryToKorean = (category: string) => {
  switch (category) {
    case 'all':
      return '- 모든 포스팅';
    case 'study':
      return '- 스터디';
    case 'cafe':
      return '- 카페,음식 그리고 여행';
    case 'twitch':
      return '- 스트리머 추천!';
    default:
      return '';
  }
};

export const categoryMiddelTitleToKorean = (category: string) => {
  switch (category) {
    case 'all':
      return '모든 포스팅을 최신순으로 봅니다';
    case 'study':
      return '나의 관심사, 배운 것을 적어봅니다.';
    case 'cafe':
      return '상큼한 음료, 달콤한 디저트를 좋아하는 페이지 주인장의 카페 추천';
    case 'twitch':
      return '개인방송 시청 경력 10년의 페이지 주인장의 트위치 스트리머 추천';
    default:
      return '';
  }
};

export const aboutCategory = [
  {
    icon: 'user.png',
    about: '이름',
    data: '백승일'
  },
  {
    icon: 'calender.png',
    about: '생년월일',
    data: '1995-10-12'
  },
  {
    icon: 'location.png',
    about: '주소',
    data: '경기도 하남시'
  },
  {
    icon: 'phone.png',
    about: '연락처',
    data: '비밀! 메일을 주세요!'
  },
  {
    icon: 'mail.png',
    about: '이메일',
    data: 'bigcoms6290@gmail.com'
  },
  {
    icon: 'pencil.png',
    about: '최종 학력',
    data: '명지대 철학과'
  }
];

export const skillSet = [
  {
    title: 'front-end',
    contents: 'html, css, javascript, typescript, react, next'
  },
  {
    title: 'State Management',
    contents: 'redux'
  },
  {
    title: 'ETC',
    contents: 'electron, git, node, figma'
  }
];

export const ProjectItems = [
  {
    classification: 'main',
    item: [
      {
        title: 'shoot-pos',
        content: '가맹점용 웹뷰 윈도우 POS프로그램',
        tools: ['react', 'redux', 'electron', 'styled-component'],
        img: '',
        impression:
          '기획부터 배포까지 담당했던 프로젝트로 실제 서비스가 어떻게 돌아가는지에 대해 많이 배울 수 있었다'
      }
    ]
  },
  {
    classification: 'maintenance',
    item: [
      {
        title: 'DMS',
        content: '지류 전단지 제작 에디터',
        tools: 'react, redux',
        img: '',
        impression: '유지, 보수작업을 주로하면서 서버와 배포에 대해서 많이 공부할 수 있었습니다.'
      },
      {
        title: 'CATALOG',
        content: '모바일 이벤트 페이지 제작 에디터',
        tools: 'react, redux, styled-component',
        img: '',
        impression: ''
      },
      {
        title: 'miniprogram admin',
        content: '',
        tools: 'react, redux, styled-component',
        img: '',
        impression: ''
      }
    ]
  }
];

export const krChild = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ'
];
export const krMom = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ'
];
export const krChildUnder = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ'
];

export const standUpJokbo = {
  '3l8l': {
    value: 0,
    name: '38광땡'
  },
  '1l3l': {
    value: 1,
    name: ''
  },
  '1l8l': {
    value: 1,
    name: ''
  },
  '49Y': {
    value: 888,
    name: ''
  },
  '49N': {
    value: 3,
    name: ''
  },
  '4s9sY': {
    value: 1888,
    name: ''
  },
  '4s9sN': {
    value: 20,
    name: ''
  },
  '4s7sY': {
    value: 0.5,
    name: ''
  },
  '4s7sN': {
    value: 21,
    name: ''
  }
};

export const twitchOauthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&state=c3ab8aa609ea11e793ae92361f002671&client_id=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_TWITCH_REDIRECT}&scope=user:read:follows`;
export const get_streamURL = (channel_name: string) =>
  `https://player.twitch.tv/?muted=true&channel=${channel_name}&parent=${'localhost'}`;

export const VIEWPORT_RATIO = [
  [1, 1],
  [2, 1],
  [2, 2],
  [2, 2]
];
