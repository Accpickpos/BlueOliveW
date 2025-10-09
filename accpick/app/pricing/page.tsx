export default function PricingPage() {
  const plans = [
    {
      name: "Business",
      features: [
        "2 Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp Support: Limited",
        "Call Center: Limited",
        "Software Support: Extensive support",
        "Operating System: Windows 7, 8, 10, Virtual Box",
      ],
      link: "/contact",
    },
    {
      name: "Business Plus",
      features: [
        "3-5 Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp Support: Limited",
        "Call Center: Limited",
        "Software Support: Extensive support",
        "Operating System: Windows 7, 8, 10, Virtual Box",
      ],
      link: "/contact",
    },
    {
      name: "Enterprise",
      features: [
        "6-9 Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp Support: Unlimited",
        "Call Center: Unlimited",
        "Software Support: Extensive support",
        "Operating System: Windows 7, 8, 10, Virtual Box",
      ],
      link: "/contact",
    },
    {
      name: "Enterprise Plus",
      features: [
        "Multi Warehouse",
        "Unlimited Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp Support: Unlimited",
        "Call Center: Unlimited",
        "Software Support: Extensive support",
        "Operating System: Windows 7, 8, 10, Virtual Box",
      ],
      link: "/contact",
    },
  ];

  return (
    <>

        {/* Server Package Section */}
          <div className="text-center mx-auto px-4 mb-12 bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4">
              Server Packages Available
            </h2>
            <p className="text-gray-700">
              You can get a complete package that includes your software plan along
              with a dedicated server, fully configured and ready to use. Contact us
              to customize your package and get a quote.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block bg-gradient-to-r from-blue-700 to-pink-500 text-white py-2 px-6 rounded-lg transition hover:scale-105"
            >
              Request Server Package
            </a>
          </div>
        <main className="py-12 bg-gray-50">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto px-4 mb-12">
            <h1 className="text-3xl font-bold text-gray-800">
              Select Your Plan Below
            </h1>
            <p className="text-gray-600 mt-2">
              Choose the plan that’s right for you, with the flexibility to upgrade
              or downgrade anytime. All Accpick paid plans include:
            </p>
          </div>

          <section aria-label="Pricing Plans" className="container mx-auto grid md:grid-cols-4 gap-6 px-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
              >
                <div>
                  <h2 className="text-center text-cyan-600 font-bold text-2xl mb-4">
                    {plan.name}
                  </h2>
                  <hr className="border-t-2 border-gray-300 my-4" />
                  <ul className="list-disc text-black list-inside space-y-2 mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    href={plan.link}
                    className="inline-block bg-gradient-to-r from-blue-700 to-pink-500 text-white py-2 px-6 rounded-lg transition hover:scale-105"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </section>
        </main>
    </>
  );
}
