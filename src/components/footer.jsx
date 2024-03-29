import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  const socials = [
    {
      name: "Hotline: 0908298038",
      url: "tel:+840908298308",
    },
    {
      name: "Youtube",
      url: "#",
    },
    {
      name: "Zalo",
      url: "https://zalo.me/0908298038",
    },
  ]

  const internals = [
    {
      name: "Trả hàng",
      to: "/create-return",
    },
    {
      name: "Chính sách mua hàng",
      to: "/chinh-sach-mua-hang",
    },
    {
      name: "Liên hệ",
      to: "/lien-he",
    },
  ]

  return (
    <footer>
      <div className="bg-white px-4 pt-24 pb-4 sm:px-6 lg:px-8 border-t border-ui-medium flex items-center justify-between text-sm space-y-2 sm:space-y-0 flex-wrap sm:flex-nowrap">
        <div className="flex items-center">
          {internals.map(internal => {
            return (
              <Link
                to={internal.to}
                key={internal.name}
                className="mr-3 last:mr-0 text-ui-dark hover:text-gray-700"
              >
                {internal.name}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center">
          {socials.map(social => {
            return (
              <a
                href={social.url}
                key={social.name}
                className="mr-3 last:mr-0 text-ui-dark hover:text-gray-700"
                target="_blank" rel="noopener noreferrer"
              >
                {social.name}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
