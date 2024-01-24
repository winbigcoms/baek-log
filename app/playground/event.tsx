import { FallingBg } from 'src/components/molecules';
import styled from 'styled-components';

const EventContainer = styled.div`
  min-height: calc(100vh - 172px);
  height: calc(100vh - 172px);
`;

const Event = () => {
  return (
    <>
      <FallingBg amount={20} />
      <EventContainer style={{ backgroundColor: '#000' }}>zzz</EventContainer>
    </>
  );
};

export default Event;
