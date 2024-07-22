import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 100px;
  color: #456e2a;

  img {
    width: auto;
    height: auto;
    max-height: 150px;
  }

  span {
    color: #e6d38e;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 4rem;
  border-top: 2px solid #456e2a;
`;

export const MenuContainer = styled.div`
  display: flex;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
  }

  li {
    margin-left: 60px;
  }

  a {
    color: #456e2a;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      color: #274017;
      text-shadow: 1px 1px 0px #274017;
    }
  }

  span {
    font-weight: 700;

    &:hover {
      color: #274017;
      text-shadow: 1px 1px 0px #274017;
      cursor: pointer;
    }
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;

  div {
    display: flex;
    padding-left: 1rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  background-color: ${({ value }) => (value ? "#ffffff" : "#456E2A")};
  border: 1px solid ${({ value }) => (value ? "#456E2A" : "#ffffff")};
  border-radius: 20px;
  padding: 5px 20px;

  span {
    position: absolute;
    top: -5%;
    right: 4%;
    color: ${({ value }) => (value ? "#456E2A" : "#ffffff")};
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${({ value }) => (value ? "#456E2A" : "#ffffff")};
  width: 200px;

  &::placeholder {
    color: ${({ value }) => (value ? "#456E2A" : "#ffffff")};
  }
`;
