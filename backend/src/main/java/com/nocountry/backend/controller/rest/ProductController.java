package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.enums.ECategory;
import com.nocountry.backend.model.service.impl.ProductServiceImpl;
import com.nocountry.backend.model.dto.ProductDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@RequiredArgsConstructor
public class ProductController {
private final ProductServiceImpl productService;

// Listar productos
    @GetMapping(value = "/findall")
    public ResponseEntity<List<ProductDTO>> findAll() {
        return ResponseEntity.ok().body(productService.findAll());
    }

// Buscar por nombre
    @GetMapping(value = "/findname")
    public ResponseEntity<ProductDTO> findByName(@RequestParam String name) {
        return ResponseEntity.ok().body(productService.findByName(name));
    }

// Buscar por categoria
    @GetMapping(value = "/findcategory")
    public ResponseEntity<List<ProductDTO>> findByCategory(@RequestParam String category) {
        return ResponseEntity.ok().body(productService.findByCategory(ECategory.valueOf(category)));
    }

// Buscar por precio
    @GetMapping(value = "/findprice")
    public ResponseEntity<List<ProductDTO>> findByPrice(@RequestParam double price) {
        return ResponseEntity.ok().body(productService.findByPrice(price));
    }

// Buscar por precio mayor a
    @GetMapping(value = "/findgreaterprice")
    public ResponseEntity<List<ProductDTO>> findByPriceGreaterThan(@RequestParam double price) {
        return ResponseEntity.ok().body(productService.findByPriceGreaterThan(price));
    }

// Buscar por precio menor a
    @GetMapping(value = "/findlesserprice")
    public ResponseEntity<List<ProductDTO>> findByPriceLessThan(@RequestParam double price) {
        return ResponseEntity.ok().body(productService.findByPriceLessThan(price));
    }

// Buscar por precio entre
    @GetMapping(value = "/findpricebetween")
    public ResponseEntity<List<ProductDTO>> findByPriceBetween(@RequestParam double price1, @RequestParam double price2) {
        return ResponseEntity.ok().body(productService.findByPriceBetween(price1, price2));
    }
}
