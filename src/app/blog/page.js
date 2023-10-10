import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-10">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:pt-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Blog</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">Here at GreenSaver a collection of the latest news from us.</p>
          </div>
        </div>

        <div tabindex="0" aria-label="Group of cards" className="focus:outline-none py-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div tabindex="0" className="focus:outline-none" aria-label="card 1">
              <Image src="/images/picture5.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Rizky
                </p>
                <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  2023, 10 October
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabindex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Pantai Abang
                </h1>
                <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  The location which is quite far from the center of Batam city (60km) makes this location a negative value. But when you are at the location, it will all be worth it. For a fee of ± 400 thousand, you can get sea
                  transportation, snorkeling equipment, lunch, photo services, etc. Most like having lunch on the clean beach then continuing snorkeling to the coral reefs and fish which are nice and shallow, about 2 meters from the sea
                  surface.
                </p>
                <div className="w-full flex justify-end">
                  <a href="/read_more" className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                  </a>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabindex="0" className="focus:outline-none " aria-label="card 2">
                  <Image src="/images/picture6.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none  text-sm text-white font-semibold tracking-wide">
                      Rizky Haksono
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      2023, 10 October
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Marina at Nongsa Point Marina & Resort
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      When you have to visit your customer and have to go to a tourist area in a city. It feels really good to see such natural nature in Batam. Dont forget to enjoy local culinary delights.
                    </p>
                  </div>
                </div>
                <div tabindex="0" className="focus:outline-none" aria-label="card 3">
                  <Image src="/images/picture7.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Rizky Haksono
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      2023, 10 October
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Pantai Viovio
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      Just come to Vio Vio once, the beach is just ordinary, you have to pay 3000 to go to the toilet, you have to pay 10,000 to go to the rabbit house, you have to pay 10,000 to go up to the bridge. gazebo rental price
                      200,000. The sea water is also not very clean. just an ordinary view. you could say its not worth it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabindex="0" className="focus:outline-none " aria-label="card 4">
                  <Image src="/images/picture8.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Rizky Haksono
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      2023, 10 October
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Pulau Mubut Darat
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      In approximately 2 hours we arrived at this location, not far from the Barelang Four Bridge (on the right), after buying a ticket - 10 thousand/head - the winding road took us to a fairly long beach parking lot, at
                      first we were quite confused about where to go here. spots/parts visited. The many trees make this beach very comfortable to relax, laze around, enjoy grilled chicken, the beach breeze with all the sea views.
                    </p>
                  </div>
                </div>
                <div tabindex="0" className="focus:outline-none" aria-label="card 5">
                  <Image src="/images/picture1.jpg" alt="GreenSaver Logo" width={800} height={700} className="focus:outline-none w-full" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Rizky Haksono
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      2023, 10 October
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none  text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Pantai Nongsa
                    </h1>
                    <p tabindex="0" className="focus:outline-none  text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      It looks like this beach is a newly managed beach. Located on Galang Island, close to the Vietnamese village, you can also visit this beach. Road access to this beach is good. Its better not to go to this place on
                      holidays, because this place is visited a lot on holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mb-8 text-center py-12 lg:mb-12">
        <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Community</h2>
        <p className="mb-5 font-base text-gray-500 sm:text-xl">
          EwasteRJ is a community that operates in the field of recycling electronic waste or e-waste. Since 2015, EwasteRJ has been active in educating the Indonesian public about the dangers of electronic waste. In the campaign carried
          out, EwasteRJ also provides knowledge to the public regarding how to dispose of electronic waste properly.
        </p>
      </div>
      <div className="container mx-auto grid xl:grid-cols-3 gap-8 pb-12">
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/images/picture1.jpg"} alt="Image" className="object-cover w-full" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asosiasi Daur Ulang Plastik Indonesia</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Founded in 2015, the Indonesian Plastic Recycling Association (ADUPI) is a non-profit organization that aims to encourage Indonesian people to care more about plastic waste. This institution was founded as a forum for
              practitioners and the plastic recycling industry in Indonesia. Members can gather with each other, build networks, and share knowledge.
            </p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/images/picture2.jpg"} alt="Image" className="object-cover w-full" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EwasteRJ</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Indonesian Plastic Recycling (IPR) focuses on facilitating business actors in the field of plastic recycling. This association aims to create a harmonious plastic recycling ecosystem, so that it can build a sustainable
              circular economy among plastic recycling businesses. Apart from that, IPR also wants to contribute to environmental sustainability.{" "}
            </p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/images/picture3.jpg"} alt="Image" className="object-cover w-full" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indonesian Plastics Recycle</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Indonesian Plastic Recycle (IPR) fokus mewadahi para pelaku usaha di bidang daur ulang plastik. Asosiasi ini bertujuan menciptakan ekosistem daur ulang plastik yang harmonis, agar dapat membangun ekonomi melingkar (circular
              economy) yang berkelanjutan di kalangan pelaku usaha daur ulang plastik tersebut. Selain itu, IPR juga ingin berkontribusi terhadap kelestarian lingkungan hidup.
            </p>
          </div>
        </a>
      </div>
      <Footer></Footer>
    </>
  );
}
