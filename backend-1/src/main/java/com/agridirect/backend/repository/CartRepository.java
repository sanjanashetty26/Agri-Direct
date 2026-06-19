package com.agridirect.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.agridirect.backend.entity.Cart;

public interface CartRepository
        extends JpaRepository<Cart,Integer> {
}