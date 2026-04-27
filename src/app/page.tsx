"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Play } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

const DEFAULT_BANNERS = [
  {
    id: "def-b1",
    title: "AVATAR",
    subTitle: "OLOV VA KUL | 2025",
    img: "https://images6.alphacoders.com/129/1297125.jpg"
  },
  {
    id: "def-b2",
    title: "GLADIATOR 2",
    subTitle: "DRAMA, TARIXIY | 2024",
    img: "https://images8.alphacoders.com/133/1339121.jpg"
  }
];

const DEFAULT_MOVIES = [
  { id: 101, title: "Oppenheimer", rating: "9.0", year: "2023", img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2UxN2Y5NTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
  { id: 102, title: "Dune: Part Two", rating: "8.8", year: "2024", img: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" },
  { id: 103, title: "Spider-Man", rating: "8.4", year: "2023", img: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" },
  { id: 104, title: "John Wick 4", rating: "8.1", year: "2023", img: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg" },
  { id: 105, title: "The Dark Knight", rating: "9.0", year: "2008", img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" },
  { id: 106, title: "Interstellar", rating: "8.7", year: "2014", img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" }
];

export default function HomePage() {
  const [banners, setBanners] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const localBanners = localStorage.getItem("banners");
    const localMovies = localStorage.getItem("movies");

    if (localBanners) {
      const parsedBanners = JSON.parse(localBanners);
      setBanners(parsedBanners.length > 0 ? parsedBanners : DEFAULT_BANNERS);
    } else {
      setBanners(DEFAULT_BANNERS);
    }

    if (localMovies) {
      const parsedMovies = JSON.parse(localMovies);
      setMovies(parsedMovies.length > 0 ? parsedMovies : DEFAULT_MOVIES);
    } else {
      setMovies(DEFAULT_MOVIES);
    }
  }, []); 

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">

      <section className="h-[85vh] w-full relative">
        {banners.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {banners.map((b) => (
              <SwiperSlide key={b.id}>
                <div className="relative h-full w-full flex items-center px-8 md:px-16 overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>

                  <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic text-[#00FF41]">
                      {b.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mt-4 font-medium">
                      {b.subTitle}
                    </p>
                    <div className="flex gap-4 mt-8">
                      <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95">
                        <Play size={20} fill="currentColor" /> Ko'rish
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-8 bg-[#4CAF50] rounded-full"></div>
          <h2 className="text-3xl font-bold tracking-tight">Yangi Filmlar</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {movies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 border border-gray-800 shadow-xl transition-all duration-300 group-hover:border-[#4CAF50]/50 group-hover:-translate-y-2">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-bold text-[15px] truncate group-hover:text-[#4CAF50] transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
                  <Star size={14} fill="currentColor" /> {movie.rating}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {movie.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}