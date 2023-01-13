import styled from 'styled-components';
import { ProjectItem } from './ProjectItem';

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;

  h2 {
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
  }
`;

const projects = [
  {
    title: 'shoot pos',
    desc: '미래에셋페이 앱과 연동되는 window pos시스템',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'electron', 'styled-component', 'css']
      },
      {
        type: 'CI/CD',
        skillTitle: ['AWS S3', 'jenkins']
      }
    ],
    feeling: '어려움',
    links: [
      {
        desc: '네이버',
        link: 'https://www.naver.com'
      }
    ]
  },
  {
    title: 'shoot pos',
    desc: '미래에셋페이 앱과 연동되는 window pos시스템',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'electron', 'styled-component', 'css']
      },
      {
        type: 'CI/CD',
        skillTitle: ['AWS S3', 'jenkins']
      }
    ],
    feeling: '어려움',
    links: [
      {
        desc: '네이버',
        link: 'https://www.naver.com'
      }
    ]
  },
  {
    title: 'shoot pos',
    desc: '미래에셋페이 앱과 연동되는 window pos시스템',
    skill: [
      {
        type: '프론트',
        skillTitle: ['react', 'electron', 'styled-component', 'css']
      },
      {
        type: 'CI/CD',
        skillTitle: ['AWS S3', 'jenkins']
      }
    ],
    feeling: '어려움',
    links: [
      {
        desc: '네이버',
        link: 'https://www.naver.com'
      }
    ]
  }
];

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      <div>
        <div className='projectContainer'>
          {projects.map(project => (
            <ProjectItem projectItemData={project} />
          ))}
        </div>
      </div>
    </ProjectsContainer>
  );
};
