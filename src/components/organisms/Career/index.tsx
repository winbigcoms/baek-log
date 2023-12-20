import { PortpolloItemContainer } from 'src/components/atoms';

const myCareer = [
  {
    name: 'IMFORM',
    period: ['2021.01.02', '']
  }
];

export const Career = () => {
  return (
    <PortpolloItemContainer>
      <h2>커리어</h2>
      {myCareer.map((career, idx) => {
        return (
          <div
            key={career.name}
            data-aos='fade-up'
            data-aos-delay={idx * 100}
            data-aos-duration='700'
            className='career_box'
          >
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
