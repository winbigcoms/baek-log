import styled from 'styled-components';

const MultiTwitchHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  background-color: #121212;
  border-bottom: 1px solid #ccc;

  color: #ddd;
  padding: 10px 0px;
  height: 50px;

  h2 {
    font-size: 1.5rem;
  }
`;

export const MultiTwitchHeader = () => {
  return (
    <MultiTwitchHeaderStyle>
      <h2>트위치 다중 시청</h2>
    </MultiTwitchHeaderStyle>
  );
};
