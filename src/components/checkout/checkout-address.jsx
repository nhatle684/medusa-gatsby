import React, { useEffect, useState } from "react"
import { useRegion } from "../../hooks/use-region"
import Field from "../forms/field"
import Select from "../forms/select"
import SplitField from "../forms/split-field"

const CheckoutAddress = ({ controller }) => {
  const [countries, setCountries] = useState([])
  const { region } = useRegion()

  useEffect(() => {
    if (region) {
      setCountries(region.countries)
    }
  }, [region])

  return (
    <div className="mt-3 mb-6">
      <SplitField>
        <Field
          label="Họ"
          autocomplete="family-name"
          name="last_name"
          formik={controller}
          defaultValue={controller.values.last_name}
        />
        <Field
          label="Tên"
          autocomplete="given_name"
          name="first_name"
          formik={controller}
          defaultValue={controller.values.first_name}
        />
      </SplitField>
      <Field
        label="Công ty"
        className="mt-4"
        autocomplete="organization"
        name="company"
        formik={controller}
        defaultValue={controller.values.company}
      />
      {/* <Field
        label="Căn hộ, phòng, vv."
        className="mt-4"
        autocomplete="address-line2"
        name="address_2"
        formik={controller}
        defaultValue={controller.values.address_2}
      /> */}
      <SplitField>
        <Select
          label="Quốc gia"
          autocomplete="country-code"
          name="country_code"
          formik={controller}
          defaultValue={controller.values.country_code}
          options={countries.map(country => ({
            label: country.display_name,
            value: country.iso_2,
          }))}
        />
        <Field
          label="Thành phố"
          autocomplete="city-code"
          name="city"
          formik={controller}
          defaultValue={controller.values.city}
        />
      </SplitField>
      <SplitField>
        <Field
          label="Quận/huyện"
          className="mt-4"
          autocomplete="address-level1"
          name="province"
          formik={controller}
          defaultValue={controller.values.province}
        />
        <Field
          label="Địa chỉ"
          className="mt-4"
          autocomplete="address-line1"
          name="address_1"
          formik={controller}
          defaultValue={controller.values.address_1}
        />
      </SplitField>
      {/* <SplitField>
        <Field
          label="Quận/huyện"
          autocomplete="address-level1"
          name="province"
          formik={controller}
          defaultValue={controller.values.province}
        />
        <Field
          label="ZIP / Postal Code"
          autocomplete="postal-code"
          name="postal_code"
          formik={controller}
          defaultValue={controller.values.postal_code}
        />
      </SplitField> */}
      <Field
        label="Điện thoại"
        className="mt-4"
        autocomplete="tel"
        name="phone"
        formik={controller}
        defaultValue={controller.values.phone}
      />
    </div>
  )
}

export default CheckoutAddress
