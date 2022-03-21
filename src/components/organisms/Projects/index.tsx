import styled from 'styled-components';

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

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
    </ProjectsContainer>
  );
};
