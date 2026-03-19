import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface DbProduct {
  id: string;
  name: string;
  price: number;
  description: string | null;
  material: string | null;
  color: string | null;
  sizes: string[] | null;
  image_url: string | null;
}

export function useProducts() {
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, refetch: fetchProducts };
}
