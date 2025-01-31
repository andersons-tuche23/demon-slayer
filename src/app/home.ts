import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100vh; 
  background-image: url("/slayer.png");
  background-size: cover;
  background-position: center;
  position: relative; 
  flex-direction: column; 
  overflow: hidden; 
  
  @media (max-width: 768px) {
    flex-direction: column; 
    overflow: hidden; 
  }
`;


export const Sidebar = styled.div<{ visible: boolean }>`
  width: 250px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 95%;
    padding: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.3rem; 
    color: #fff;
    text-decoration: none;
    padding: 18px 30px; 
    border-radius: 8px;
    background-color: #ff5733;
    transition: background-color 0.3s, transform 0.3s, padding 0.3s;
    width: 100%; 
    max-width: 350px; 
    box-sizing: border-box; 

    &:hover {
      background-color: #ff4500;
      transform: translateX(5px);
      padding-left: 35px;
    }

    &:focus {
      outline: 3px solid #ff5733;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.2rem;
      padding: 16px 28px; 
      max-width: 280px; 
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 1.1rem; 
      padding: 14px 24px;
      max-width: 250px; 
    }
  }
`;

export const MainContent = styled.div`
  margin-left: 250px;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 0; 
    padding-top: 80px; 
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.8rem;
    color: #ffa500;
    animation: ${fadeIn} 1s ease-in-out;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem; 
    }
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.7);
    margin: 20px 0;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      max-width: 300px;
      margin-top: 0px; 
    }
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #ff5733;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(255, 87, 51, 0.5);

  &:hover {
    background-color: #ff4500;
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(255, 87, 51, 0.7);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    padding: 10px 20px; 
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: rotate(180deg); 
  }
`;

