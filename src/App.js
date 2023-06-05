import React, { useState } from "react"
// import Paystack from "./paystack/paystack"
import Paystack from "./paystack/paystack"
// import { PaystackButton } from "react-paystack"
// import "./App.css"

const App = () => {
  // const publicKey = "pk_live_22679f1e061872cbbad0f9f3592a3630dce6ff45"
  // const amountInCedis = 100; // Amount in Ghana Cedis (GHS)
  // const amountInPesewas = amountInCedis * 100; // Convert to pesewas

  // const amount = amountInPesewas;
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  // const [phone, setPhone] = useState("")

  // const componentProps = {
  //   email,
  //   amount,
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () =>
  //     alert("Thanks for doing business with us! Come back soon!!"),
  //   onClose: () => alert("Wait! Don't leave :("),
  // }

  return (
    <div className="">
      <Paystack/>
    </div>
  )
}

export default App