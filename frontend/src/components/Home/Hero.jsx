import SearchFields from "../common/Search/SearchFields";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-70px)] lg:items-center">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl tracking-wide">
            WelCome To Our
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Flight Booking Management System{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl max-w-xl mx-auto">
            Discover the future of flight bookings where convenience meets choice. Our platform
            offers real-time availability, competitive prices, and seamless booking experience for
            travelers worldwide.
          </p>

          {/* Search Inputs */}
          <SearchFields />
        </div>
      </div>
    </section>
  );
};

export default Hero;
