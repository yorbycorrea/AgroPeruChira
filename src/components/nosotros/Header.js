import Lottie from "lottie-react";
import nosotros from "nosotros.json";

function Header() {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-1/2 px-14 lg:w-1/2 xl:w-5/12">
              <div className="mt-8 lg:mt-0 justify-items-start">
                <h1 className="text-2xl font-bold tracking-tight pb-16  sm:text-6xl text-left">
                  Quienes Somos
                  <div
                    className="inline-flex"
                    style={{ color: "green", fontWeight: "bold" }}
                  ></div>
                </h1>
                <p className="mb-8 text-base text-body-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
              </div>
            </div>
            <div className="w-1/2 px-16 lg:w-6/12 justify-end">
              <div className="flex  items-end -mx-3 sm:-mx-4 ">
                <div className="w-full px-5 sm:px-4 xl:w-1/2">
                  <div className="relative z-4 my-6">
                    <Lottie
                      loop={true}
                      animationData={nosotros}
                      autoplay={true}
                      style={{ height: "300px", width: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img
                src="https://i.pinimg.com/564x/8a/2e/98/8a2e9839b44e42b32acaa180e7cade2e.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
