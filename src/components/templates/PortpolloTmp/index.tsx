import { About } from 'src/components/organisms';
import styled from 'styled-components';

const PortpolloTmpContainer = styled.div`
  padding: 0px 10px;
`;

export const PortpolloTmp = () => {
  return (
    <PortpolloTmpContainer>
      <About />
    </PortpolloTmpContainer>
  );
};
