"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AudioTrack = {
  title: string;
  file: string;
};

const storageKeys = {
  volume: "icarus-audio-volume",
  selectedTrack: "icarus-audio-selected-track",
  isOpen: "icarus-audio-player-open",
};

function getStoredBoolean(value: string | null, fallback: boolean) {
  if (value === null) {
    return fallback;
  }

  return value === "true";
}

function getStoredVolume(value: string | null) {
  if (value === null) {
    return 0.45;
  }

  const parsedVolume = Number(value);
  return Number.isFinite(parsedVolume) ? Math.min(1, Math.max(0, parsedVolume)) : 0.45;
}

export default function IcarusAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [tracks, setTracks] = useState<AudioTrack[]>([]);
  const [selectedTrackFile, setSelectedTrackFile] = useState<string>("");
  const [volume, setVolume] = useState(0.45);
  const [isOpen, setIsOpen] = useState(true);
  const [isLooping, setIsLooping] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setVolume(getStoredVolume(window.localStorage.getItem(storageKeys.volume)));
    setSelectedTrackFile(window.localStorage.getItem(storageKeys.selectedTrack) ?? "");
    setIsOpen(getStoredBoolean(window.localStorage.getItem(storageKeys.isOpen), true));

    fetch("/api/audio-tracks")
      .then((response) => (response.ok ? response.json() : []))
      .then((loadedTracks: AudioTrack[]) => setTracks(Array.isArray(loadedTracks) ? loadedTracks : []))
      .finally(() => setHasLoaded(true));
  }, []);

  const selectedTrackIndex = useMemo(() => {
    if (tracks.length === 0) {
      return -1;
    }

    const persistedTrackIndex = tracks.findIndex((track) => track.file === selectedTrackFile);
    return persistedTrackIndex >= 0 ? persistedTrackIndex : 0;
  }, [selectedTrackFile, tracks]);

  const selectedTrack = selectedTrackIndex >= 0 ? tracks[selectedTrackIndex] : undefined;

  useEffect(() => {
    if (!selectedTrack) {
      return;
    }

    setSelectedTrackFile(selectedTrack.file);
  }, [selectedTrack]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.volume, String(volume));

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.isOpen, String(isOpen));
  }, [isOpen]);

  useEffect(() => {
    if (selectedTrackFile) {
      window.localStorage.setItem(storageKeys.selectedTrack, selectedTrackFile);
    }
  }, [selectedTrackFile]);

  function selectTrack(file: string) {
    setSelectedTrackFile(file);
    setIsPlaying(false);
  }

  function playAmbience() {
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }

  function pauseAmbience() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function moveTrack(direction: "next" | "previous") {
    if (tracks.length === 0) {
      return;
    }

    const nextIndex =
      direction === "next"
        ? (selectedTrackIndex + 1) % tracks.length
        : (selectedTrackIndex - 1 + tracks.length) % tracks.length;

    selectTrack(tracks[nextIndex].file);
  }

  if (!hasLoaded || tracks.length === 0 || !selectedTrack) {
    return null;
  }

  return (
    <aside className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:bottom-6 md:right-6 md:w-80" aria-label="Player de ambiência de Icarus RPG">
      <audio
        ref={audioRef}
        src={selectedTrack.file}
        loop={isLooping}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-auto flex rounded-full border border-gold/30 bg-abyss/90 px-4 py-3 text-sm font-semibold text-ember shadow-gold backdrop-blur-xl transition hover:border-mystic/50 hover:text-mystic"
        >
          Ambiência de Icarus
        </button>
      ) : (
        <div className="rounded-3xl border border-gold/25 bg-abyss/90 p-4 shadow-gold backdrop-blur-xl md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.28em] text-mystic/80">Ambiência</p>
              <h2 className="mt-1 font-display text-lg font-bold text-ember">{selectedTrack.title}</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-mystic/20 px-3 py-1 text-xs text-parchment/70 transition hover:border-gold/40 hover:text-ember"
              aria-label="Fechar player de ambiência"
            >
              Fechar
            </button>
          </div>

          {tracks.length > 1 ? (
            <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.18em] text-parchment/60">
              Faixa
              <select
                value={selectedTrack.file}
                onChange={(event) => selectTrack(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-mystic/20 bg-black/40 px-3 py-2 text-sm normal-case tracking-normal text-parchment outline-none transition focus:border-gold/50"
              >
                {tracks.map((track) => (
                  <option key={track.file} value={track.file} className="bg-abyss text-parchment">
                    {track.title}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={playAmbience}
              className="rounded-2xl border border-gold/40 bg-gold/15 px-3 py-2 text-sm font-semibold text-ember transition hover:-translate-y-0.5 hover:bg-gold/25"
            >
              Ativar Ambiência
            </button>
            <button
              type="button"
              onClick={pauseAmbience}
              className="rounded-2xl border border-mystic/35 bg-mystic/10 px-3 py-2 text-sm font-semibold text-mystic transition hover:-translate-y-0.5 hover:bg-mystic/20"
            >
              Pausar
            </button>
            <button
              type="button"
              onClick={() => moveTrack("previous")}
              className="rounded-2xl border border-parchment/15 bg-black/25 px-3 py-2 text-sm font-semibold text-parchment/80 transition hover:border-gold/35 hover:text-ember"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => moveTrack("next")}
              className="rounded-2xl border border-parchment/15 bg-black/25 px-3 py-2 text-sm font-semibold text-parchment/80 transition hover:border-gold/35 hover:text-ember"
            >
              Próxima
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] md:grid-cols-1">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-parchment/60">
              Volume
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="mt-2 w-full accent-mystic"
              />
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-mystic/15 bg-black/20 px-3 py-2 text-sm text-parchment/75">
              <input
                type="checkbox"
                checked={isLooping}
                onChange={(event) => setIsLooping(event.target.checked)}
                className="accent-gold"
              />
              Loop
            </label>
          </div>

          <p className="mt-3 text-xs text-parchment/45">
            {isPlaying ? "Ambiência ecoando pelo salão." : "Clique em Ativar Ambiência para iniciar."}
          </p>
        </div>
      )}
    </aside>
  );
}
