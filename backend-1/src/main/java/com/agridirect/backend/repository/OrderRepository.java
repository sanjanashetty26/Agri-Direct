package com.agridirect.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agridirect.backend.entity.Order;

public interface OrderRepository
        extends JpaRepository<Order,Integer> {

    List<Order> findByStatus(String status);

}