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
    title: 'Front',
    contents: 'html, css, javascript, typescript, react, next'
  },
  {
    title: 'Back',
    contents: 'node'
  },
  {
    title: 'DB',
    contents: 'mongo'
  },
  {
    title: 'ETC',
    contents: 'electron, git, figma'
  }
];

export const skillDesc = [
  {
    title: 'Mind',
    skill: [
      '유저의 입장에서 편한 UI/UX를 추구합니다.',
      '기술은 도구이며 상황에 따라 적절한 도구 선택이 있다고 생각합니다.',
      '내 업무와 관련된 분야라면, 생소한 분야라도 흐름을 이해하고 소통하려고 노력합니다.',
      '프로젝트에 필요한 기술을 빠르게 이해하고 습득할 수 있습니다.'
    ]
  },
  {
    title: 'Front',
    skill: [
      '구조적인 HTML을 개발할 수 있습니다.',
      'Media query를 이용한 반응형 웹 개발에 익숙합니다.',
      'Javascript와 Typescript에 익숙합니다.',
      'React와 Next를 이용한 개발에 익숙합니다.',
      'Light house등의 성능 측정 도구를 사용하여 서비스를 최적화할 수 있습니다.'
    ]
  },
  {
    title: 'Back',
    skill: [
      'Express, Nest.js등의 Node.js 서버 라이브러리로 api서버를 개발 한 경험이 있습니다.',
      'MongoDB, Mysql, Radis 등의 DB를 이해하고 사용할 수 있습니다.'
    ]
  },
  {
    title: 'DevOps',
    skill: [
      'AWS Route53, EC2, ELB, S3등의 서비스 이용에 익숙합니다.',
      'Jenkins를 이용한 CI/CD의 경험이 있습니다.',
      '반복적인 업무를 Crontab같은 스케줄러를 이용하여 해결 할 수 있습니다.'
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
  `https://player.twitch.tv/?muted=true&channel=${channel_name}&parent=${process.env.NEXT_PUBLIC_TWITCH_PARENT}`;

export const VIEWPORT_RATIO = [
  [1, 1],
  [2, 1],
  [2, 2],
  [2, 2],
  [2, 2]
];
export const FIVE_VIEWPORT_RATIO = [
  [2, 2],
  [2, 2],
  [3, 2],
  [3, 2],
  [3, 2]
];

export const SELECT_MAIN_VIEWPORT_RATIO = [
  [1, 1.6],
  [4, 2.8]
];

export const contents = [
  {
    categoryTitle: '최근 포스팅',
    route: 'all',
    categoryContents: [
      {
        thumbnailTitle: '테스트 포스트',
        imgUrl: '/assets/img/thumbnail.png'
      }
    ]
  },
  {
    categoryTitle: 'Study',
    route: 'study',
    categoryContents: [
      { thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' },
      { thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' },
      { thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' },
      { thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' },
      { thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' }
    ]
  },
  {
    categoryTitle: 'Cafe/Food/Travel',
    route: 'cafe',
    categoryContents: [{ thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' }]
  },
  {
    categoryTitle: '스트리머 추천!',
    route: 'twitch',
    categoryContents: [{ thumbnailTitle: '테스트 포스트', imgUrl: '/assets/img/thumbnail.png' }]
  }
];
