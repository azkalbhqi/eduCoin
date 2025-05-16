"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { FlipText } from "@/components/magicui/flip-text";
import { MagicCard } from "@/components/magicui/magic-card";

export default function PotensiPage() {
  return (
    <div className="relative min-h-screen px-4 py-16 flex flex-col items-center justify-start text-center bg-white overflow-hidden">
      <DotPattern
        className="opacity-30"
      />

      <div className="relative z-10 max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-10">
          <FlipText>Potensi Pengembangan EduCoin</FlipText> 
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          EduCoin tidak hanya sebagai token beasiswa, tetapi juga pondasi untuk sistem keuangan pendidikan yang transparan dan terdesentralisasi.
        </p>

        <BlurFade className="grid md:grid-cols-2 gap-6" inView>
          <MagicCard className="bg-white border border-gray-200 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">🎓 EduCoin Family Mode</h2>
            <p className="text-gray-700">
              Orang tua dapat mengirim dana pendidikan ke anak dengan kontrol penggunaan. Anak tidak bisa menyalahgunakan dana — hanya untuk merchant pendidikan.
            </p>
          </MagicCard>

          <MagicCard className="bg-white border border-gray-200 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">📚 Marketplace Edukasi Web3</h2>
            <p className="text-gray-700">
              EduCoin bisa digunakan di marketplace internal untuk membeli kursus, buku, pelatihan, atau keperluan sekolah — semua tercatat on-chain.
            </p>
          </MagicCard>

          <MagicCard className="bg-white border border-gray-200 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">🔍 Audit Transparan & Realtime</h2>
            <p className="text-gray-700">
              Setiap transaksi beasiswa dapat diaudit secara publik melalui dashboard berbasis blockchain explorer.
            </p>
          </MagicCard>

          <MagicCard className="bg-white border border-gray-200 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">🌐 DAO Pendidikan</h2>
            <p className="text-gray-700">
              Komunitas bisa berpartisipasi menentukan alokasi dana beasiswa, memilih penerima, dan mengembangkan kebijakan edukasi secara desentralisasi.
            </p>
          </MagicCard>
        </BlurFade>
      </div>
    </div>
  );
}
