
import SearchFields from "./SearchFields";

const Hero = () => {
  return (
    <section>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl tracking-wide">
              WelCome To Our
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Flight Booking Management System{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
              ducimus numquam ea!
            </p>

            {/* Search Inputs */}
            <SearchFields/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
