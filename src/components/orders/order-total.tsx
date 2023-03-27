import React from "react"
import { useDiscount } from "../../hooks/use-discount"
import { formatPrice } from "../../utils/format-price"

const OrderTotal = ({ order }) => {
  const appliedDiscount = useDiscount(order.discounts)
  return (
    <div className="font-light text-sm">
      <div className="flex items-center justify-between mb-2">
        <p>Thành tiền</p>
        <p className="font-medium">
          {formatPrice(order.subtotal, order.currency_code)}
        </p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>Phí vận chuyển</p>
        <p className="font-medium">
          {formatPrice(order.shipping_total, order.currency_code)}
        </p>
      </div>
      {appliedDiscount ? (
        <div className="flex items-center justify-between mb-2">
          <div className="inline-flex items-center">
            <p>Giảm giá</p>
            <span className="text-2xs py-1 px-3 rounded-2xl bg-ui-medium ml-2 font-medium">
              {appliedDiscount.code}
            </span>
          </div>
          <p className="font-medium">
            {appliedDiscount.type === "percentage"
              ? `- ${appliedDiscount.value}%`
              : appliedDiscount.type === "free_shipping"
              ? "Miễn phí vận chuyển"
              : `- ${formatPrice(appliedDiscount.value, order.currency_code)}`}
          </p>
        </div>
      ) : null}
      <div className="flex items-center justify-between mb-2">
        <p>Thuế</p>
        <p className="font-medium">
          {formatPrice(order.tax_total, order.currency_code)}
        </p>
      </div>
      <div className="h-px w-full bg-ui-medium mb-2" />
      <div className="flex items-center justify-between">
        <p>Tổng cộng</p>
        <p className="font-medium">
          {formatPrice(order.total, order.currency_code)}
        </p>
      </div>
    </div>
  )
}

export default OrderTotal
