import { Link } from "gatsby"
import React from "react"
import AuthLayout from "../components/auth/auth-layout"
import Field from "../components/forms/field"
import ErrorMessage from "../components/utility/error-message"
import SearchEngineOptimization from "../components/utility/seo"
import { useAuth } from "../hooks/use-auth"

const SignIn = () => {
  const {
    forms: { loginForm },
  } = useAuth()

  return (
    <AuthLayout>
      <SearchEngineOptimization title="Đăng nhập" />
      <div className="w-full lg:w-3/5">
        <div className="mb-6 flex-grow">
          <h1 className="mb-1">Chào mừng trở lại</h1>
          <p className="text-sm font-light">
            Bạn chưa có tài khoản?{" "}
            <Link to="/sign-up" className="underline">
              Đăng ký
            </Link>
          </p>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault()
            loginForm.handleSubmit()
          }}
        >
          {loginForm.status?.authError && (
            <div className="mb-2">
              <ErrorMessage error={loginForm.status.authError} />
            </div>
          )}
          <Field
            label="Email"
            type="email"
            className="mb-4"
            autocomplete="email"
            name={"email"}
            formik={loginForm}
            defaultValue={loginForm.values.email}
          />
          <Field
            label="Mật khẩu"
            type="password"
            autocomplete="old-password"
            name={"password"}
            formik={loginForm}
            defaultValue={loginForm.values.password}
          />
          <button className="btn-ui w-full mt-8" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignIn
