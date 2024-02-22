package com.nocountry.backend.model.entity;

import com.nocountry.backend.model.enums.ECategory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
@Builder
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String name;
    private String description;
    private double price;
    private int stock;

    @OneToMany(mappedBy = "product")
    private List<Calification> califications;

    @Column(name = "image_url")
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    @OneToMany(mappedBy = "product")
    private List<Favorite> favorites;
}
