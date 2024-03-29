import React, { useEffect, useState } from "react"
import OrderCompletedItem from "../components/orders/order-completed-item"
import OrderTotal from "../components/orders/order-total"
import SearchEngineOptimization from "../components/utility/seo"

const OrderConfirmed = ({ location }) => {
  const [order, setOrder] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(
    "Xin hãy chờ, chúng tôi đang xử lý đơn hàng của bạn."
  )

  useEffect(() => {
    const getOrder = async () => {
      const state = location.state
      const stateOrder = state?.order

      if (stateOrder) {
        setOrder(stateOrder)
      }
      setLoading(false)
    }

    getOrder()
  }, [location.state])

  useEffect(() => {
    const onNoOrder = () => {
      if (!order && !loading) {
        setMessage(
          "Chúng tôi không thể tìm thấy đơn hàng của bạn, có thể đơn hàng đã được xử lý nhưng hiện tại chúng tôi không thể tìm thấy nó. Vui lòng kiểm tra email của bạn để xác nhận đơn hàng."
        )
      }
    }

    const checkForOrder = setTimeout(onNoOrder, 5000)

    return () => clearTimeout(checkForOrder)
  }, [order, loading])

  return !loading && order ? (
    <div className="layout-base flex justify-center pb-16">
      <SearchEngineOptimization title="Đặt hàng thành công" />
      <div className="max-w-xl">
        <span className="text-xs font-medium mb-2">Xin cảm ơn</span>
        <h1>Đặt hàng thành công</h1>
        <p className="text-md font-light mt-3">
          Đơn hàng số #{order.display_id} đã được xử lý thành công.
          Bạn sẽ nhận được một email có số theo dõi của bưu kiện của bạn khi nó đã sẵn sàng.
        </p>
        <div className="my-8">
          {order.items.map((item, index) => {
            return (
              <OrderCompletedItem
                key={index}
                item={item}
                currencyCode={order.currency_code}
              />
            )
          })}
        </div>
        <OrderTotal order={order} />
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center px-6">
      <p>{message}</p>
    </div>
  )
}

export default OrderConfirmed
