"use client"
import axios from 'axios'
import React, { useEffect } from 'react'
import Script from 'next/script'
import { useParams, useRouter } from 'next/navigation'

const Payment = () => {
  const param = useParams();
  const router = useRouter();

  const makePayment = async () => {
    try {
      const { data } = await axios.post('/api/razorpay', { id: param?.id });

      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID,
        name: "Anand-Http",
        currency: data.currency,
        amount: data.amount,
        description: "Thankyou!",
        order_id: data.id,
        handler: function (response) {
          router.push('/hotels');
        },
        prefill: {
          name: "Anand",
          email: "helloAnand@gmail.com",
          contact: 9695680505,
        },
        theme: {
          color: "#3399cc"
        }

      }

      const paymentObj = new window.Razorpay(options);
      paymentObj.open();


    } catch (error) {
      console.log("Payment failed", error)
    }

  }

  useEffect(() => {
    makePayment();
  }, [])


  return (

    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>

  )
}

export default Payment