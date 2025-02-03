import styled from "styled-components";

export const MoreInfo = styled.a`
  margin-top: 20px;
  padding: 14px 28px;
  background-color: #ff6347;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 220px;
  margin: 20px auto;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #d9534f;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  background: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 3rem;
  text-transform: capitalize;
  background: linear-gradient(45deg, #007bff, #ff6347);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  padding-bottom: 12px;
  border-bottom: 4px solid #ff6347;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimeImage = styled.img`
  width: 280px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

export const TrailerContainer = styled.div`
  width: 100%;
  max-width: 560px;
  margin-bottom: 40px;
  margin-top: 30px;

  iframe {
    width: 100%;
    height: 315px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const Stats = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  width: 100%;
  max-width: 600px;
`;

export const CharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
  width: 100%;
`;

export const CharacterCard = styled.div`
  width: 180px;
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    text-transform: capitalize;
  }
`;