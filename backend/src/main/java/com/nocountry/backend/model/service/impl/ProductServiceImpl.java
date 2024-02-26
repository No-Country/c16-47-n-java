package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.ProductDTO;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.enums.ECategory;
import com.nocountry.backend.model.repository.ProductRepository;
import com.nocountry.backend.model.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<ProductDTO> findAll() {
        List<Product> productsDB = productRepository.findAll();
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }

    @Override
    public ProductDTO findByName(String name) {
        Product productDB = productRepository.findByName(name);
        return modelMapper.map(productDB, ProductDTO.class);
    }

    @Override
    public List<ProductDTO> findByCategory(ECategory category) {
        List<Product> productsDB = productRepository.findByCategory(category);
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }

    
    public List<ProductDTO> findByPrice(double price) {
        List<Product> productsDB = productRepository.findByPrice(price);
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }

    @Override
    public List<ProductDTO> findByPriceGreaterThan(double price) {
        List<Product> productsDB = productRepository.findByPriceGreaterThan(price);
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }

    @Override
    public List<ProductDTO> findByPriceLessThan(double price) {
        List<Product> productsDB = productRepository.findByPriceLessThan(price);
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }

    @Override
    public List<ProductDTO> findByPriceBetween(double price1, double price2) {
        List<Product> productsDB = productRepository.findByPriceBetween(price1, price2);
        return productsDB.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
    }
}
