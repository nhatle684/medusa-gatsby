import React from "react"
import ShippingOptions from "../shipping/shipping-options"

const CheckoutDelivery = ({ controller, options, currencyCode = "vnd" }) => {
  const { setSelectedShippingMethod, selectedShippingMethod } = controller
  return (
    <div className="my-8">
      <div className="text-gray-700 text-xs flex items-center">
        <div className="bg-gray-400 text-white w-4 h-4 rounded-lg text-center mr-2">
        !
      </div>
      <p>Thuế có thể được áp dụng và sẽ được thêm vào khi tiếp tục sang bước tiếp theo</p>
      </div>
      <ShippingOptions
        defaultValue={selectedShippingMethod}
        onSelect={setSelectedShippingMethod}
        options={options}
        currencyCode={currencyCode}
      />
    </div>
  )
}

export default CheckoutDelivery
