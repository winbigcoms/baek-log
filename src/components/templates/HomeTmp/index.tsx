import { HomeContents } from 'src/components/organisms';

const contents = [
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
export const HomeTmp = () => {
  return <HomeContents contents={contents} />;
};
