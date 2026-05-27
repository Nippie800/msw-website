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
      process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID;

    const merchantKey =
      process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY;

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL;

    const paymentData = {
      merchant_id: merchantId,
      merchant_key: merchantKey,

      return_url: `${siteUrl}/payment/success`,
      cancel_url: `${siteUrl}/payment/cancel`,
      notify_url: `${siteUrl}/api/payfast/notify`,

      name_first: name,
      email_address: email,

      amount: total.toFixed(2),
      item_name: "MSW Order",
    };

    const queryString = new URLSearchParams(
      paymentData as Record<string, string>
    ).toString();

    const paymentUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

    return NextResponse.json({
      url: paymentUrl,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Payment initialization failed",
      },
      { status: 500 }
    );
  }
}