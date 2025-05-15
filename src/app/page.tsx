import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { FlipText } from "@/components/magicui/flip-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { RippleButton } from "@/components/magicui/ripple-button";

export default function Home() {
  return (
    <>
    {/* DotPattern tetap di paling bawah seperti aslinya */}
    <DotPattern />
      <div className="h-screen flex justify-center items-center">
        <div className="relative w-full max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center z-50 text-black">
            Platform Beasiswa <span className="text-emerald-400">EduCoin</span>
          </h1>
          <div className="mt-4 text-lg md:text-xl text-gray-950 relative z-10">
            <FlipText className="text-gray-950">transparan, on-chain, teknologis, berkeadilan</FlipText>{" "}
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <InteractiveHoverButton>
              Mulai Sekarang
            </InteractiveHoverButton>
            <RippleButton>
              Pelajari Lebih Lanjut
            </RippleButton>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="mt-20 max-w-4xl w-full relative z-10">
          <NeonGradientCard >
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Kenapa EduCoin?</h2>
            <ul className="text-left space-y-3 text-gray-950">
              <BlurFade delay={0.2} inView>
                <li>✅ Semua transaksi beasiswa tercatat on-chain</li>
                <li>✅ Transparansi dalam penggunaan dana beasiswa</li>
                <li>✅ Penerima beasiswa dibekali dompet digital</li>
                <li>✅ Dukung adopsi teknologi Web3 di dunia pendidikan</li>
              </BlurFade>
            </ul>
          </NeonGradientCard>
        </div>
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Bagaimana Cara Kerja EduCoin?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-900 text-left">
            <div>
              <h3 className="font-semibold mb-2">1. Daftar</h3>
              <p>Pengguna mendaftar dan membuat dompet digital.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Verifikasi</h3>
              <p>Tim EduCoin memverifikasi data dan kebutuhan beasiswa.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Pendanaan</h3>
              <p>Donatur menyalurkan dana langsung ke dompet penerima via blockchain.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Pantau</h3>
              <p>Transparansi penggunaan dana dapat dipantau secara real-time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Apa Kata Mereka?</h2>
          <div className="space-y-6">
            <blockquote className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-800 italic">"Berkat EduCoin, saya bisa melanjutkan studi tanpa khawatir biaya. Transparansi dana membuat saya percaya penuh."</p>
              <footer className="mt-4 text-sm text-gray-600">– Sarah, Mahasiswa ITB</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-800 italic">"Dompet digital dari EduCoin sangat memudahkan saya dalam mengatur uang beasiswa dengan aman."</p>
              <footer className="mt-4 text-sm text-gray-600">– Budi, Mahasiswa UGM</footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Transparansi & Keamanan Terjamin</h2>
          <p className="text-gray-800 mb-6">
            EduCoin menggunakan teknologi blockchain untuk memastikan seluruh transaksi tercatat secara permanen dan tidak dapat dimanipulasi. Semua dana hanya dapat digunakan sesuai kebutuhan pendidikan.
          </p>
          <p className="text-sm text-gray-600 italic">Didukung oleh smart contract & audit pihak ketiga.</p>
        </div>
      </div>


    </>
  );
}
