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
    title: 'publising',
    contents: 'html, css, javascript'
  },
  {
    title: 'front-end',
    contents: 'html, css, javascript, typescript, react, next'
  },
  {
    title: 'State Management',
    contents: 'redux, mobx'
  },
  {
    title: 'ETC',
    contents: 'electron, git, node, figma'
  }
];

export const ProjectItems = [
  {
    title: 'shoot-pos',
    content: '아이폰 간편결제 시스템 미래에셋페이와 연동되는 가맹점용 POS프로그램',
    img: ''
  }
];
