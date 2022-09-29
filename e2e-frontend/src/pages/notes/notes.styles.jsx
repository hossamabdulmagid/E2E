import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const RapperNoteComponent = styled.article`
  min-height: 700px;
`;
export const LinK = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
    color: whitesmoke;
  }


`;
