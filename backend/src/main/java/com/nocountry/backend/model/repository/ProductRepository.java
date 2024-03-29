package com.nocountry.backend.model.repository;

import com.nocountry.backend.model.enums.ECategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.nocountry.backend.model.entity.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByName(String name);

    List<Product> findByCategory(ECategory category);

    List<Product> findByPrice(double price);

    List<Product> findByPriceGreaterThan(double price);

    List<Product> findByPriceLessThan(double price);

    List<Product> findByPriceBetween(double price1, double price2);

    @Query(value = "SELECT COUNT(f.product_id) FROM favorite f WHERE f.product_id = :productId", nativeQuery = true)
    Integer favoriteCount(Long productId);

    @Query(value = "SELECT COALESCE(ROUND(AVG(c.calification), 1), 0) FROM calification c WHERE c.product_id = :productId", nativeQuery = true)
    Double calificationAverage(Long productId);

}