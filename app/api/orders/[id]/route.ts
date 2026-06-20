import { NextResponse } from "next/server";

import {
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

/*
----------------------------------

GET SINGLE ORDER

(optional but useful later)

----------------------------------
*/

export async function GET(
  req: Request,

  { params }: RouteParams
) {

  try {

    const { id } =
      await params;

    const docRef =
      doc(
        db,
        "orders",
        id
      );

    const snapshot =
      await getDoc(
        docRef
      );

    if (
      !snapshot.exists()
    ) {

      return NextResponse.json(

        {

          success: false,

          error:

            "Order not found",

        },

        {

          status: 404,

        }

      );

    }

    return NextResponse.json({

      success: true,

      id:

        snapshot.id,

      ...snapshot.data(),

    });

  }

  catch (error) {

    console.error(

      "GET ORDER ERROR:",

      error

    );

    return NextResponse.json(

      {

        success: false,

        error:

          "Failed to fetch order",

      },

      {

        status: 500,

      }

    );

  }

}

/*
----------------------------------

DELETE ORDER

----------------------------------
*/

export async function DELETE(

  req: Request,

  { params }: RouteParams

) {

  try {

    const { id } =

      await params;

    const docRef =

      doc(

        db,

        "orders",

        id

      );

    const snapshot =

      await getDoc(

        docRef

      );

    if (

      !snapshot.exists()

    ) {

      return NextResponse.json(

        {

          success: false,

          error:

            "Order not found",

        },

        {

          status: 404,

        }

      );

    }

    await deleteDoc(

      docRef

    );

    return NextResponse.json({

      success: true,

      message:

        "Order deleted successfully",

    });

  }

  catch (error) {

    console.error(

      "DELETE ORDER ERROR:",

      error

    );

    return NextResponse.json(

      {

        success: false,

        error:

          "Failed to delete order",

      },

      {

        status: 500,

      }

    );

  }

}