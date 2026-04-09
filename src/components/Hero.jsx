const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-green-50 to-white flex items-center px-8">
      
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Taste the <span className="text-green-700">Purity</span> of Coorg
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-md">
          Discover farm-fresh coffee, pure ghee, natural honey, and
          handpicked spices straight from the hills of Coorg.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#products">
            <button className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100">
            Shop Now
            </button>
            </a>

          <button className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100">
            Explore
          </button>
        </div>
      </div>

      <div className="flex-1 hidden md:flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="coffee"
          className="w-[400px] rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;