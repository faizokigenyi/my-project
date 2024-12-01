function Hero() {
  return (
    <section className="border shadow-lg relative ">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div
          className="grid lg:grid-cols-2  gap-[30px]
            max-w-sm mx-auto md:max-w-none"
        >
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-gray-700 md:text-6xl">
              Best and Reliable Electronic Products
            </h1>
            <p className="mb-6 max-w-[528px] text-xl md:mb-10">
              Are you looking for the best and Reliable electronic products to use for
              individual and business? We got you covered.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="] mr-5 inline-block rounded-full bg-green-500 px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
              >
                <p className="">Best Sellers</p>
              </a>
            </div>
          </div>
          <div>
            <img className="rounded-2xl" src="/images/gamingPc.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
