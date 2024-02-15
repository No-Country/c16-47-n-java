package com.nocountry.backend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart", schema = "c16-47-n-java")
public class Cart {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserEntity idUser;

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product idProduct;

    private Integer amount;
    private BigDecimal total;
    private Date date;
}
