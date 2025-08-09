import styled from 'styled-components';

interface ProjectItemProps {
  projectItemData: {
    title: string;
    desc: string;
    iDo: string[];
    skill: {
      type: string;
      skillTitle: string[];
    }[];
    feeling: string[];
    links: {
      link: string;
      desc: string;
    }[];
    mImgs: string[];
    lImgs: string[];
  };
}

const ProjectItemEle = styled.div`
  background-color: var(--bg-main);
  h3 ~ dl {
    padding: 0px 1rem;
  }

  dt,
  dd {
    margin: 0px;
    margin-bottom: 10px;
  }

  p {
    padding-left: 1rem;
  }

  ul {
    margin: 0px;
    padding: 0px;

    &.ido {
      li {
        margin-bottom: 0.5rem;
      }
    }
  }

  .project_header {
    display: flex;
    justify-content: space-between;

    .project_info {
      width: 42%;
    }
    .project_img {
      width: 55%;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        max-height: 300px;
        object-fit: contain;
      }
    }
  }
  .skills {
    display: flex;
    padding-left: 1rem;
    gap: 40px;

    dl {
      margin: 0px;
      flex: 1;
    }
  }

  .explain {
    p {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 800px) {
    .project_header {
      flex-direction: column-reverse;
      gap: 10px;

      & > div.project_img,
      div.project_info {
        width: 100%;
      }
    }
  }
`;

export const ProjectItem = (props: ProjectItemProps) => {
  const { projectItemData } = props;
  const { title, desc, skill, links, feeling, iDo, mImgs } = projectItemData;

  return (
    <ProjectItemEle data-aos='fade-up' data-aos-delay={100} data-aos-duration='700'>
      <h3>{title}</h3>
      <dl>
        <div className='project_header'>
          <div className='project_info'>
            <dt>소개</dt>
            <dd>
              <p>{desc}</p>
            </dd>
            <dt>I Do</dt>
            <dd>
              <ul className='ido'>
                {iDo.map((str, idx) => (
                  <li key={idx}>
                    <p>{str}</p>
                  </li>
                ))}
              </ul>
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
          </div>
          <div className='project_img'>{mImgs[0] && <img src={mImgs[0]} alt='projectImg' />}</div>
        </div>
        <dt>설명</dt>
        <dd
          style={{
            lineHeight: 1.3
          }}
          className='explain'
        >
          {feeling.map((feel, idx) => (
            <p key={idx}>{feel}</p>
          ))}
        </dd>
        {Boolean(links.length) && (
          <>
            <dt>링크</dt>
            <dd>
              {links.map(({ desc, link }) => (
                <a href={link} key={desc} target='_blank' rel='noreferrer'>
                  <u>{desc}</u>
                </a>
              ))}
            </dd>
          </>
        )}
      </dl>
    </ProjectItemEle>
  );
};
