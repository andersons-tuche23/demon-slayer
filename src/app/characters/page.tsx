"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Container, Header, CharacterList } from "./characters";

interface Character {
  name: string;
  role: string;
  image_url: string;
  url: string;
}

interface ApiCharacter {
  name: string;
  role: string;
  images: {
    jpg?: {
      image_url: string;
    };
  };
  url: string;
}

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime/38000/characters"
        );
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const data = await response.json();
        if (data.data && Array.isArray(data.data)) {
          setCharacters(
            data.data.map(
              (item: { character: ApiCharacter; role: string }) => ({
                name: item.character.name,
                role: item.role,
                image_url: item.character.images?.jpg?.image_url || "",
                url: item.character.url,
              })
            )
          );
        } else {
          throw new Error("Personagens não encontrados");
        }
      } catch (error) {
        console.error("Erro ao buscar personagens: ", error);
        setError("Erro ao buscar personagens.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Carregando personagens...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Header onClick={() => router.push("/")}>
        {" "}
        <h1>Personagens de Demon Slayer</h1>
      </Header>
      <CharacterList>
        {characters.map((character, index) => {
          const key =
            character.name && character.url
              ? `${character.name}-${character.url}`
              : `${index}`;

          return (
            <div key={key}>
              {character.image_url ? (
                <img src={character.image_url} alt={character.name} />
              ) : (
                <div>Imagem não disponível</div>
              )}
              <h2>{character.name}</h2>
              <p>{character.role}</p>
              <a href={character.url} target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
            </div>
          );
        })}
      </CharacterList>
    </Container>
  );
}
