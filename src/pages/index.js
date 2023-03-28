import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">
          <StaticImage
            src="../images/may-may-nghia.png"
            alt="Cửa hàng máy may Nghĩa"
            placeholder="tracedSVG"
            className="w-full lg:w-1/2 h-auto"
          />
          <div>
            <h1 className="text-4xl">Cửa hàng máy may Nghĩa</h1>
            <p className="mt-2 text-lg font-normal">
            Chuyên bán & sửa máy may, máy vắt sổ, máy kansai, bàn ủi hơi nước các loại
            </p>
          </div>
        </div>
      </div>
      <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Sản phẩm nổi bật"}
          cta={{ to: "/products", text: "Xem tất cả sản phẩm" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">
          <Grid
            title="Mua theo dòng máy"
            cta={{ to: "/collections", text: "Xem tất cả dòng máy" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
