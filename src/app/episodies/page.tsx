"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  EpisodesContainer,
  EpisodeCard,
  EpisodeTitle,
  EpisodeInfo,
  EpisodeActions,
  BackButton,
} from "./episodes";

interface Episode {
  mal_id: number;
  title: string;
  title_japanese?: string;
  title_romanji?: string;
  aired: string;
  filler: boolean;
  recap: boolean;
  score?: number;
  url: string;
  forum_url: string;
}

export default function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime/38000/episodes"
        );
        const data = await response.json();
        setEpisodes(data.data);
      } catch (error) {
        console.error("Erro ao carregar episódios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  if (loading) return <div>Carregando episódios...</div>;

  return (
    <EpisodesContainer>
      <BackButton onClick={() => router.push("/")}>Voltar para Home</BackButton>

      {episodes.map((episode) => (
        <EpisodeCard key={episode.mal_id}>
          <EpisodeTitle>
            {episode.title}
            {episode.title_japanese && (
              <small> ({episode.title_japanese})</small>
            )}
          </EpisodeTitle>
          <EpisodeInfo>
            {episode.title_romanji && (
              <p>Romanizado: {episode.title_romanji}</p>
            )}
            <p>Exibido em: {new Date(episode.aired).toLocaleDateString()}</p>
            {episode.score && <p>Pontuação: {episode.score}</p>}
            {episode.filler && <span className="tag filler">Filler</span>}
            {episode.recap && <span className="tag recap">Recap</span>}
          </EpisodeInfo>
          <EpisodeActions>
            <a href={episode.url} target="_blank" rel="noopener noreferrer">
              Ver no MyAnimeList
            </a>
            <a
              href={episode.forum_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discussão no Fórum
            </a>
          </EpisodeActions>
        </EpisodeCard>
      ))}
    </EpisodesContainer>
  );
}
