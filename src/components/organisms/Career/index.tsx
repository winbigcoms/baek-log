import { PortpolloItemContainer } from 'src/components/atoms';
import styled from 'styled-components';

const myCareer = [
  {
    name: 'IMFORM',
    period: ['2021.01.02', '']
  }
];

const CareerEle = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 35px;
  }
`;
export const Career = () => {
  return (
    <PortpolloItemContainer>
      <h2>커리어</h2>
      {myCareer.map(career => {
        return (
          <div key={career.name} data-aos='fade-up'>
            <div>{career.name}</div>
            <div>
              {career.period[0]}~{career.period[1] || '재직중'}
            </div>
          </div>
        );
      })}
    </PortpolloItemContainer>
  );
};
