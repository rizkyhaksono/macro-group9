import FooterLanding from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function ReadMore() {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <div className="max-w-screen-xl mx-auto pt-24 lg:px-6 mb-8 lg:mb-12">
          <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">In Batam, there is now a Green Industry Company</h2>
          <p className="my-1 font-sm text-gray-500">
            {"Grand Launching PT. Free The Sea dimulai dengan pemotongan pita oleh Menko Marves Luhut B. Panjaitan. Wakil Kepala BP Batam Purwiyanto (kiri depan) turut hadir mewakili BP Batam. Dok. Foto: Posmetro"}
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "PT Free The Sea is engaged in recycling plastic waste into goods with economic value. Working together with the community, this German company collects plastic bottle waste from people's homes and recycles it rework it into a Coffee Maker or coffee making machine."
            }
          </p>
          <Image src="/blogs/blog5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full my-12" />
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "The resulting plastic waste is then recycled into PET Flakes and Plastic Seeds (Petrabs) which are then processed into one of the materials used to make Coffee Makers or coffee making machines is the main product of PT WIK. The Grand Launching of PT Free The Sea was marked by cutting the ribbon by the Coordinating Minister for Maritime Affairs and Investment Luhut Binsar Pandjaitan, on Thursday (9/3/2023) together with Mr. Mark Steckhan, Chief Strategy Officer of WIK Group."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "This investment is extraordinary. Recycling plastic waste into economically valuable products. Protecting our environment from microplastics which are dangerous materials for future generations. I invite Batam residents to support this by Don't throw rubbish carelessly but distribute it. Luhut said."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "According to him, plastic waste pollution in waters will have a significant impact on the health of children as future generations. “Imagine when we throw plastic waste into the sea and then the microplastics are consumed For pregnant women, the fish we eat will almost certainly have an impact on their babies. Come on, let's support this investment. Do not litter. Luhut emphasized. It is hoped that the presence of PT Free The Sea will help the government realizing the target of reducing marine plastic waste by up to 7%. I invite friends in Batam, let's support this investment. Luhut concluded."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "International Commercial Manager WIK Group, Mr. Bahri Beyhan added that last year the company had succeeded in collecting around 20 million PET Bottles from all over the Batam area. And his party has succeeded in producing approx one million coffee machines use this upcycled raw material. Also present representing BP Batam at the Grand Launching of PT. Free The Sea, Deputy Head of BP Batam Purwiyanto said,"
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">
            {
              "We hope there will be another Free The Sea. We are very happy that what Free The Sea is doing will have a good impact on the environment and our industry. We look forward to the same investment in the future such as processing water hyacinth in reservoirs, for example.” Purwiyanto added, this investment supports the vision launched by the Head of BP Batam, Mr. Muhammad Rudi, to create Batam Green City, an environmentally friendly investment destination area. said Purwiyanto. On a separate occasion, Head of BP Batam Muhammad Rudi appreciated the presence of investment where the business focus is managing and recycling plastic waste to make finished goods. which has economic value."
            }
          </p>
          <p className="my-5 font-base text-gray-500 sm:text-xl">{"Apart from boosting economic growth, this is also needed from an environmental perspective because Batam is an industrial city, said Rudi."}</p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}
