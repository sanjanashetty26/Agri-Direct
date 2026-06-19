package com.agridirect.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.agridirect.backend.entity.Product;
import com.agridirect.backend.repository.ProductRepository;
@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
@GetMapping("/search")
public List<Product> searchProducts(
        @RequestParam String keyword) {

    return productRepository
            .findByNameContainingIgnoreCase(keyword);
}
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
@DeleteMapping("/{id}")
public void deleteProduct(@PathVariable Integer id) {
    productRepository.deleteById(id);
}@PutMapping("/{id}")
public Product updateProduct(
        @PathVariable Integer id,
        @RequestBody Product updatedProduct) {

    Product product =
            productRepository.findById(id)
                    .orElseThrow();

    product.setName(updatedProduct.getName());
    product.setPrice(updatedProduct.getPrice());
    product.setQuantity(updatedProduct.getQuantity());

    return productRepository.save(product);
}
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}