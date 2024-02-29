package com.nocountry.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;
import org.hibernate.validator.constraints.URL;

import java.util.List;

//Validaciones
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ProductDTO {
    private Long id;

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "El nombre del producto no puede estar en blanco")
    private String name;

    @NotNull(message = "La descripcion del producto no puede ser nulo")
    @NotBlank(message = "La descripcion del producto no puede estar en blanco")
    private String description;

    @NotNull(message = "El precio del producto no puede ser nulo")
    @NotBlank(message = "El precio del producto no puede estar en blanco")
    @Positive(message = "El precio del producto debe ser positivo")
    private double price;

    @NotNull(message = "El stock del producto no puede ser nulo")
    @Positive(message = "El stock del producto debe ser positivo")
    private int stock;

    @URL(message = "La url de la imagen no es valida")
    private String imageUrl;

    private List<CalificationDTO> califications;
    private List<FavoriteDTO> favorites;
}

