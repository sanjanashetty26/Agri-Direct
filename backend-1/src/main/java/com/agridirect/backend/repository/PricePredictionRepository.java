package com.agridirect.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agridirect.backend.entity.PricePrediction;

public interface PricePredictionRepository
        extends JpaRepository<PricePrediction, Integer> {
}