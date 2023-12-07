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
        skillTitle: ['React', 'electron', 'styled-component']
      },
      {
        type: 'CI/CD',
        skillTitle: ['AWS S3', 'ec2', 'jenkins']
      }
    ],
    feeling:
      '가맹점용 윈도우 프로그램으로 electron.js와 React.js로 개발했습니다. 기획팀과 디자인팀 같이 다른 팀과의 협업 또 NFC기능을 이용하기 위해 다른 회사의 개발자와 소통하여 개발을 진행하여 성공적으로 가맹점에 설치하고 운용할 수 있었습니다.',
    links: []
  },
  {
    title: '미래에셋페이 백오피스(2021.05 ~ 2021.12)',
    desc: '미래에셋페이 앱의 통계 및 고객관리 어드민',
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'redux-toolkit', 'styled-component']
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
    desc: '지류 전단 및 모바일 전단지 제작 서비스',
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'web-socket', 'styled-component']
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
    title: 'MINIPIE(2022.05 ~ 2022.12)',
    desc: 'React, typescript를 이용한 웹 페이지 제작 에디터 개발',
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'styled-component', 'swr']
      },
      {
        type: 'CI/CD',
        skillTitle: ['tencent-cloud', 'jenkins']
      }
    ],
    feeling:
      '위쳇 앱에서 페이지를 만들어주는 미니파이라는 프로젝트로 모듈화된 요소들을 이용하여 페이지를 제작하는 웹 페이지 에디터를 제작하였습니다. 불필요한 전역 상태 사용을 지양하기 위해 SWR을 이용하여 캐싱의 효과도 볼 수 있었고, 필요하면 직접 API를 제작하기도 하여 백엔드 개발과 프론트 개발 모두 작업했습니다.',
    links: []
  },
  {
    title: 'Key-visual 이미지 생성 서비스 PIXVAS',
    desc: '생성형 AI를 이용하여 이미지를 생성, 수정할 수 있는 서비스.',
    skill: [
      {
        type: '프론트',
        skillTitle: ['React', 'styled-component', 'fastApi', 'zustant']
      },
      {
        type: 'CI/CD',
        skillTitle: ['tencent-cloud', 'jenkins']
      }
    ],
    feeling:
      '프롬프트를 기반으로 이미지를 생성하거나, 이미지를 수정할 수 있는 서비스 입니다. 이미지에서 인물의 포즈를 추출하거나, "OpenPose" 라는 오픈소스를 이용하여 사람의 동작이나 포즈를 추출하는 기능과 텍스트를 사용하는 기능을 메인으로 맡았습니다. ',
    links: []
  },
  {
    title: '자사 이벤트관리 서비스',
    desc: '이벤트의 서버와 db, 페이지를 관리할 수 있는 서비스',
    skill: [
      {
        type: '프론트/백엔드',
        skillTitle: ['React', 'nestjs', 'antd', 'SWR']
      },
      {
        type: 'CI/CD',
        skillTitle: ['aws', 'docker']
      }
    ],
    feeling:
      'aws의 ec2를 이용하여 사용자가 간편하게 이벤트 페이지 서버를 키고 이벤트를 열 수 있는 서비스입니다. 클릭 하나로 ec2, target-group, route53 등을 이용하여 이벤트 환경을 구축할 수 있게 작업했습니다.',
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
