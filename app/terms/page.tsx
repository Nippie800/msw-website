export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white md:px-10">
      <div className="mx-auto max-w-4xl">

        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
          Made Somehow
        </p>

        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
          Shipping Policy
        </h1>

        <div className="mt-12 space-y-10 text-white/70">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Order Processing
            </h2>

            <p>
              Orders are typically processed within 1–3 business days after
              payment confirmation. During high-demand periods, launches,
              or exclusive drops, processing times may be extended.
            </p>

            <p className="mt-4">
              Once your order has been processed, you will receive
              confirmation and shipping information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Shipping Times
            </h2>

            <p>Local Shipping: 2–5 business days</p>
            <p>International Shipping: 7–15 business days</p>

            <p className="mt-4">
              Delays caused by couriers, customs, weather conditions,
              or high shipping volumes are outside of our control.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Tracking Orders
            </h2>

            <p>
              Once shipped, a tracking number will be sent to the email
              provided at checkout.
            </p>

            <p className="mt-4">
              Tracking updates may take 24–48 hours to appear.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Incorrect Shipping Information
            </h2>

            <p>
              Customers are responsible for providing accurate shipping
              details at checkout.
            </p>

            <p className="mt-4">
              Made Somehow is not responsible for orders shipped to
              incorrectly entered addresses.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Lost or Stolen Packages
            </h2>

            <p>
              Made Somehow is not responsible for lost or stolen
              packages marked as delivered by the courier.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Customs & Duties
            </h2>

            <p>
              International orders may be subject to customs fees,
              import duties, or taxes depending on local regulations.
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