function Footer() {
  return (
    <div
      className="grid md:text-md  sm:text-sm  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
    max-w-sm mx-auto md:max-w-none text-white bg-gray-800 py-5 px-5"
    >
      <div className="flex flex-col justify-start items-center">
        <div className=" max-w-[200px] flex flex-col justify-start items-center ">
          <h1 className="text-2xl md:items-start font-bold">Mia-G</h1>
          <p className=" pt-2 ">
            <strong>STORE</strong> World Wide Electrionics store since 2020. We
            sell over 1000 products on our website
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-md font-bold">INFORMATION</h1>
        <div className="flex flex-col justify-start items-start sm:items-center">
          <p>New Collection</p>
          <p>About Store</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Orders History</p>
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-md font-bold">FOOTER MENU</h1>
        <div className="flex flex-col justify-start items-start">
          <p>New Collection</p>
          <p>About Store</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Orders History</p>
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-md font-bold">USEFUL LINKS</h1>
        <div className="flex flex-col justify-start items-start">
          <p>New Collection</p>
          <p>About Store</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Orders History</p>
        </div>
      </div>

      <div className="flex flex-col  justify-start items-center">
        <h1 className="text-md md:items-start font-bold">ABOUT THE STORE</h1>
        <div className="flex max-w-[200px] flex-col justify-start items-center text-start">
          <p className=" pt-2 ">
            <strong>STORE</strong> World Wide Electrionics store since 2020. We
            sell over 1000 products on our website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
