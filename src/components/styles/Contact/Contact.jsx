import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: #456e2a;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 35px;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
`;

export const CustomButton = ({ title }) => {
  return <Button>{title}</Button>;
};

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  background: #e6e6e8;
`;

export const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 50%;

  h4 {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 1rem 0.9rem;
    color: #456e2a;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.5rem 0rem;
    color: #333;
  }
`;

const ButtonLarge = styled.button`
  background-color: #456e2a;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 35px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const ButtonIcon = ({ title, url }) => {
  return (
    <ButtonLarge>
      <Link to={url}>{title}</Link>
    </ButtonLarge>
  );
};

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 25%;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
`;

export const IconButton = ({ iconUrl, title, url }) => {
  return (
    <ImgContainer>
      <Img src={iconUrl} alt="" />
      <ButtonIcon title={title} url={url} />
    </ImgContainer>
  );
};

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

export const ListContainer = styled.div`
  display: flex;

  div {
    padding: 20px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 1.5rem;
    flex-wrap: wrap;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0rem 0rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    &:hover {
      cursor: pointer;
    }
  }
`;
