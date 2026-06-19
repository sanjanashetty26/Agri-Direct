package com.agridirect.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.agridirect.backend.entity.Cart;
import com.agridirect.backend.repository.CartRepository;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    private final CartRepository cartRepository;

    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @GetMapping
    public List<Cart> getCartItems() {
        return cartRepository.findAll();
    }

    @PostMapping
    public Cart addToCart(@RequestBody Cart cart) {
        return cartRepository.save(cart);
    }

    @DeleteMapping("/{id}")
    public void removeItem(@PathVariable Integer id) {
        cartRepository.deleteById(id);
    }
    @DeleteMapping
public void clearCart() {
    cartRepository.deleteAll();
}
}