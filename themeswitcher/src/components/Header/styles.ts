import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  justify-content: space-between;
`;
