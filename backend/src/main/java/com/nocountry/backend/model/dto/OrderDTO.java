package com.nocountry.backend.model.dto;

import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Long id;
    private LocalDate orderDate;
    private String total;

    private UserEntity user;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Product.class, cascade = CascadeType.PERSIST)
    @JoinTable(name = "order_product",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id")
    )
    private List<Product> products;

}
