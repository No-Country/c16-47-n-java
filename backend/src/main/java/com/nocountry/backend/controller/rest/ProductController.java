package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.response.ProductResponse;
import com.nocountry.backend.model.service.impl.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@RequiredArgsConstructor
public class ProductController {
    
    private final ProductServiceImpl productService;

    @GetMapping(value = "/findall")
    public ResponseEntity<List<ProductResponse>> findAll() {
        return ResponseEntity.ok().body(productService.findAll());
    }
}
