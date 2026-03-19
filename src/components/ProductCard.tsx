import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import type { DbProduct } from "@/hooks/useProducts";
import product1 from "@/assets/product-1.jpg";

interface ProductCardProps {
  product: DbProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, setIsCartOpen } = useCart();
  const sizes = product.sizes || ["P", "M", "G", "GG"];
  const [selectedSize, setSelectedSize] = useState(sizes[1] || sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url || product1,
        description: product.description || "",
        material: product.material || "",
        color: product.color || "",
        sizes,
      },
      selectedSize
    );
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setIsCartOpen(true);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col gap-3"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary shadow-card relative">
        <img
          src={product.image_url || product1}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-start px-1">
        <div>
          <h3 className="font-serif text-lg text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">
            {product.material} • {product.color}
          </p>
        </div>
        <span className="tabular-nums font-medium text-foreground">
          R$ {Number(product.price).toFixed(2).replace(".", ",")}
        </span>
      </div>

      <div className="flex items-center gap-2 px-1">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`text-xs px-2.5 py-1 rounded transition-colors ${
              selectedSize === size
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={handleAdd}
        disabled={added}
        className="w-full py-3 bg-primary text-primary-foreground rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 disabled:opacity-70"
      >
        {added ? "Adicionado ✓" : "Adicionar ao Carrinho"}
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
