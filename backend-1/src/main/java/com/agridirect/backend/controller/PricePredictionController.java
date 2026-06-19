package com.agridirect.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/prediction")
@CrossOrigin(origins = "http://localhost:3000")
public class PricePredictionController {

    @Autowired
    private RestTemplate restTemplate;


    @PostMapping
    public Map<String, Object> predictPrice(
            @RequestBody Map<String, Object> request) {

        String flaskUrl =
                "http://localhost:5000/predict";

        Map<String, Object> response =
                restTemplate.postForObject(
                        flaskUrl,
                        request,
                        Map.class
                );

        return response;
    }
}