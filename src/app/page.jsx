import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div className=" overflow-hidden">
      <Sidebar />
      <ProductCard productList={products} />
    </div>
  );
}
