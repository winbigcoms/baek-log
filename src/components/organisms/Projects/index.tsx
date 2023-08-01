import styled from 'styled-components';
import { ProjectItem } from './ProjectItem';

const ProjectsContainer = styled.div`
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
    desc: '미래에셋페이 앱과 연동되는 window pos시스템',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'electron', 'styled-component']
      },
      {
        type: 'CI/CD',
        skillTitle: ['AWS S3', 'ec2', 'jenkins']
      }
    ],
    feeling:
      '가맹점용 윈도우 프로그램으로 electron과 react로 개발을 진행하였습니다. 기획팀과 디자인팀 같이 다른 팀과의 협업 또 NFC기능을 이용하기 위해 다른 회사의 개발자와 소통하여 개발을 진행하여 성공적으로 가맹점에 설치하고 운용할 수 있었습니다.',
    links: []
  },
  {
    title: '미래에셋페이 백오피스 개발(2021.05 ~ 2021.12)',
    desc: '미래에셋페이 앱의 통계 및 고객관리를 하는 백오피스',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'redux-toolkit', 'styled-component']
      },
      {
        type: 'CI/CD',
        skillTitle: ['ec2', 'jenkins']
      }
    ],
    feeling:
      '미래에셋페이 서비스의 관리자 페이지로 React와 Redux, Redux-saga를 이용하여 개발하였습니다. 4명의 프론트 개발자 팀원들과 협업하여 진행한 프로젝트이며 atomic design을 적용하여 컴포넌트의 재사용성에 대해 더 고민해볼 수 있었습니다.',
    links: []
  },
  {
    title: 'DMS / CATALOG 서비스(2022.04 ~ 2023.12)',
    desc: 'REACT를 이용한 웹 페이지 에디팅 및 페이지 제작 서비스',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'web-socket', 'styled-component']
      },
      {
        type: 'CI/CD',
        skillTitle: ['tencent-cloud', 'jenkins']
      }
    ],
    feeling:
      '지류 전단지를 제작하는 DMS서비스와 잡지와 같은 상품 페이지를 제작할 수 있는 Catalog 서비스를 개발, 운영 했었습니다. 사용자의 UX에 흠이 되지 않게 성능 최적화도 진행해보고, 트래픽을 분석하여 서버 증설 등의 새로운 경험을 해볼 수 있었습니다. 특히 성능 최적화를 위해 컴포넌트 분리, 조건부 랜더링시 조건 최적화 등을 통해 데이터가 많은 페이지의 첫 랜더링이 5초 이상 걸렸던 페이지 초기 로딩 속도를 0.6초 정도 줄여 빠르게 보여줌으로 사용자 경험에 좋은 영향을 줄 수 있었습니다.',
    links: []
  },
  {
    title: 'MINIPIE admin페이지(2022.05 ~ 2022.12)',
    desc: 'react, typescript를 이용한 웹 페이지 제작 에디터 개발',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'styled-component', 'swr']
      },
      {
        type: 'CI/CD',
        skillTitle: ['tencent-cloud', 'jenkins']
      }
    ],
    feeling:
      '위쳇 내부의 페이지를 만들어주는 미니프로그램이라는 프로젝트로 모듈화된 요소들을 이용하여 페이지를 제작하는 웹 페이지 에디터를 제작하였습니다. 불필요한 전역 상태 사용을 지양하기 위해 SWR을 이용하여 캐싱의 효과도 볼 수 있었고, 필요하면 직접 API를 제작하기도 하여 백엔드 개발과 프론트 개발 모두 작업했습니다.',
    links: []
  },
  {
    title: 'Key-visual 이미지 생성 서비스 PIXVAS',
    desc: '생성형 AI를 이용하여 이미지를 생성, 수정할 수 있는 서비스 입니다.',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'styled-component', 'python', 'zustant']
      },
      {
        type: 'CI/CD',
        skillTitle: ['tencent-cloud', 'jenkins']
      }
    ],
    feeling:
      '프롬프트를 기반으로 이미지를 생성하거나, 이미지를 수정할 수 있는 서비스 입니다. OpenPose서비스를 이용하여 사람의 동작이나 포즈를 추출하는 기능과 텍스트를 사용하는 기능을 메인으로 맡았습니다. ',
    links: []
  }
];

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
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
