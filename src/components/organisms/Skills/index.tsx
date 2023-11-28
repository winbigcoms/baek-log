import styled from 'styled-components';

import { skillSet } from 'src/const';

const SkiilConatiner = styled.article`
  padding-top: 30px;

  & > div {
    margin: auto;
  }

  div {
    max-width: 1024px;

    h2 {
      margin-bottom: 15px;
      text-align: center;
      font-size: 30px;
    }
  }
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .skill_box {
    max-width: 350px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;

    .skill_info {
      font-weight: 400;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      img {
        padding: 10px;
        width: 100px;
        object-fit: contain;
        background-color: #fff;
        flex: 0 0 20%;
      }

      &:first-child {
        margin-top: 15px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    & > div {
      width: 100%;
    }
  }
`;

export const Skills = () => {
  return (
    <SkiilConatiner>
      <div>
        <h2>MY SKILLS</h2>
        <SkillBox>
          {skillSet.map(skill => (
            <div key={skill.title} className='skill_box'>
              <div className='skill_title' style={{ textAlign: 'center' }}>
                {skill.title}
              </div>
              <div className='skill_info'>
                {skill.contents &&
                  skill.contents
                    .split(',')
                    .map(text => (
                      <img key={text} src={`/assets/img/logo/${text.trim()}.png`} alt={text} />
                    ))}
              </div>
            </div>
          ))}
        </SkillBox>
      </div>
    </SkiilConatiner>
  );
};
