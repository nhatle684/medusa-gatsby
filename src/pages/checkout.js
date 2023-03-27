import React from "react"
import CheckoutFlow from "../components/checkout/checkout-flow"
import SearchEngineOptimization from "../components/utility/seo"

const Checkout = () => {
  return (
    <div className="bg-ui">
      <SearchEngineOptimization title="Mua hàng" />
      <CheckoutFlow />
    </div>
  )
}

export default Checkout
