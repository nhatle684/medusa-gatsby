import React from "react"

import MapIcon from "../../icons/map.svg"
import PhoneIcon from "../../icons/phone.svg"
import EmailIcon from "../../icons/email.svg"
import ClockIcon from "../../icons/clock.svg"

const ICONS = {
  map: MapIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  clock: ClockIcon,
};

const Icon = ({ name }) => {
  return <div className="w-4 inline-block"> 
            <img src={ICONS[name]} alt="" />
          </div>
}

export default Icon
