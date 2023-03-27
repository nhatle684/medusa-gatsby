import { Link } from "gatsby"
import React from "react"
import AuthLayout from "../components/auth/auth-layout"
import Field from "../components/forms/field"
import ErrorMessage from "../components/utility/error-message"
import SearchEngineOptimization from "../components/utility/seo"
import { useAuth } from "../hooks/use-auth"

const SignUp = () => {
  const {
    forms: { registerForm },
  } = useAuth()

  return (
    <AuthLayout>
      <SearchEngineOptimization title="Sign Up" />
      <div className="w-3/5">
        <div className="mb-6 flex-grow">
          <h1 className="mb-1">Tạo tài khoản</h1>
          <p className="text-sm font-light">
            Đã có tài khoản?{" "}
            <Link to="/sign-in" className="underline">
              Đăng nhập
            </Link>
          </p>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault()
            registerForm.handleSubmit()
          }}
        >
          {registerForm.status?.authError && (
            <ErrorMessage error={registerForm.status.authError} />
          )}
          <Field
            label="Họ"
            className="mb-4"
            autocomplete="family-name"
            name={"last_name"}
            formik={registerForm}
            defaultValue={registerForm.values.last_name}
          />
          <Field
            label="Tên"
            className="mb-4"
            autocomplete="given-name"
            name={"first_name"}
            formik={registerForm}
            defaultValue={registerForm.values.first_name}
          />
          <Field
            label="Email"
            autocomplete="email"
            className="mb-4"
            name={"email"}
            formik={registerForm}
            defaultValue={registerForm.values.email}
          />
          <Field
            label="Điện thoại (optional)"
            autocomplete="tel"
            className="mb-4"
            name={"phone"}
            formik={registerForm}
            defaultValue={registerForm.values.phone}
          />
          <Field
            label="Mật khẩu"
            type="password"
            autocomplete="new-password"
            name={"password"}
            formik={registerForm}
            defaultValue={registerForm.values.password}
          />
          <button className="btn-ui w-full mt-8" type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
