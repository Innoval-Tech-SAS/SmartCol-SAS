import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 450px;

  div {
    border-radius: 20px;
    padding: 3px 25px;
    cursor: pointer;
  }

  h1 {
    font-size: 4rem;
    color: #f6f6f9;
    font-weight: 700;
  }

  span {
    color: #f6f6f9;
    font-weight: 600;
    margin-top: 0.3rem;
    font-size: 1.25rem;
    line-height: 1.5;
    text-align: center;
    max-width: 1000px;
  }
`;
