package com.nocountry.backend.model.dto.response;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
    private Long id;

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "El nombre del producto no puede estar en blanco")
    private String name;

    private String description;

    @NotNull(message = "La descripcion del producto no puede ser nulo")
    @NotBlank(message = "La descripcion del producto no puede estar en blanco")
    private double price;
    private int stock;
    private String category;
    private String imageUrl;
    private int favorites;
    private Double calification;
}