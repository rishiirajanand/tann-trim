import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import dotenv from "dotenv";
dotenv.config();

async function fetchProducts() {
  try {
    const response = await fetch(`${process.env.API_URL}products`, {
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
