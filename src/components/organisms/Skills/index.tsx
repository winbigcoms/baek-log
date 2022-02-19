import styled from 'styled-components';

const SkiilConatiner = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const skillSet = [
  {
    title: 'HTML',
    contents: 'HTML5, sementic Tag'
  },
  {
    title: 'css3',
    contents: 'box model, selector'
  },
  {
    title: 'Javascript',
    contents: 'ES5, ES Next'
  },
  {
    title: 'typescript',
    contents: 'generic'
  },
  {
    title: 'React.js',
    contents: 'functional component, custom hooks'
  },
  {
    title: 'Next.js',
    contents: 'SSG, SSR'
  },
  {
    title: 'State management',
    contents: 'Redux, Mobx'
  },
  {
    title: 'Electron.js',
    contents: 'window app'
  },
  {
    title: 'Node.js',
    contents: 'express.js'
  },
  {
    title: 'database',
    contents: 'mysql, mongoDB'
  },
  {
    title: 'design tool',
    contents: 'figma, photoshop'
  }
];

export const Skills = () => {
  return (
    <SkiilConatiner>
      <h2>MY SKILL</h2>
      <SkillBox>
        {skillSet.map(skill => (
          <div>
            {skill.title}
            <div>{skill.contents}</div>
          </div>
        ))}
      </SkillBox>
    </SkiilConatiner>
  );
};
