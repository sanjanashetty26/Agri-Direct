package com.agridirect.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.agridirect.backend.entity.Order;
import com.agridirect.backend.repository.OrderRepository;
import com.agridirect.backend.repository.ProductRepository;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public DashboardController(
            ProductRepository productRepository,
            OrderRepository orderRepository) {

        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }
@GetMapping
public Map<String, Object> getStats() {

    Map<String, Object> stats = new HashMap<>();

    stats.put(
            "totalProducts",
            productRepository.count());

    stats.put(
            "totalOrders",
            orderRepository.count());

    List<Order> orders =
            orderRepository.findAll();

    double revenue = 0;
    int pendingOrders = 0;
    int deliveredOrders = 0;

    for (Order order : orders) {

        if(order.getTotalAmount() != null) {
            revenue += order.getTotalAmount();
        }

        if("Pending".equals(order.getStatus())) {
            pendingOrders++;
        }

        if("Delivered".equals(order.getStatus())) {
            deliveredOrders++;
        }
    }

    stats.put("revenue", revenue);
    stats.put("pendingOrders", pendingOrders);
    stats.put("deliveredOrders", deliveredOrders);

    return stats;
}
}