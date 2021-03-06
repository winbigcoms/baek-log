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
