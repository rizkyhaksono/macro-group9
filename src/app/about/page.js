import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-10">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">About Us</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">Were founded in 2023, with offices in Batam, Indonesia.</p>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">
              At GreenSaver, we are passionate about promoting a sustainable future and making recycling an effortless part of your daily routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and
              businesses to embrace recycling practices that benefit both our environment and our communities
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-0 lg:space-y-0">
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">Rizky Haksono</h3>
              <p className="font-light text-gray-500 sm:text-lg">Hacker</p>

              <Image src="/illustration.png" alt="Rizky" width={300} height={300}></Image>
              <p className="text-base font-light rounded-lg px-5 py-2.5 text-center mt-6">Mentee dari Infinite Learning</p>
            </div>

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">Rizky</h3>
              <p className="font-light text-gray-500 sm:text-lg">Hacker</p>

              <Image src="/illustration.png" alt="Rizky" width={300} height={300}></Image>
              <p className="text-base font-light rounded-lg px-5 py-2.5 text-center mt-6">Mentee dari Infinite Learning</p>
            </div>

            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">Rizky</h3>
              <p className="font-light text-gray-500 sm:text-lg">Hacker</p>

              <Image src="/illustration.png" alt="Rizky" width={300} height={300}></Image>
              <p className="text-base font-light rounded-lg px-5 py-2.5 text-center mt-6">Mentee dari Infinite Learning</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}