"use client";
import React, { useEffect, useState, memo, useCallback } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import {
  Youtube,
  PlayCircle,
  ChevronRight,
  Loader2,
  Tv,
  Heart,
  BookOpen,
} from "lucide-react";
import axios from "axios";

// Configuration
const CHANNEL_HANDLE = "@devunisparsha";
const API_CHANNEL_ID = "UCtBqdgXf6fmgAVYT1X-_aDA";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface Playlist {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

// Live playlist data from the channel as fallback
const FALLBACK_PLAYLISTS: Playlist[] = [
  {
    id: "PLz79P3TW12AZpp37rKeI0QbKqR1689BIO",
    title: "Sunday Worships Live",
    description:
      "Join us every Sunday for a powerful time of worship and the Word.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AZpp37rKeI0QbKqR1689BIO`,
    thumbnailUrl: "https://i.ytimg.com/vi/u1yqPtCXTGA/hqdefault.jpg",
  },
  {
    id: "PLz79P3TW12AYMhcf1qvN2mF9NmQlYVk3p",
    title: "Messages | Devuni Sparsha",
    description:
      "A collection of transformative messages shared at Epaphras Ministries.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AYMhcf1qvN2mF9NmQlYVk3p`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/Hb39PjYsdA0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAZZzVJdNhwhJ5AFE8i_qJ7QCVSBw",
  },
  {
    id: "PLz79P3TW12AZU2JmOxKnveVXWJSV6m02T",
    title: "Youth Meetings Live",
    description: "Empowering the next generation through faith and fellowship.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AZU2JmOxKnveVXWJSV6m02T`,
    thumbnailUrl: "https://i.ytimg.com/vi/llZ9nWHTGug/hqdefault.jpg",
  },
  {
    id: "PLz79P3TW12AbBOT9-7XFWxvj-4lVxvlfV",
    title: "Saturday Fasting Prayers Live",
    description:
      "Deepening our connection with God through fasting and prayer.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AbBOT9-7XFWxvj-4lVxvlfV`,
    thumbnailUrl: "https://i.ytimg.com/vi/Yu1Iw4Iiqmo/hqdefault.jpg",
  },
  {
    id: "PLz79P3TW12AamCFsHtXoy6OoexIc58NJC",
    title: "Christmas Celebrations 2025",
    description: "Rejoicing in the birth of our Savior with special messages.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AamCFsHtXoy6OoexIc58NJC`,
    thumbnailUrl: "https://i.ytimg.com/vi/O57Zkn8vwRI/hqdefault.jpg",
  },
  {
    id: "PLz79P3TW12Aa5J_pTNa1hW-FaLD1vpNws",
    title: "The 7 Habits Series",
    description:
      "Biblical principles applied to personal and spiritual growth.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12Aa5J_pTNa1hW-FaLD1vpNws`,
    thumbnailUrl: "https://i.ytimg.com/vi/ageeFiGsD-U/hqdefault.jpg",
  },
  {
    id: "PLz79P3TW12AakDLFLO3aDgXJEAr5mKevK",
    title: "Women's Meeting Live",
    description: "Special gathering for women to be encouraged and inspired.",
    youtubeUrl: `https://www.youtube.com/playlist?list=PLz79P3TW12AakDLFLO3aDgXJEAr5mKevK`,
    thumbnailUrl: "https://i.ytimg.com/vi/ccz3NHNPe40/hqdefault.jpg",
  },
];

const MessagePage: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        if (!API_KEY) {
          console.warn("YouTube API Key missing. Showing fallback content.");
          // Use hardcoded IDs or generic links for fallbacks
          setPlaylists(FALLBACK_PLAYLISTS);
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists`,
          {
            params: {
              part: "snippet,contentDetails",
              channelId: API_CHANNEL_ID,
              maxResults: 50,
              key: API_KEY,
            },
          },
        );

        const items = response.data.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          description:
            item.snippet.description ||
            "Watch our latest teaching series and worship sessions.",
          youtubeUrl: `https://www.youtube.com/playlist?list=${item.id}`,
          thumbnailUrl:
            item.snippet.thumbnails.high?.url ||
            item.snippet.thumbnails.standard?.url ||
            item.snippet.thumbnails.default?.url,
        }));

        setPlaylists(items.length > 0 ? items : FALLBACK_PLAYLISTS);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching YouTube playlists:", err);
        setError("Unable to load live playlists. Showing archive.");
        setPlaylists(FALLBACK_PLAYLISTS);
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Scripture Header */}
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <BookOpen className="text-primary" size={24} />
          </div>
          <p className="text-gray-500 italic font-medium text-center max-w-lg leading-relaxed">
            "Faith comes from hearing, and hearing through the word of Christ."
            <span className="block mt-2 font-bold not-italic text-xs uppercase tracking-[0.2em] text-primary/60">
              Romans 10:17
            </span>
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-8" />
        </div>

        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary mb-6">
            Digital <span className="text-secondary">Sanctuary</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Experience our messages, worship, and series dynamically updated
            from our official channel. Grow with us wherever you are.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-gray-400 font-medium animate-pulse">
              Gathering messages...
            </p>
          </div>
        ) : (
          <LazyMotion features={domAnimation}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {playlists.map((playlist, index) => (
                  <m.div
                    key={playlist.id + index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: Math.min(index * 0.05, 0.3),
                      duration: 0.4,
                    }}
                    className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-premium border border-gray-100 hover:border-primary/20 transition-colors"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={playlist.thumbnailUrl}
                        alt={playlist.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <PlayCircle
                          size={64}
                          className="text-white transform scale-90 group-hover:scale-100 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center gap-1 shadow-lg">
                        <Youtube size={12} />
                        PLAYLIST
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-primary/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                        <Tv size={14} />
                        <span>Series & Collections</span>
                      </div>
                      <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                        {playlist.title}
                      </h2>
                      <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                        {playlist.description}
                      </p>
                      <a
                        href={playlist.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-black group-hover:gap-4 transition-all"
                      >
                        Watch Series <ChevronRight size={20} />
                      </a>
                    </div>
                  </m.div>
                ))}
              </AnimatePresence>
            </div>
          </LazyMotion>
        )}

        {/* Call to Action */}
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="mt-24 p-12 bg-primary rounded-[3rem] text-center relative overflow-hidden shadow-premium group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                <Youtube size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-6">
                Never Miss a Word
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto">
                Subscribe to our YouTube channel to get notified whenever we
                post new messages, series, or go live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://www.youtube.com/${CHANNEL_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 py-5 bg-white text-primary rounded-2xl font-black text-lg hover:bg-secondary hover:text-white transition-all shadow-xl"
                >
                  Subscribe on YouTube
                </a>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold backdrop-blur-sm">
                  <Heart size={16} className="text-secondary" />
                  Join 10.5K+ Subscribers
                </div>
              </div>
            </div>
          </m.div>
        </LazyMotion>
      </div>
    </main>
  );
};

export default MessagePage;
