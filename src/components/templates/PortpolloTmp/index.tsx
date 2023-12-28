import { Skills, Introduce, Projects, Career } from 'src/components/organisms';

export const PortpolloTmp = () => {
  return (
    <div>
      <h1 className='a11y-hidden' tabIndex={1}>
        기술 이력서
      </h1>
      <Introduce />
      <Career />
      <Projects />
      <Skills />
    </div>
  );
};
