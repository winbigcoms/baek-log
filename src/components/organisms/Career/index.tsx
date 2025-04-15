import { PortpolloItemContainer } from 'src/components/atoms';

const myCareer = [
  {
    name: 'IMFORM',
    period: ['2021.01.02', '2024.01.10'],
    desc: '모바일 솔루션 회사 아이엠폼의 미래에셋페이, Catalog등 다양한 프로젝트에 참여했습니다.'
  },
  {
    name: 'Lion Rocket',
    period: ['2024.07.28'],
    desc: '전문가용 이미지 생성 서비스 GENVAS를 개발하였습니다.'
  }
];

export const Career = () => {
  return (
    <PortpolloItemContainer>
      <h2 tabIndex={1}>커리어</h2>
      {myCareer.map((career, idx) => {
        return (
          <div
            key={career.name}
            data-aos='fade-up'
            data-aos-delay={idx * 100}
            data-aos-duration='700'
            className='career_box slide_when_moblie'
          >
            <div>
              <div>{career.name}</div>
              <div>
                {career.period[0]}
                <span style={{ margin: '0px 6px' }}>~</span>
                {career.period[1] || '재직중'}
              </div>
            </div>
            <div
              style={{
                maxWidth: 400,
                minWidth: 200,
                width: '60%',
                wordBreak: 'keep-all',
                fontSize: 16
              }}
            >
              {career.desc}
            </div>
          </div>
        );
      })}
    </PortpolloItemContainer>
  );
};
