import HeroCarousel from "@/components/Hero";


export default function Accpick() {
return (
    <main className="w-full">
     <HeroCarousel />

      {/* Intro Section */}
      <section className="bg-gray-200 py-16 px-6">
        <div className="max-w-5xl mx-auto flex items-start gap-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <div className="bg-blue-500 w-12 h-1 mb-4"></div>
            <h1 className="text-4xl font-bold text-black">AccpickPOS</h1>
          </div>

          <div className="flex-1">
            <p className="text-lg font-medium text-black">
              With over 35 years in the industry, our company has developed robust Point of Sale
              and IT solutions, particularly tailored for the automotive fitment sector in Southern Africa.
              Our software reflects specialized knowledge in system stability, controls, inventory
              management, online sales, and GAAP-aligned reporting.
            </p>
          </div>
        </div>
      </section>     
     
      {/* CTA Section */}
      <section className="py-16 flex justify-between items-center gap-4 text-gray-900 px-6 bg-gray-200">
        <h2 className="text-2xl font-semibold">
          The Possibilities Are Beyond Your Imagination
        </h2>

        <a
          href="#"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full"
        >
          Explore Accpick
        </a>
      </section>


      {/* Features Section */}

      <hr className="border-2 border-gray-400" />
      <section className="py-16 px-6 bg-gray-200 text-black mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-blue-500 w-12 h-1 mb-4"></div>
          <h2 className="text-xl font-bold mb-3">Overview</h2>
          <p>Accpick is simple, user-friendly, and easy to learn.</p>
        </div>

        <div>
          <div className="bg-blue-500 w-12 h-1 mb-4"></div>
          <h2 className="text-xl font-bold mb-3">Accpick Knowledge Base</h2>
          <p>
            The knowledge base helps automate manual and time-consuming tasks in business. From
            accounting to reporting and more, we offer all you need.
          </p>
        </div>

        <div>
          <div className="bg-blue-500 w-12 h-1 mb-4"></div>
          <h2 className="text-xl font-bold mb-3">Accpick Basics</h2>
          <p>
            AccpickPOS uses a graphical representation of icons for efficient navigation. The program
            and manual are subdivided into modules, each representing a specific accounting procedure.
          </p>
        </div>
      </section>
    </main>
  );
}
