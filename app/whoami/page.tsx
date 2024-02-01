import { FallingBg } from 'src/components/molecules';

import { PortpolloTmp } from 'src/components/templates';
import styled from 'styled-components';

const Wrapper = styled.div<{ darkMode: boolean }>`
  background-color: var(--bg-main);
  color: var(--text-main);

  transition:
    background-color 400ms linear,
    color 400ms linear;
`;

const WhoAmIPage = () => {
  return (
    <Wrapper className={'dark'} darkMode={true}>
      <FallingBg amount={30} />
      <PortpolloTmp />
    </Wrapper>
  );
};

export default WhoAmIPage;
