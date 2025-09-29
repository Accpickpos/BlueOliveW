import Head from "next/head";

export default function PricingPage() {
  const plans = [
    {
      name: "Bronze",
      type: "Single Store",
      features: [
        "2 Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp",
        "Call Center Limited",
        "And more",
        "SoftWare Support: Extensive SoftWare support",
        "Operating System: Windows 7,8,10, Virtual Box",
      ],
      link: "/contact",
    },
    {
      name: "Silver",
      type: "Medium Store",
      features: [
        "4 Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp",
        "Call Center Limited",
        "And more",
        "SoftWare Support: Extensive SoftWare support",
        "Operating System: Windows 7,8,10, Virtual Box",
      ],
      link: "/contact",
    },
    {
      name: "Gold",
      type: "Multi Store",
      features: [
        "Multi Warehouse",
        "Unlimited Tills",
        "Point of Sale",
        "Stock Control",
        "Debtors",
        "Creditors",
        "WhatsApp",
        "Call Center: Unlimited",
        "And more",
        "SoftWare Support: Extensive SoftWare support",
        "Operating System: Windows 7,8,10, Virtual Box",
      ],
      link: "/contact",
    },
  ];

  return (
    <>
      {/* <Head>
        <title>Pricing Plans | Accpick</title>
        <meta name="description" content="Explore our Bronze, Silver, and Gold pricing plans." />
      </Head> */}

      {/* <header className="bg-blue-700 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Pricing Plans</h1>
          <p className="mt-2 text-lg">Choose a plan that fits your business needs</p>
        </div>
      </header> */}

      <main className="py-12 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-center text-cyan-600 font-bold text-2xl mb-2">{plan.name}</h2>
                <div className="w-2/3 border-t-2 border-gray-400 mx-auto mb-4"></div>
                <h4 className="text-center text-black text-lg mb-4">{plan.type}</h4>
                <div className="w-2/3 border-t-2 border-gray-400 mx-auto mb-4"></div>
                <ul className="list-disc text-black list-inside space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="w-2/3 border-t-2 border-gray-400 mx-auto mb-4"></div>
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
        </div>
      </main>

    </>
  );
}
