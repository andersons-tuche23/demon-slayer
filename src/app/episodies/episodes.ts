import styled from "styled-components";

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(135deg, #c0392b, #e74c3c);
    transform: translateY(-2px);
  }
`;

export const EpisodeCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #e8e8e8);
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const EpisodeTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: #3498db;
    border-radius: 4px;
    margin-top: 8px;
  }

  small {
    font-size: 14px;
    color: #7f8c8d;
    margin-left: 10px;
  }
`;

export const EpisodeInfo = styled.div`
  font-size: 15px;
  color: #34495e;
  line-height: 1.6;

  p {
    margin: 5px 0;
    font-weight: 500;
  }

  .tag {
    display: inline-block;
    padding: 6px 12px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .filler {
    background: linear-gradient(135deg, #e67e22, #f39c12);
  }

  .recap {
    background: linear-gradient(135deg, #2980b9, #3498db);
  }
`;

export const EpisodeActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: linear-gradient(135deg, #27ae60, #2ecc71);
      transform: translateY(-3px);
    }
  }
`;
