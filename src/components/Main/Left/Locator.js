import styled from 'styled-components';

export const Locator = styled.span.attrs((props) => ({
  className: 'material-icons-outlined'
}))`
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;

  font-size: 2.2rem;
  line-height: 4rem;
  text-align: center;
  color: #E7E7EB;
`;