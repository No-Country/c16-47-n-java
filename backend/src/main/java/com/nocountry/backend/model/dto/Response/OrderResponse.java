package com.nocountry.backend.model.dto.Response;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class OrderResponse {
    private Long id;

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "El nombre del producto no puede estar en blanco")
    private String name;

    @NotNull(message = "El precio del producto no puede ser nulo")
    @NotBlank(message = "El precio del producto no puede estar en blanco")
    @Positive(message = "El precio del producto debe ser positivo")
    private double price;

    @URL(message = "La url de la imagen no es valida")
    private String imageUrl;
}