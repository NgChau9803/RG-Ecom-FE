
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { Product, UserRole, CartItem } from '../types';

interface AppContextType {
  userRole: UserRole;
  toggleRole: () => void;
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: number;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.Buyer);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const toggleRole = useCallback(() => {
    setUserRole((prevRole) =>
      prevRole === UserRole.Buyer ? UserRole.Seller : UserRole.Buyer
    );
  }, []);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  }, []);

  const updateCartQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const addToWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: number): boolean => {
    return wishlist.some((item) => item.id === productId);
  }, [wishlist]);

  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const value = {
    userRole,
    toggleRole,
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    cartTotal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
