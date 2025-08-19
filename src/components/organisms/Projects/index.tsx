import styled from 'styled-components';
import { ProjectItem } from './ProjectItem';

const ProjectsContainer = styled.article`
  width: 100%;
  max-width: 1024px;
  padding: 20px;
  margin: auto;

  h2 {
    margin-bottom: 45px;
    text-align: center;
    font-size: 30px;
  }
`;

const projects = [
  {
    title: 'SHOOT POS(2021.02 ~ 2021.12)',
    desc: '미래에셋페이 앱과 연동되는 window용 POS',
    expose: true,
    iDo: [
      '프론트엔드 환경 세팅 및 기능 구현',
      'S3를 이용한 앱 버전 관리와 자동 업데이트 기능 구현',
      '결제API 연동',
      'window 환경에서의 영수증 프린트 기능구현'
    ],
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'Electron.js', 'Redux']
      },
      {
        type: 'etc',
        skillTitle: ['AWS S3', 'AWS EC2']
      }
    ],
    feeling: [
      '미래에셋페이 앱과 연동되는 가맹점용 POS입니다.',
      '가맹점의 window PC에서 동작하는 것이 목적이기에 Electron.js를 이용하였고, 내부에 보여지는 화면은 pm2등을 이용한 무중단 배포의 이점을 위해 React.js를 이용한 웹뷰로 진행하였습니다.',
      '결제, 거래 내역확인, 로그인 등 전체 기능을 개발하였고, 특히 electron의 기능들을 이용하여 영수증 프린트 기능과 시작 프로그램 등록을 통해 PC 시작시 자동으로 실행되는 기능을 개발하였습니다.',
      '브라우저 환경이 아닌 윈도우 환경에서 동작하는 서비스여서 신선하고, 많은 직군의 사람들과 소통함으로 많은 것을 배울 수 있었습니다.'
    ],
    links: [],
    mImgs: [
      'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/shootpos/shoot-pos-1.png'
    ],
    lImgs: [
      'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/shootpos/shoot-pos-m-1.png'
    ]
  },
  {
    title: 'DMS 서비스(2022.04 ~ 2023.12)',
    desc: '지류 인쇄물 페이지 에디터 서비스',
    expose: false,
    iDo: ['CI/CD 최적화'],
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'Redux', 'Styled-component', 'Typescript']
      },
      {
        type: 'etc',
        skillTitle: ['Tencent-cloud', 'Jenkins']
      }
    ],
    feeling: [
      '지류 인쇄물을 웹에서 제작하는 서비스입니다.',
      '웹 페이지를 puppeteer를 이용하여 스크린샷을 찍고, pdf나 여러 사이즈의 파일로 만들어 잡지형식의 뷰어로 보여주는 서비스로 프로젝트의 인프라 구조를 공부하면서 웹 서비스의 인프라 구조에 대해 깊게 배우는 계기가 되었습니다.',
      '서비스의 유지보수를 맡았고, 특히 여러대의 pdf제작 서버에서의 jenkins를 이용한 빌드 과정을 직렬식에서 병렬식으로 변경함으로 빌드에 들어가는 시간을 줄일 수 있었습니다.'
    ],
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/DMS/dms-m-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/DMS/dms-1.png']
  },
  {
    title: 'CATALOG 서비스(2022.04 ~ 2023.12)',
    desc: '모바일 전단 제작 서비스',
    expose: true,
    iDo: ['에디터 페이지 성능 최적화', '모바일 전단 뷰어 페이지 최적화'],
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'socket', 'Typescript', 'Styled-component']
      },
      {
        type: 'etc',
        skillTitle: ['Tencent-cloud', 'Jenkins', 'Node.js']
      }
    ],
    feeling: [
      '여러 디자인의 모듈을 조합하여 하나의 페이지를 제작하고, 제작한 페이지들으로 모바일 전단지를 제작하는 서비스 입니다.',
      '서비스의 유지보수를 맡았고, 페이지에 들어가는 모듈이나 콘텐츠가 많아 최초 랜더링이 3초 이상 걸리던 페이지 로딩 속도를 ObserverAPI를 이용하여 최적화 함으로 개선할 수 있었습니다.'
    ],
    links: [],
    mImgs: [
      'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/CATALOG/catalog-m-1.png'
    ],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/CATALOG/catalog-1.png']
  },
  {
    title: '이미지AI 서비스 PIXVAS',
    desc: '생성형 AI를 이용하여 이미지 에디팅 서비스',
    expose: false,
    iDo: [
      'openpose를 이용한 인물 Image to Image기능 및 포즈 추출 기능 개발',
      '이미지 Crop기능 개발',
      '텍스트 레이어 개발',
      '단축키(복사 붙여넣기, 작업 되돌리기 등)기능 개발',
      '작업 히스토리 기능 개발',
      '브랜드 페이지 개발',
      'I18n을 이용한 다국어(영어/한국어) 지원',
      '회원가입시 gspread를 이용하여 google docs연동',
      '미니 이벤트 페이지 개발'
    ],
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'Styled-component', 'Zustant', 'Typescript', 'SWR']
      },
      {
        type: 'etc',
        skillTitle: ['Tencent-cloud', 'Docker', 'FastApi']
      }
    ],
    feeling: [
      '프롬프트 혹은 이미지를 기반으로 이미지를 생성하거나, 수정할 수 있는 서비스 입니다.',
      '"OpenPose" 라는 오픈소스를 이용하여 이미지 안의 사람의 동작이나 포즈를 추출하고 변경하는 기능과 유저 친화적인 단축키, 작업 히스토리 기능등의 개발을 주로 맡았습니다.',
      '이미지 Crop이나 스케치 기능을 구현함에 있어서 CanvasAPI를 이용하여 직접 구현하였고, 스택 구조를 이용하여 작업 히스토리 기능을 개발할 수 있었습니다.'
    ],
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/pixvas/pixvas-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/pixvas/pixvas-m-1.png']
  },
  {
    title: '이벤트자동화 서비스',
    desc: '이벤트 생성을 위한 인프라 관리 서비스',
    expose: false,
    iDo: [
      '프론트엔드/백엔드 환경 세팅',
      'Nest.js에서 nest-aws-sdk를 이용한 AWS서비스 연동',
      'Docker를 이용한 CI/CD'
    ],
    skill: [
      {
        type: '프론트/백엔드',
        skillTitle: ['React', 'Typescript', 'Nest.js', 'SWR']
      },
      {
        type: 'etc',
        skillTitle: ['AWS', 'Docker']
      }
    ],
    feeling: [
      '사용자가 간편하게 고정적인 이벤트 페이지를 개설하고 진행할수 있는 서비스입니다.',
      '개발자가 아닌 사용자가 쉽게 사용하는 것을 목표로 개발하였습니다.',
      'Nest.js와 AWS-sdk를 이용하여 AWS의 여러 서비스를 연동하여 클릭 한번으로 서버를 생성하고, 이벤트 페이지를 생성할 수 있습니다.',
      '프로젝트를 진행하면서 웹 서비스의 인프라에 대해 좀 더 구체적으로 이해 할 수 있었습니다.'
    ],
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/event-auto/m-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/event-auto/1.png']
  },
  {
    title: '개인 프로젝트(트위치 멀티 뷰어)',
    desc: '트위치 방송을 다중으로 시청 가능한 서비스',
    expose: false,
    iDo: ['트위치 openAPI 연동'],
    skill: [
      {
        type: '프론트',
        skillTitle: ['Next.js', 'Typescript', 'Styled-component', 'SWR']
      }
    ],
    feeling: [
      '트위치의 open-api를 이용하여 자신의 트위치 아이디로 로그인하여 팔로우한 스트리머들의 방송을 최대 5개 까지 시청할 수 있는 서비스 입니다.'
    ],
    links: [
      {
        link: 'https://www.white-win.dev/playground/multi-twitch',
        desc: 'Twitch-multi-viewer'
      }
    ],
    mImgs: [
      'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/twitch-multi/twm-m-1.png'
    ],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/twitch-multi/twm-1.png']
  },
  {
    title: 'GENVAS',
    desc: '캐릭터 이미지 생성 서비스',
    expose: true,
    iDo: ['GENVAS 프론트엔드 개발', '공용 기능 관리 및 함수화', '반응형 디자인 적용'],
    skill: [
      {
        type: '프론트',
        skillTitle: ['Next.js', 'Typescript', 'Tailwind', 'Tanstack Query', 'Zustand']
      }
    ],
    feeling: [
      '사용자가 학습하고 싶은 캐릭터의 이미지를 업로드하여 해당 이미지 기반으로 사용자만의 캐릭터 모델을 만들고, 해당 캐릭터 모델을 이용하여 이미지를 생성하는 서비스 입니다.',
      '팝업 및 모달 등의 UI는 react의 dynamic import를 이용하여 비동기로 불러오는 방식으로 구현하였습니다.',
      '이미지를 랜더링하는 컴포넌트의 상태변화가 잦았기에 React의 memo를 이용하여 Props에 따른 랜더링 최적화를 진행하였습니다.',
      '상품 결제 기능을 개발하면서 새창으로 뜨는 결제 화면과 프로젝트간의 통신을 위해 BroadcastChannel을 이용하여 통신을 진행하였습니다.'
    ],
    links: [
      {
        link: 'https://www.lite-genvas.ai/welcome',
        desc: 'GENVAS'
      }
    ],
    mImgs: [],
    lImgs: []
  }
];

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2 tabIndex={1}>프로젝트</h2>
      <div>
        <div className='projectContainer'>
          {projects
            .filter(project => project.expose)
            .map(project => (
              <ProjectItem key={project.title} projectItemData={project} />
            ))}
        </div>
      </div>
    </ProjectsContainer>
  );
};
