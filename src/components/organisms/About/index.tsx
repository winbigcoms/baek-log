import styled from 'styled-components';

import { AboutItem } from 'src/components/molecules';

import { aboutCategory } from 'src/const';
import { PortpolloItemContainer } from 'src/components/atoms';
import { useCollapse } from 'src/Hooks';

const AboutMyData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const About = () => {
  const [isCollapsed, changeCollapse] = useCollapse();

  return (
    <PortpolloItemContainer>
      <h2 onClick={() => changeCollapse()}>ABOUT ME</h2>
      <AboutMyData
        style={{
          height: isCollapsed ? '0px' : 'auto',
          overflow: 'hidden'
        }}
      >
        {aboutCategory.map((data, key) => (
          <AboutItem aboutCategory={data} key={key} />
        ))}
      </AboutMyData>
    </PortpolloItemContainer>
  );
};
