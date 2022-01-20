import styled from "styled-components";

const StyledNavLinks = styled.div`
  display: flex;

  & > * {
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default StyledNavLinks;
