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
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Batam, Pemerintah terus mendorong komitmen para pihak untuk daur ulang sampah plastik menjadi produk yang lebih bermanfaat. Dalam mendukung komitmen itu, Menteri Koordinator Bidang Kemaritiman dan Investasi, Luhut B. Pandjaitan
            meresmikan PT Free the Sea (Grup PT. WIK), perusahaan daur ulang sampah plastik untuk digunakan sebagai bahan baku upcycling produksi coffee maker. Dengan menggandeng 20 pengepul dan 700 individual collectors, PT. Free the Sea
            dengan PT. WIK telah mendaur ulang dua puluh juta sampah botol plastik dan menghasilkan satu juta unit coffee maker. PT. Free the Sea juga melakukan pembinaan kepada beberapa sekolah di Batam untuk peningkatan pemahaman mengenai
            pentingnya pemilahan sampah sejak dari sumber.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            “Upaya ini merupakan komitmen yang sangat luar biasa dimana perusahaan manukfaktur peralatan rumah tangga menggunakan bahan baku dari sampah plastik menjadi material bernilai tinggi. Sampah plastik jika tidak dikelola berpotensi
            mencemar lingkungan dan menjadi mikroplastik. Hal ini akan menjadi masalah besar untuk kita semua. Recycling plant yang dibangun, serta pengintegrasian penggunaan recycled resin dalam satu proses industri adalah contoh konkrit
            dari penerapan zero waste, circular economy, dan green industry,” pungkas Menko Luhut.
          </p>
          <Image src="/blogs/blog3.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Menko Luhut juga menambahkan bahwa sampah plastik sudah menjadi isu transboundary dan menjadi salah satu perhatian Badan PBB dalam mengurusi isu lingkungan, yang saat ini sedang berlangsung pembahasan kesepakatan internasional
            dalam mengatur pengurangan sampah plastik.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">Menko Luhut menuturkan kolaborasi menjadi salah satu faktor yang sangat penting dalam menyelesaikan masalah sampah ini. </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            “Kolaborasi menjadi faktor yang sangat penting, skema sirkular ekonomi merupakan skema yang dapat diterapkan oleh produsen tidak hanya untuk kelangsungan bisnis yang dijalankan namun lingkungan sekitar sehingga menguntungkan
            semua pihak” jelas Menko Luhut. Lebih lanjut, Menko Luhut menekankan bahwa setiap pihak bertanggung jawab dalam menyelesaikan masalah sampah plastik. “Setiap upaya penanganan sampah plastik harus dilakukan secara kolaboratif
            hulu ke hilir. Jangan kita mengecilkan peran individual collector atau pengepul. Boleh jadi upaya mereka telah menyelamatkan bapak-ibu dari potensi terpapar mikroplastik, karena mengkonsumsi makanan yang telah terpapar
            mikroplastik”.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Pada penutupannya, Menko Luhut mengingatkan permasalahan sampah ini tidak hanya menekankan pada sisi kolaborasi saja akan tetapi juga kesadaran pada tanggung jawab semua pihak. “Ingat baik-baik, selain kolaborasi kita juga harus
            punya kesadaran dalam hal tanggung jawab pada lingkungan, jangan rusaki lingkunganmu, karena anak cucu kita akan hidup dari lingkungan yang kita jaga sekarang ini,” tutup Menko Luhut.
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
