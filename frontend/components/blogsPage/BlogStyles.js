import styled from "styled-components";

const Memo = styled.div`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 30% 1fr;
  justify-items: center;
  align-items: center;
  img {
    width: 100%;
    max-height: 15rem;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

export default Memo;
