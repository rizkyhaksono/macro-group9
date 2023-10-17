import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto pt-24 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">MIN 2 Batam Adakan Program Bank Sampah</h2>
          <p className="my-1 font-base text-gray-500">
            {"Batam - Program Bank Sampah merupakan salah satu upaya memanfaatkan sampah-sampah yang telah dibuang agar bisa dijual dan menghasilkan uang dan juga menjaga kebersihan lingkungan."}
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {"Untuk mewujudkan itu Kepala MIN 2 Batam, Imas Sa'adah mengadakan program Bank Sampah di MIN 2 Batam. Sampah-sampah yang sudah dibuang dipilih dan dipisahkan mana yang plastik dan kertas kemudian dikumpulkan."}
          </p>
          <Image src="/blogs/blog5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Pada hari Selasa 22 Ferbruari 2022 merupakan penjualan sampah-sampah yang ada di MIN 2 Batam disamping sampah yang biasa dibuang ke tempat sampah juga buku-buku dan kertas-kertas yang sudah tidak terpakai lagi, truk pengangkut
            sampah datang ke madrasah untuk menimbang dan mengangkut sampah-sampah tersebut.
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            Sampah selalu menjadi masalah dimana pun berada dengan adanya program bank sampah ini diharapkan kesadaran membuang sampah pada tempatnya dapat dibiasakan pada anak-anak didik dan juga sampah-sampah tersebut dapat menghasilkan
            dana untuk bisa dimanfaatkan di madrasah. (Humas_MIN2).
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
