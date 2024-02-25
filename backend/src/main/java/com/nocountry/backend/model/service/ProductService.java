package com.nocountry.backend.model.service;


import com.nocountry.backend.model.dto.ProductDTO;
import com.nocountry.backend.model.enums.ECategory;

import java.util.List;

public interface ProductService {
    List<ProductDTO> findAll();
    ProductDTO findByName(String name);
    List<ProductDTO> findByCategory(ECategory category);
    List<ProductDTO> findByPrice(double price);
    List<ProductDTO> findByPriceGreaterThan(double price);
    List<ProductDTO> findByPriceLessThan(double price);
    List<ProductDTO> findByPriceBetween(double price1, double price2);
}
