import styled from 'styled-components';

const ArticleContainer = styled.div<{ color?: string }>`
  background-color: ${props => (props.color ? props.color : 'inherit')};
  padding: 50px 0px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PortpolloItemContainerElement = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0px 10px;
  text-align: center;

  & > h2 {
    font-size: 40px;
    text-align: center;
    padding-bottom: 15px;

    p {
      font-size: transparent;
    }
  }
`;

export const PortpolloItemContainer: React.FC<{
  color?: string;
  children: React.ReactNode | React.ReactNode[];
}> = ({ children, color }) => {
  return (
    <ArticleContainer color={color}>
      <PortpolloItemContainerElement>{children}</PortpolloItemContainerElement>
    </ArticleContainer>
  );
};
