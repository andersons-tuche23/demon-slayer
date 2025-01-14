"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header, Nav, Background, Button, Synopsis } from "../app/home";

interface Image {
  jpg: {
    image_url: string;
  };
}

interface AnimeApiResponse {
  title: string;
  title_english: string;
  images: Image;
  synopsis: string;
  url: string;
  title_synonyms: string[];
  background?: string;
}

export default function Home() {
  const [anime, setAnime] = useState<AnimeApiResponse | null>(null);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const gifTimer = setTimeout(() => setShowGif(false), 3000);
    return () => clearTimeout(gifTimer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime?q=Demon Slayer"
        );
        const data = await response.json();

        console.log(data, "du zé ruela");

        const demonSlayer = data.data.find(
          (a: AnimeApiResponse) =>
            a.title.toLowerCase().includes("demon slayer") ||
            a.title_english?.toLowerCase().includes("demon slayer") ||
            a.title_synonyms.some((synonym) =>
              synonym.toLowerCase().includes("demon slayer")
            )
        );

        if (demonSlayer) {
          setAnime({
            title: demonSlayer.title_english || demonSlayer.title,
            title_english: demonSlayer.title_english,
            images: demonSlayer.images,
            synopsis: demonSlayer.synopsis,
            url: demonSlayer.url,
            title_synonyms: demonSlayer.title_synonyms || [],
            background: demonSlayer.background,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  if (showGif) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <img
          src="/giphy.gif"
          alt="Bem-vindo ao Demon Slayer"
          style={{ width: "50%", maxWidth: "400px" }}
        />
      </div>
    );
  }

  if (!anime) {
    return <div>Carregando...</div>;
  }

  return (
    <Background>
      <div>
        <Header>
          <h1>{anime.title}</h1>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <Synopsis>
            <p>
              <strong>Sinopse:</strong>{" "}
              {showFullSynopsis
                ? anime.synopsis
                : `${anime.synopsis.slice(0, 150)}...`}
            </p>
            <Button onClick={() => setShowFullSynopsis(!showFullSynopsis)}>
              {showFullSynopsis ? "Mostrar menos" : "Leia mais"}
            </Button>
          </Synopsis>
          <Button as={Link} href={anime.url} target="_blank">
            Mais informações
          </Button>
        </Header>
        <Nav>
          <Link href="/characters">Personagens</Link>
          <Link href="/episodies">Episódios</Link>
          <Link href="/about">Sobre o Anime</Link>
        </Nav>
      </div>
    </Background>
  );
}
