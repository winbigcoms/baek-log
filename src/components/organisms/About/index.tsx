import styled from 'styled-components';

import { AboutItem } from 'src/components/molecules';

import { aboutCategory } from 'src/const';
import { PortpolloItemContainer } from 'src/components/atoms';

const AboutMyData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const About = () => {
  return (
    <PortpolloItemContainer>
      <h2>ABOUT ME</h2>
      <AboutMyData>
        {aboutCategory.map((data, key) => (
          <AboutItem aboutCategory={data} key={key} />
        ))}
      </AboutMyData>
    </PortpolloItemContainer>
  );
};
