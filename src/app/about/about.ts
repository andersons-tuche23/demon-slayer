import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimeImage = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const TrailerContainer = styled.div`
  width: 100%;
  max-width: 560px;
  margin-bottom: 20px;

  iframe {
    width: 100%;
    height: 315px;
    border-radius: 10px;
  }
`;

export const Stats = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`;

export const CharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const CharacterCard = styled.div`
  width: 150px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;