export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white md:px-10">
      <div className="mx-auto max-w-4xl">

        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
          Made Somehow
        </p>

        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
          Returns Policy
        </h1>

        <div className="mt-12 space-y-10 text-white/70">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Returns Window
            </h2>

            <p>
              Returns are accepted within 14 days of delivery.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Eligibility
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Unworn and unused</li>
              <li>Original condition</li>
              <li>Original tags and packaging</li>
              <li>No stains, odors, or damage</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Non-Returnable Items
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Sale items</li>
              <li>Gift cards</li>
              <li>Limited-release products</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Exchanges
            </h2>

            <p>
              Exchanges are available for sizing issues and defective
              products, subject to availability.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Damaged or Incorrect Orders
            </h2>

            <p>
              Contact us within 48 hours of delivery with your order
              number and photos of the issue.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Refunds
            </h2>

            <p>
              Approved refunds will be processed within 5–10 business
              days to the original payment method.
            </p>

            <p className="mt-4">
              Shipping fees are non-refundable unless the return is
              due to our error.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Contact
            </h2>

            <p>Email: madesumhow@gmail.com</p>
            <p>Instagram: @madesumhow</p>
          </section>

        </div>
      </div>
    </main>
  );
}