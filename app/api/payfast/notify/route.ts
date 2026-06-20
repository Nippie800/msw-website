import { NextResponse } from "next/server";

import {

  collection,

  query,

  where,

  getDocs,

  updateDoc,

  serverTimestamp,

} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function POST(
  req: Request
) {

  try {

    const formData =
      await req.formData();

    const data =
      Object.fromEntries(
        formData.entries()
      );

    console.log(
      "PAYFAST NOTIFY:",
      data
    );

    const paymentStatus =

      data.payment_status;

    const orderNumber =

      data.custom_str1;

    const pfPaymentId =

      data.pf_payment_id;

    /*
      Only update if payment succeeded
    */

    if (

      paymentStatus ===

      "COMPLETE"

    ) {

      const q = query(

        collection(
          db,
          "orders"
        ),

        where(

          "orderNumber",

          "==",

          orderNumber

        )

      );

      const snapshot =

        await getDocs(q);

      if (

        !snapshot.empty

      ) {

        const orderDoc =

          snapshot.docs[0];

        await updateDoc(

          orderDoc.ref,

          {

            status:

              "paid",

            pfPaymentId,

            paidAt:

              serverTimestamp(),

          }

        );

        console.log(

          `Order ${orderNumber} marked as paid.`

        );

      }

    }

    return new NextResponse(

      "OK",

      {

        status: 200,

      }

    );

  }

  catch (error) {

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