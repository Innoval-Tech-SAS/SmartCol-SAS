import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  img {
    max-width: 150px;
    max-height: 150px;
    height: auto;
    width: auto;
  }

  h3 {
    color: #456e2a;
  }

  span {
    color: #e6d38e;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-top: 2px solid #456e2a;
  width: 100%;
  box-sizing: border-box;
`;

export const MenuContainer = styled.div`
  display: flex;

  ul {
    display: flex;
    width: auto;
    height: 100%;
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
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;

  div {
    display: flex;
    padding-left: 15px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ value }) => (value ? "#ffffff" : "#456E2A")};
  border: 1px solid ${({ value }) => (value ? "#456E2A" : "#ffffff")};
  border-radius: 20px;
  padding: 5px 20px;

  span {
    position: absolute;
    top: 0%;
    right: 10px;
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
