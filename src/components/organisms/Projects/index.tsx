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
    feeling:
      '가맹점용 윈도우 프로그램으로 electron.js와 React.js로 개발했습니다. 기획팀과 디자인팀 같이 다른 팀과의 협업 또 NFC기능을 이용하기 위해 다른 회사의 개발자와 소통하여 개발을 진행하여 성공적으로 가맹점에 설치하고 운용할 수 있었습니다.',
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
    feeling:
      '지류 인쇄물을 웹에서 제작하는 DMS서비스를 개발했습니다. 특히 서비스의 CI/CD 프로세스를 개선하여 빌드 속도를 단축 시킬 수 있었습니다.',
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/DMS/dms-m-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/DMS/dms-1.png']
  },
  {
    title: 'CATALOG 서비스(2022.04 ~ 2023.12)',
    desc: '모바일 전단 제작 서비스',
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
    feeling:
      '모바일 전단지를 제작하는 Catalog서비스를 개발 했습니다. 특히 성능 최적화를 통해 콘텐츠가 많아 첫 랜더링이 5초 정도 걸렸던 페이지 초기 로딩 속도를 1초로 정도 개선할 수 있었습니다.',
    links: [],
    mImgs: [
      'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/CATALOG/catalog-m-1.png'
    ],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/CATALOG/catalog-1.png']
  },
  {
    title: '이미지AI 서비스 PIXVAS',
    desc: '생성형 AI를 이용하여 이미지 에디팅 서비스',
    iDo: [
      'openpose를 이용한 인물 Image to Image기능 및 포즈 추출 기능 개발',
      '이미지 Crop기능 개발',
      '텍스트 레이어 개발',
      '단축키(풀 스크린, 시스템바 숨기기, 캔버스 확대 축소, 이미지 복사 붙여넣기, 레이어 이동, 작업 되돌리기 등)기능 개발',
      '작업 히스토리 기능 개발',
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
    feeling:
      '프롬프트로 이미지를 생성하거나, 수정할 수 있는 서비스 입니다. "OpenPose" 라는 오픈소스를 이용하여 이미지 안의 사람의 동작이나 포즈를 추출하고 변경하는 기능과 텍스트를 켈리그라피 기능을  맡았습니다.',
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/pixvas/pixvas-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/pixvas/pixvas-m-1.png']
  },
  {
    title: '이벤트자동화 서비스',
    desc: '이벤트 생성을 위한 인프라 관리 서비스',
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
    feeling:
      'AWS를 이용하여 사용자가 간편하게 SI 이벤트 페이지를 개설하고 진행할수 있는 서비스입니다. 간단한 사용 flow로 EC2, target-group, Route53 등의 인프라 세팅을 구축할 수 있습니다.',
    links: [],
    mImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/event-auto/m-1.png'],
    lImgs: ['https://baek-log-img.s3.ap-northeast-2.amazonaws.com/projects/event-auto/1.png']
  },
  {
    title: '개인 프로젝트(트위치 멀티 뷰어)',
    desc: '트위치 방송을 다중으로 시청 가능한 서비스',
    iDo: ['트위치 openAPI 연동'],
    skill: [
      {
        type: '프론트',
        skillTitle: ['Next.js', 'Typescript', 'Styled-component', 'SWR']
      }
    ],
    feeling:
      '트위치의 open-api를 이용하여 자신의 트위치 아이디로 로그인하여 팔로우한 스트리머들의 방송을 최대 5개 까지 시청할 수 있는 서비스 입니다.',
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
  }
];

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2 tabIndex={1}>프로젝트</h2>
      <div>
        <div className='projectContainer'>
          {projects.map(project => (
            <ProjectItem key={project.title} projectItemData={project} />
          ))}
        </div>
      </div>
    </ProjectsContainer>
  );
};
