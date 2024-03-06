package com.nocountry.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.nocountry.backend.model.dto.response.OrderResponse;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class OrderDTO {

    private Long id;
    private LocalDate orderDate;
    @NotNull(message = "El total de la orden no puede ser nulo")
    @NotBlank(message = "El total de la orden no puede estar en blanco")
    @Positive(message = "El total de la orden debe ser positivo")
    private String total;
    @NotNull(message = "El id del usuario no puede ser nulo")
    @NotBlank(message = "El id del usuario no puede estar en blanco")
    private Long userId;
    @NotNull(message = "La lista de productos no puede ser nula")
    @NotBlank(message = "La lista de productos no puede estar en blanco")
    private List<OrderResponse> products;
}
