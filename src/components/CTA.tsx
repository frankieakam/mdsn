export default function CTA() {
  const openCalendly = () => {
    window.open('https://calendly.com/superlabsng', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Super?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop juggling freelancers and complex projects. Partner with a single team that handles it all.
          </p>
          
          <button
            onClick={openCalendly}
            className="inline-block border border-blue-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}