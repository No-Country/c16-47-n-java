package com.nocountry.backend.model.dto;

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
public class FavoriteDTO {
    private Long id;

    @NotNull(message = "El ID del producto no puede ser nulo")
    @NotBlank(message = "El ID del producto no puede estar en blanco")
    private Long productId;

    @NotNull(message = "El ID del usuario no puede ser nulo")
    @NotBlank(message = "El ID del usuario no puede estar en blanco")
    private Long userId;
}