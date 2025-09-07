import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.action";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

const Home = async () => {
  const latestProducts = await getLatestProducts();
  console.log(latestProducts);

  return (
    <>
      <ProductList data={latestProducts} title="newest" limit={4} />
    </>
  );
};

export default Home;
