import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  color: var(--primary);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
