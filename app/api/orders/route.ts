import { NextResponse } from "next/server";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    console.log(
      "Incoming order:",
      body
    );

    const orderNumber =

      `MSW-${

        new Date().getFullYear()

      }-${

        Math.floor(

          1000 +

          Math.random() *

          9000

        )

      }`;

    const docRef =
      await addDoc(

        collection(
          db,
          "orders"
        ),

        {

          // IDENTIFIERS

          orderNumber,

          customer:

            body.customer,

          items:

            body.items,

          // MONEY

          subtotal:

            body.subtotal ??

            (

              body.total -

              (body.shipping || 0)

            ),

          shipping:

            body.shipping ||

            0,

          total:

            body.total,

          currency:

            body.currency ||

            "ZAR",

          // PAYMENT

          status:

            "pending",

          paymentMethod:

            "payfast",

          pfPaymentId:

            null,

          paidAt:

            null,

          // TIMESTAMPS

          createdAt:

            serverTimestamp(),

        }

      );

    console.log(

      "Order stored:",

      docRef.id

    );

    return NextResponse.json({

      success: true,

      id: docRef.id,

      orderNumber,

    });

  }

  catch (error) {

    console.error(

      "ORDER API ERROR:",

      error

    );

    return NextResponse.json(

      {

        success: false,

        error:

          "Failed to create order",

      },

      {

        status: 500,

      }

    );

  }

}