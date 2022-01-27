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
