package com.nocountry.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.nocountry.backend.model.entity.Calification;
import com.nocountry.backend.model.entity.Favorite;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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
    @Min(value = 0, message = "El precio del producto no puede ser negativo")
    private double price;

    @NotNull(message = "El stock del producto no puede ser nulo")
    @Min(value = 0, message = "El stock no puede ser negativo")
    private int stock;

    @URL(message = "La url de la imagen no es valida")
    private String imageUrl;
}

