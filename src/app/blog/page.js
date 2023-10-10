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
            <p className="mb-5 font-base text-gray-500 sm:text-xl">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
        </div>

        <div tabindex="0" aria-label="Group of cards" className="focus:outline-none py-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div tabindex="0" className="focus:outline-none" aria-label="card 1">
              <img role="img" aria-label="code editor" tabindex="0" className="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="code editor" />
              <div className="py-4 px-8 w-full flex justify-between bg-primary">
                <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  Bruce Wayne
                </p>
                <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                  13TH Oct, 2020
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 tabindex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                  Transactions
                </h1>
                <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                  Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the
                  latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.
                </p>
                <div className="w-full flex justify-end">
                  <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-primary">Read more</span>
                    <img className="ml-3 lg:ml-6 color" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg" alt="arrow" />
                  </button>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabindex="0" className="focus:outline-none " aria-label="card 2">
                  <img tabindex="0" role="img" aria-label="gaming" className="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none  text-sm text-white font-semibold tracking-wide">
                      Bruce Wayne
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Transactions
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      Find the latest events updates or create events, concerts, conferences, workshops...
                    </p>
                  </div>
                </div>
                <div tabindex="0" className="focus:outline-none" aria-label="card 3">
                  <img tabindex="0" role="img" aria-label="gaming" className="focus:outline-none focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Bruce Wayne
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Transactions
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      Find the latest events updates or create events, concerts, conferences, workshops...
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabindex="0" className="focus:outline-none " aria-label="card 4">
                  <img tabindex="0" role="img" aria-label="laptop" className="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Bruce Wayne
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Transactions
                    </h1>
                    <p tabindex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      Find the latest events updates or create events, concerts, conferences, workshops...
                    </p>
                  </div>
                </div>
                <div tabindex="0" className="focus:outline-none" aria-label="card 5">
                  <img tabindex="0" role="img" aria-label="worker" className="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                  <div className="py-2 px-4 w-full flex justify-between bg-primary">
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Bruce Wayne
                    </p>
                    <p tabindex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabindex="0" className="focus:outline-none  text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
                      Transactions
                    </h1>
                    <p tabindex="0" className="focus:outline-none  text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                      Find the latest events updates or create events, concerts, conferences, workshops...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image src={"/illustration.png"} alt="Image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" width={200} height={100} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div> */}
      </div>

      <div className="max-w-screen-md mx-auto mb-8 text-center py-12 lg:mb-12">
        <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Community</h2>
        <p className="mb-5 font-base text-gray-500 sm:text-xl">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="container mx-auto grid xl:grid-cols-3 gap-8 pb-12">
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/illustration.png"} alt="Image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/illustration.png"} alt="Image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image src={"/illustration.png"} alt="Image" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" width={100} height={100} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>
      <Footer></Footer>
    </>
  );
}
