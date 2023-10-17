import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto lg:pt-12 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Resmikan Fasilitas Daur Ulang Sampah di Batam, Menko Luhut : Perlu Kolaborasi Jaga Lingkungan</h2>
          <p className="my-1 font-base text-gray-500">{"Batam, 17 April 2023 "}</p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Pejabat Dinas Lingkungan Hidup (DLH) Kota Batam, Bapak Ip, ST., MT. selaku Kabid Perlindungan Lingkungan Hidup beserta timnya melakukan kunjungan ke Institut Teknologi Batam (ITEBA) pada hari Senin tanggal 17 April 2023.
            Kunjungan ini disambut oleh Wakil Rektor 1 ITEBA, Bapak Dr. Eng. Ansarullah Lawi, Dekan Fakultas Teknologi Informasi ITEBA, Ibu Dr. Ir. Ririt Dwiputri Permatasari, S.T., M.SI., Kepala Bagian Kerja Sama ITEBA, Bapak Zainul Munir,
            S.T., Me.TC., dan Kesekretariatan Rektorat ITEBA, Ibu Novita Pratiwi, S.Psi.
          </p>
          <Image src="/blogs/blog4.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Pada kunjungan ini, dilakukan rapat atau diskusi penjajakan kerjasama pengelolaan sampah antara ITEBA dengan DLH Kota Batam. Wakil Rektor 1 ITEBA mengungkapkan bahwa ITEBA berencana akan mendesain kapal pengumpul sampah
            menggunakan teknologi Internet of Things (IoT) dan Machine Learning (ML). Proyek ini akan melibatkan tiga pihak untuk bekerja sama dan berkolaborasi dengan DU/DI, dan hasilnya akan dievaluasi oleh DLH sebagai perwakilan dari
            masyarakat. Selain itu, mahasiswa ITEBA juga akan diajak ke Belakang Padang untuk study case dan melihat budidaya Maggot (hewan yang mampu menjadi pengurai sampah).
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            ITEBA sedang mengajukan proposal Matching Fund ke Kemendikbud Ristek melalui aplikasi Kedaireka untuk program kerja sama dengan DU/DI dan DLH Kota Batam dengan merancang sistem pengelolaan sampah di laut menggunakan teknologi
            IoT dan ML. Di dalam roadmap program ini, disampaikan rencana dari tahun 2023 sampai tahun 2027. Tahun 2023 difokuskan ke pengelolaan sampah laut menggunakan jaring laut semi-otomatis dengan teknologi IoT dan ML.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Kabid Perlindungan Lingkungan Hidup, Bapak Ip, juga memberikan informasi bahwa sampah di Batam saat ini berjumlah 850 ton/hari, dengan timbunan sebesar 1.132 ton. Sebanyak 11,65% atau sekitar 132 ton tidak dapat tertangani, dan
            6-7% sampah di Batam atau hampir 89 ton dibuang ke laut. DLH menangani 9 dari 12 kecamatan yang ada di Batam.
          </p>
          <Image src="/blogs/blog4_2.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Saat ini, terdapat project dari satu organisasi yaitu Seven Clean Seas yang membantu beberapa daerah di Batam, di antaranya Tanjung Uma dan Setokok untuk menggunakan alat dan secara manual sampah dibersihkan oleh warga setempat.
            Dalam Jabstrada, tahun 2025 negara menargetkan pengurangan sampah sebanyak 30%. Sampah yang dihasilkan sebanyak 50-60% adalah anorganik, sementara organik hanya 40-45%. Bakar sampah termasuk tindak pidana.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Kabid Perlindungan Lingkungan Hidup juga mengapresiasi inisiatif dari ITEBA dan berharap kolaborasi antara Dinas Lingkungan Hidup dengan ITEBA dapat memberikan solusi yang efektif dalam pengelolaan sampah di kota Batam. Beliau
            juga menekankan pentingnya edukasi dan sosialisasi kepada masyarakat agar tidak membuang sampah ke laut, dan menyampaikan harapan bahwa ITEBA dapat memberikan kontribusi dalam hal tersebut dengan memberikan edukasi kepada
            masyarakat dan menghasilkan karya/kerajinan tangan dari sampah.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Pembicaraan juga mencakup target negara pada tahun 2025 untuk mengurangi jumlah residu yang dibawa ke Tempat Pemrosesan Akhir (TPA), serta rencana ITEBA untuk menjadwalkan kembali pertemuan dengan DLH dan pihak ketiga (industri)
            untuk membahas kolaborasi pengelolaan sampah dan mempersiapkan gambaran lokasi, proposal/master plan yang rinci, dan biaya yang dibutuhkan.
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
