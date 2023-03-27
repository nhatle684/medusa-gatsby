import React, { useEffect, useState } from "react"
import AccountLayout from "../../components/account/account-layout"
import OrderHistoryEntry from "../../components/orders/order-history-entry"
import SearchEngineOptimization from "../../components/utility/seo"
import { useCustomer } from "../../hooks/use-customer"

const OrderHistory = () => {
  const [orders, setOrders] = useState([])

  const {
    customer,
    loading,
    actions: { retrieveOrders },
  } = useCustomer()

  useEffect(() => {
    const getOrders = async () => {
      if (!loading && customer) {
        const orderResponse = await retrieveOrders()

        if (orderResponse) {
          setOrders(orderResponse)
        }
      }
    }

    getOrders()
  }, [loading, customer, retrieveOrders])

  return (
    <AccountLayout>
      <SearchEngineOptimization title="Order History" />
      <div className="bg-white shadow rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-xl">Lịch sử mua hàng</h1>
          <p className="text-sm font-light lg:w-2/3 leading-5">
          Xem trạng thái các đơn hàng gần đây và quản lý việc trả hàng. 
          Không thể trả hàng trước khi đơn hàng được xử lý, nếu bạn muốn hủy đơn hàng của mình thì vui lòng liên hệ với chúng tôi.
          </p>
        </div>
        <div>
          {orders.map(order => {
            return (
              <div key={order.display_id} className="mb-10 last:mb-0">
                <OrderHistoryEntry order={order} />
              </div>
            )
          })}
        </div>
      </div>
    </AccountLayout>
  )
}

export default OrderHistory
