import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const formData =
      await req.formData();

    const data = Object.fromEntries(
      formData.entries()
    );

    console.log(
      "PAYFAST NOTIFY:",
      data
    );

    /*
      Example data:

      payment_status

      pf_payment_id

      amount_gross

      amount_fee

      amount_net

      item_name

      custom_str1

      email_address
    */

    // TODO:
    // Update Firestore order
    // status -> "PAID"

    return new NextResponse(
      "OK",
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "PAYFAST NOTIFY ERROR:",
      error
    );

    return new NextResponse(
      "ERROR",
      {
        status: 500,
      }
    );
  }
}