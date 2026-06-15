import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      total,
    } = body;

    const merchantId =
      process.env.PAYFAST_MERCHANT_ID;

    const merchantKey =
      process.env.PAYFAST_MERCHANT_KEY;

    const passphrase =
      process.env.PAYFAST_PASSPHRASE;

    const returnUrl =
      process.env.PAYFAST_RETURN_URL;

    const cancelUrl =
      process.env.PAYFAST_CANCEL_URL;

    const notifyUrl =
      process.env.PAYFAST_NOTIFY_URL;

    /*
      Safety checks
    */

    if (
      !merchantId ||
      !merchantKey ||
      !returnUrl ||
      !cancelUrl ||
      !notifyUrl
    ) {
      return NextResponse.json(
        {
          error:
            "PayFast environment variables are missing.",
        },
        {
          status: 500,
        }
      );
    }

    const paymentData: Record<
      string,
      string
    > = {
      merchant_id: merchantId,

      merchant_key: merchantKey,

      return_url: returnUrl,

      cancel_url: cancelUrl,

      notify_url: notifyUrl,

      name_first: name,

      email_address: email,

      amount: Number(total).toFixed(
        2
      ),

      item_name: "MSW Order",
    };

    /*
      Add passphrase if present
    */

    if (passphrase) {
      paymentData.passphrase =
        passphrase;
    }

    const queryString =
      new URLSearchParams(
        paymentData
      ).toString();

    const paymentUrl =
      `https://www.payfast.co.za/eng/process?${queryString}`;

    return NextResponse.json({
      url: paymentUrl,
    });
  } catch (error) {
    console.error(
      "PAYFAST ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Payment initialization failed",
      },
      {
        status: 500,
      }
    );
  }
}