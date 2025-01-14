import styled from "styled-components";

export const Background = styled.div`
  background-image: url("/slayer.png");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.8rem;
    color: #ffa500;
    animation: fadeIn 1s ease-in-out;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.7);
    margin: 20px 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  a {
    font-size: 1.2rem;
    color: #ffa500;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    background: rgba(255, 165, 0, 0.2);
    transition: background 0.3s;

    &:hover {
      background: rgba(255, 165, 0, 0.5);
    }
  }
`;

export const Button = styled.button`
  background-color: #ffa500;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

export const Synopsis = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }
`;
