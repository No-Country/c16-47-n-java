package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.response.ProductResponse;
import com.nocountry.backend.model.entity.Product;

import java.util.List;

public interface ProductService {
    List<ProductResponse> findAll();
    Product findById(Long id);
}
