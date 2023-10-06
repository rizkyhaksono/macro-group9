import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Map() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-10">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh dark:text-white">Map Action</h2>
            <p className="mb-5 font-base text-gray-500 sm:text-xl">Report trash in the area around you</p>
          </div>
          <div style={{ width: 100 }}>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Population Estimator map</a>
            </iframe>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-0 lg:space-y-0"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
