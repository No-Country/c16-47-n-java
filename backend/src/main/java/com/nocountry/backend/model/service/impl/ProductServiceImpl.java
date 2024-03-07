package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.response.ProductResponse;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.repository.ProductRepository;
import com.nocountry.backend.model.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public List<ProductResponse> findAll() {
        List<Product> productsDB = productRepository.findAll();
        List<ProductResponse> productResponses = new ArrayList<>();

        for (Product product : productsDB) {
            Integer favoritesCount = productRepository.favoriteCount(product.getId());
            ProductResponse productResponse = new ProductResponse();

            productResponse.setId(product.getId());
            productResponse.setName(product.getName());
            productResponse.setDescription(product.getDescription());
            productResponse.setPrice(product.getPrice());
            productResponse.setStock(product.getStock());
            productResponse.setCategory(String.valueOf(product.getCategory()));
            productResponse.setImageUrl(product.getImageUrl());
            productResponse.setFavorites(favoritesCount);
            productResponse.setCalification(productRepository.calificationAverage(product.getId()));
            productResponses.add(productResponse);
        }

        return productResponses;
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).orElse(null);
    }
}
