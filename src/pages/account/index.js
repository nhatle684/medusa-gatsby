import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import AccountLayout from "../../components/account/account-layout"
import Field from "../../components/forms/field"
import FormContainer from "../../components/forms/form-container"
import SearchEngineOptimization from "../../components/utility/seo"
import { useCustomer } from "../../hooks/use-customer"

const Account = () => {
  const {
    customer,
    actions: { updateCustomerDetails },
  } = useCustomer()

  const contactForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: customer?.first_name || "",
      last_name: customer?.last_name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Vui lòng điền thông tin"),
      last_name: Yup.string().required("Vui lòng điền thông tin"),
      email: Yup.string().email("Email không hợp lệ").required("Vui lòng điền thông tin"),
      phone: Yup.string().optional(),
    }),
    onSubmit: async values => {
      const response = await updateCustomerDetails(values)
    },
  })

  const passwordForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Vui lòng điền mật khẩu"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Mật khẩu không trùng khớp"
      ),
    }),
    onSubmit: async (values, { setStatus }) => {
      const response = await updateCustomerDetails({
        password: values.password,
      })

      if (response.error) {
        return
      }

      setStatus({ success: true })
    },
  })

  return (
    <AccountLayout>
      <SearchEngineOptimization title="Tài khoản" />
      <div>
        <FormContainer
          title="Liên hệ"
          description="Chúng tôi cần thông tin này để liên hệ trong trường hợp cần thiết."
          handleSubmit={contactForm.handleSubmit}
        >
          <div className="flex items-center mb-4">
            <Field
              label="Họ"
              autocomplete="family-name"
              name="last_name"
              formik={contactForm}
              defaultValue={contactForm.values.last_name}
            />
            <div className="mx-2" />
            <Field
              label="Tên"
              autocomplete="given-name"
              name="first_name"
              formik={contactForm}
              defaultValue={contactForm.values.first_name}
            />
          </div>
          <div className="flex items-center">
            <Field
              label="Email"
              autocomplete="email"
              name="email"
              formik={contactForm}
              defaultValue={contactForm.values.email}
            />
            <div className="mx-2" />
            <Field
              label="Điện thoại (optional)"
              autocomplete="tel"
              name="phone"
              formik={contactForm}
              defaultValue={contactForm.values.phone}
            />
          </div>
        </FormContainer>
      </div>
      <div className="mt-16">
        <FormContainer
          title="Mật khẩu"
          description="Bạn có thể sử dụng biểu mẫu này để đặt lại mật khẩu của bạn."
          handleSubmit={passwordForm.handleSubmit}
        >
          <div className="flex items-center">
            <Field
              label="Mật khẩu mới"
              type="password"
              autocomplete="new-password"
              name="password"
              formik={passwordForm}
              defaultValue={passwordForm.values.password}
            />
            <div className="mx-2" />
            <Field
              label="Xác nhận mật khẩu"
              type="password"
              autocomplete="new-password"
              name="passwordConfirmation"
              formik={passwordForm}
              defaultValue={passwordForm.values.passwordConfirmation}
            />
          </div>
        </FormContainer>
      </div>
    </AccountLayout>
  )
}

export default Account
