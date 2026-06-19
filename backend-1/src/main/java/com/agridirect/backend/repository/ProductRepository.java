package com.agridirect.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.agridirect.backend.entity.Product;

public interface ProductRepository
        extends JpaRepository<Product, Integer> {

    Product findByName(String name);

    List<Product> findByNameContainingIgnoreCase(String name);
}