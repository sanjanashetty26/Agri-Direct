package com.agridirect.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.agridirect.backend.entity.Order;
import com.agridirect.backend.entity.Product;
import com.agridirect.backend.repository.OrderRepository;
import com.agridirect.backend.repository.ProductRepository;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    public OrderController(
            OrderRepository orderRepository,
            ProductRepository productRepository) {

        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @PutMapping("/{id}/status")
    public Order updateStatus(
            @PathVariable Integer id,
            @RequestParam String status) {

        Order order =
                orderRepository.findById(id)
                        .orElseThrow();

        order.setStatus(status);

        return orderRepository.save(order);
    }
@PostMapping
public Order placeOrder(
        @RequestBody Order order) {

    System.out.println(
        "ORDER RECEIVED: "
        + order.getProductName()
    );

    order.setStatus("Pending");

    return orderRepository.save(order);
}
}