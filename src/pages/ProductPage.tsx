import DashedLine from "../components/DashedLine";
import Layout from "../components/layout";
import Navigation from "../components/Navigation";
import ProductImageGallery from "../components/ProductImageGallery";
import { useProducts } from "../hooks/useProducts";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import ProductReviews from "../components/ProductReviews";
import Popular from "../components/Popular";

const NavigationData: string[] = [
  "Homepage",
  "Women",
  "Women's Shirts & Tops",
  "Long Sleeve Overshirt, Khaki, 6",
];

function ProductPage() {
  // using the custom hook to fetch EASY-ORDERS product data.
  const { data, isLoading, error } = useProducts();

  return (
    <Layout>
      <DashedLine />
      <Navigation data={NavigationData} />
      <div className="container flex flex-col md:flex-row md:gap-10 lg:gap-32 h-fit mb-20">
        <ProductImageGallery data={data} isLoading={isLoading} error={error} />
        <ProductInfo data={data} isLoading={isLoading} error={error} />
      </div>
      <DashedLine />
      <RelatedProducts />
      <DashedLine />
      <ProductReviews />
      <DashedLine />
      <Popular />
    </Layout>
  );
}

export default ProductPage;
