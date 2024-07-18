import styled from "styled-components";

export const BannerContainer = styled.div`
  background: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TitleContainer = styled.div`
  // background-color: rgba(69, 110, 42, 0.5);
  border-radius: 20px;
  padding: 3px 25px;
`;

export const BannerTitle = styled.h1`
  font-size: 4rem;
  color: #f6f6f9;
  font-weight: 700;
`;

export const BannerText = styled.p`
  margin-top: 0.3rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #ffffff;
  text-align: center;
  max-width: 1000px;

  span {
    color: #f6f6f9;
    font-weight: 600;
    // background-color: rgba(69, 110, 42, 0.5);
    // padding: 0px 10px;
    // border-radius: 10px;
    // display: inline-block;
  }
`;

export const Hr = styled.hr`
  width: 80%;
  height: 2px;
  background-color: #456e2a;
  border: none;
  margin: 8px auto;
`;
