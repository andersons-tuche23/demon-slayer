import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
  }
`;

export const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  div {
    text-align: center;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
  }

  img {
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  a {
    font-size: 0.9rem;
    color: #0073e6;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #005bb5;
      text-decoration: underline;
    }
  }
`;

export const MediaQueries = styled.div`
  @media (max-width: 768px) {
    ${Header} {
      padding: 20px;
    }

    ${CharacterList} {
      padding: 10px;
    }

    div {
      padding: 15px;
    }
  }
`;
