import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto lg:pt-12 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Di Batam Kini Ada Perusahaan Green Industry</h2>
          <p className="my-1 font-base text-gray-500">
            {"(Grand Launching PT. Free The Sea dimulai dengan pemotongan pita oleh Menko Marves Luhut B. Panjaitan. Wakil Kepala BP Batam Purwiyanto (kiri depan) turut hadir mewakili BP Batam. Dok. Foto: Posmetro)"}
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            PT Free The Sea bergerak dalam pengolahan daur ulang limbah plastik menjadi barang dengan nilai ekonomis. Bekerja sama dengan masyarakat, perusahaan Jerman ini mengumpulkan sampah botol plastik dari rumah-rumah warga dan didaur
            ulang menjadi Coffee Maker atau mesin pembuat kopi.
          </p>
          <Image src="/blogs/blog5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Hasil sampah plastik tersebut kemudian didaur ulang menjadi PET Flakes dan Biji Plastik (Petrabs) untuk selanjutnya diolah menjadi salah satu bahan yg dipergunakan untuk pembuatan Coffee Maker atau mesin pembuat kopi yang
            merupakan produk utama PT WIK. Grand Launching PT Free The Sea ditandai dengan pemotongan pita oleh Menteri Koordinator Bidang Kemaritiman dan Investasi Luhut Binsar Pandjaitan, pada Kamis (9/3/2023) bersama dengan Mr. Markus
            Steckhan, Chief Strategy Officer of WIK Group.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            “Investasi ini luar biasa. Mendaur ulang sampah plastik menjadi produk bernilai ekonomi. Menjaga lingkungan kita dari microplastic yang merupakan bahan berbahaya bagi generasi penerus. Saya ajak warga Batam mendukung ini dengan
            kontribusi jangan buang sampah sembarangan tapi salurkan.” Kata Luhut.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Menurutnya, pencemaran sampah plastik di perairan akan berdampak secara signifikan bagi kesehatan anak-anak sebagai generasi masa depan. “Bayangkan saat kita membuang sampah plastik ke laut kemudian microplastics dikonsumsi oleh
            Ikan-ikan yang kita makan, bagi ibu hamil ini hampir pasti berdampak pada bayinya. Ayok kita dukung investasi ini. Jangan buang sampah sembarangan.” Tegas Luhut. Hadirnya PT Free The Sea ini diharapkan dapat membantu pemerintah
            mewujudkan target pengurangan sampah plastik laut hingga 7%. “Saya mengajak teman-teman di Batam, yok kita dukung investasi ini.” Pungkas Luhut.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            International Commercial Manager WIK Group, Mr. Bahri Beyhan menambahkan, tahun lalu perusahaan telah berhasil mengumpulkan sekitar 20 juta PET Bottle dari seluruh wilayah Batam. Dan pihaknya sudah berhasil memproduksi sekitar
            satu juta mesin kopi menggunakan bahan baku upcycling ini. Turut hadir mewakili BP Batam dalam Grand Launching PT. Free The Sea, Wakil Kepala BP Batam Purwiyanto menyampaikan,
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            “Kami berharap ada Free The Sea berikutnya. Kami sangat senang ya terhadap apa yang dilakukan Free The Sea akan membawa dampak baik bagi lingkungan dan industri kita. Kami menanti investasi yang sama ke depan seperti pengolahan
            enceng gondok di waduk misalnya.” Imbuh Purwiyanto. “…investasi ini mendukung visi yang telah dicanangkan Kepala BP Batam Bapak Muhammad Rudi untuk mewujudkan Batam Green City kawasan tujuan investasi yang berwawasan lingkungan.
            ” Kata Purwiyanto. Dalam kesempatan yang terpisah, Kepala BP Batam Muhammad Rudi mengapresiasi hadirnya investasi dimana fokus bisnis nya mengelola dan melakukan daur ulang terhadap sampah plastik untuk dijadikan barang jadi
            yang bernilai ekonomis.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">“Selain akan mendongkrak pertumbuhan ekonomi, ini juga diperlukan dari sisi lingkungan karena Batam ada kota industri,” kata Rudi.</p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
