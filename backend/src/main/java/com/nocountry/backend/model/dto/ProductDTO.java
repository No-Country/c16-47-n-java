package com.nocountry.backend.model.dto;

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

    @NotNull(message = "La lista de calificaciones no puede ser nula")
    @NotBlank(message = "La lista de calificaciones no puede estar en blanco")
    @Min(value = 0, message = "La calificacion no puede ser negativa")
    private List<Calification> califications;

    @URL(message = "La url de la imagen no es valida")
    private String imageUrl;

// No se requiere validación adicional para ECategory, ya que es un Enum.

    @NotNull(message = "La lista de favoritos no puede ser nula")
    private List<Favorite> favorites;
}

