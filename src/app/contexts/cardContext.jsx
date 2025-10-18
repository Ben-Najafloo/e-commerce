"use client"

import { createContext, useState, useEffect } from 'react';

export const CardContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [lang, setLang] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // set/get localStorage Card
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart) {
            setCart(localCart)
        }
        setIsLoaded(true);
    }, [])
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // set/get localStorage Language
    useEffect(() => {
        const localLang = JSON.parse(localStorage.getItem("lang"));
        if (localLang) {
            setLang(localLang)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("lang", JSON.stringify(lang))
    }, [lang])


    function addToCart(product) {
        setCart(prev => {
            let selectedProduct = prev.find((item) => item._id == product._id);
            if (!selectedProduct) {
                return [...prev, { ...product, quantity: 1 }]
            } else {
                return prev.map(
                    item => item._id == product._id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        })
    }

    function updateQuantity(productId, newQuantity) {
        setCart(prev =>
            prev.map(
                item => item._id == productId ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    function totalPay() {
        let total = 0;
        cart.forEach(
            item => total += item.quantity * item.price
        )
        return total;
    }

    function totalQuantity() {
        let total = 0;
        cart.forEach(
            item => total += item.quantity
        )
        return total;
    }


    function removeFromCart(productId) {
        setCart(prev => prev.filter((product) => product._id != productId))
    }

    function clearCart() {
        setCart([])
    }

    if (!isLoaded) {
        return null; // or a loading spinner
    }

    return (
        <CardContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPay, totalQuantity, clearCart, lang, setLang }}>
            {children}
        </CardContext.Provider>
    )
}