"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiCrunchyroll } from "react-icons/si";
import {
  Header,
  Nav,
  Background,
  Sidebar,
  MainContent,
  ToggleButton,
  CrunchyrollLink,
} from "../app/home";

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
  const [showGif, setShowGif] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

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

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

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
      <Sidebar className={sidebarVisible ? "open" : ""}>
        <Nav>
          <Link href="/characters">Personagens</Link>
          <Link href="/episodies">Episódios</Link>
          <Link href="/about">Sobre o Anime</Link>
        </Nav>
      </Sidebar>

      <ToggleButton onClick={toggleSidebar}>
        {sidebarVisible ? <FaTimes size={30} /> : <FaBars size={30} />}
      </ToggleButton>

      <MainContent>
        <Header>
          <h1>{anime.title}</h1>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
        </Header>
      </MainContent>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <CrunchyrollLink
          href="https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba"
          target="_blank"
        >
          <SiCrunchyroll size={40} />
          <span>Crunchyroll</span>
        </CrunchyrollLink>
      </div>
    </Background>
  );
}
