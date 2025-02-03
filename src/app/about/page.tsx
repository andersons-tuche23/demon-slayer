"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Header,
  Content,
  AnimeImage,
  TrailerContainer,
  Stats,
  CharacterList,
  CharacterCard,
  MoreInfo,
} from "./about";

interface Anime {
  title: string;
  synopsis: string;
  studios: { name: string }[];
  rating: string;
  url: string;
  image: string;
  trailer?: { embed_url: string };
  year?: number;
  episodes?: number;
  duration?: string;
  genres: string[];
  score?: number;
  rank?: number;
  members?: number;
  popularity?: number;
  favorites?: number;
}

interface Character {
  name: string;
  image: string;
}

interface ApiCharacter {
  character: {
    name: string;
    images: { jpg: { image_url: string } };
  };
}

export default function About() {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime/38000/full"
        );
        if (!response.ok) throw new Error("Erro na requisição");
        const data = await response.json();
        const animeData = data.data;

        setAnime({
          title: animeData.title,
          synopsis: animeData.synopsis,
          studios: animeData.studios,
          rating: animeData.rating,
          url: animeData.url,
          image: animeData.images.jpg.image_url,
          trailer: animeData.trailer ? { embed_url: animeData.trailer.embed_url } : undefined,
          year: animeData.aired.prop.from.year,
          episodes: animeData.episodes,
          duration: animeData.duration,
          genres: animeData.genres.map((g: { name: string }) => g.name),
          score: animeData.score,
          rank: animeData.rank,
          members: animeData.members,
          popularity: animeData.popularity,
          favorites: animeData.favorites,
        });
      } catch (error) {
        console.error(error);
        setError("Erro ao buscar informações do anime.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimeInfo();
  }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime/38000/characters"
        );
        if (!response.ok) throw new Error("Erro na requisição");
        const data = await response.json();
        const characterList = data.data
          .slice(0, 5)
          .map((char: ApiCharacter) => ({
            name: char.character.name,
            image: char.character.images.jpg.image_url,
          }));
        setCharacters(characterList);
      } catch (error) {
        console.error("Erro ao buscar personagens", error);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) return <div>Carregando informações sobre o anime...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Header onClick={() => router.push("/")}>Sobre o Anime</Header>
      {anime && (
        <Content>
          <AnimeImage src={anime.image} alt={anime.title} />
          <h2>{anime.title}</h2>
          <p><strong>Sinopse:</strong> {anime.synopsis}</p>
          <Stats>
            <p>📊 <strong>Rank:</strong> #{anime.rank}</p>
            <p>👥 <strong>Membros:</strong> {anime.members}</p>
            <p>🔥 <strong>Popularidade:</strong> #{anime.popularity}</p>
            <p>⭐ <strong>Favoritos:</strong> {anime.favorites}</p>
          </Stats>
          {anime.trailer?.embed_url && (
            <TrailerContainer>
              <iframe src={anime.trailer.embed_url} title="Trailer do Anime" frameBorder="0" allowFullScreen />
            </TrailerContainer>
          )}
          <h3>Personagens Principais</h3>
          <CharacterList>
            {characters.map((char) => (
              <CharacterCard key={char.name}>
                <img src={char.image} alt={char.name} />
                <p>{char.name}</p>
              </CharacterCard>
            ))}
          </CharacterList>
          <MoreInfo href={anime.url} target="_blank" rel="noopener noreferrer">Saiba mais</MoreInfo>
        </Content>
      )}
    </Container>
  );
}
