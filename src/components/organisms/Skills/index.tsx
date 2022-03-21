import styled from 'styled-components';

import { skillSet } from 'src/const';

const SkiilConatiner = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: auto;

  h2 {
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
  }
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 33%;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;

    div {
      font-weight: 400;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      img {
        width: 100px;
        object-fit: contain;
        margin-bottom: 10px;

        margin-right: 10px;
      }

      &:first-child {
        margin-top: 15px;
      }
    }
  }
`;

export const Skills = () => {
  return (
    <SkiilConatiner>
      <h2>MY SKILLS</h2>
      <SkillBox>
        {skillSet.map(skill => (
          <div key={skill.title}>
            {skill.title}
            <div>
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
    </SkiilConatiner>
  );
};
