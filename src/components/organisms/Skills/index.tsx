import styled from 'styled-components';

import { skillDesc } from 'src/const';
import { Fragment } from 'react';

const SkiilConatiner = styled.article`
  background-color: var(--bg-main);
  padding-top: 30px;

  & > div {
    margin: auto;
    padding: 20px;
  }

  div {
    max-width: 1024px;

    h2 {
      margin-bottom: 15px;
      text-align: center;
      font-size: 30px;
      z-index: 1;
      position: relative;
    }

    h3 {
      z-index: 1;
      position: relative;
    }
  }
`;

const SkillStringBox = styled.div`
  li {
    list-style: disc;
    word-break: keep-all;

    span {
      position: relative;
      z-index: 1;
    }
  }
`;

export const Skills = () => {
  return (
    <SkiilConatiner>
      <div>
        <h2 tabIndex={1}>기 술</h2>
        <SkillStringBox>
          {skillDesc.map(({ title, skill }) => (
            <Fragment key={title}>
              <h3>{title}</h3>
              <ul style={{ lineHeight: '1.2' }}>
                {skill.map((str, idx) => (
                  <li key={title + idx} style={{ marginBottom: 5 }}>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </SkillStringBox>
      </div>
    </SkiilConatiner>
  );
};
