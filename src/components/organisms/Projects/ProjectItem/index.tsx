import styled from 'styled-components';

interface ProjectItemProps {
  projectItemData: {
    title: string;
    desc: string;
    skill: {
      type: string;
      skillTitle: string[];
    }[];
    feeling: string;
    links: {
      link: string;
      desc: string;
    }[];
  };
}

const ProjectItemEle = styled.div`
  width: calc(50% - 5px);

  h3 ~ dl {
    padding: 0px 1rem;
  }

  dt,
  dd {
    margin: 0px;
    margin-bottom: 10px;
  }

  p {
    text-indent: 1rem;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }
  .skills {
    display: flex;
    padding-left: 1rem;
    gap: 40px;

    dl {
      margin: 0px;
    }
  }
`;

export const ProjectItem = (props: ProjectItemProps) => {
  const { projectItemData } = props;
  const { title, desc, skill, links, feeling } = projectItemData;

  return (
    <ProjectItemEle>
      <h3>{title}</h3>
      <dl>
        <dt>소개</dt>
        <dd>
          <p>{desc}</p>
        </dd>
        <dt>기술 스택</dt>
        <dd className='skills'>
          {skill.map(skill => {
            const { skillTitle, type } = skill;
            return (
              <dl key={skillTitle.join('')}>
                <dt>{type}</dt>
                <dd>
                  <ul>
                    {skillTitle.map(title => (
                      <li key={title}>{title}</li>
                    ))}
                  </ul>
                </dd>
              </dl>
            );
          })}
        </dd>
        <dt>배운 점</dt>
        <dd
          style={{
            lineHeight: 1.5
          }}
        >
          {feeling}
        </dd>
        {Boolean(links.length) && (
          <>
            <dt>링크</dt>
            <dd>
              {links.map(({ desc, link }) => (
                <a href={link} key={desc} target='_blank'>
                  {desc}
                </a>
              ))}
            </dd>
          </>
        )}
      </dl>
    </ProjectItemEle>
  );
};
