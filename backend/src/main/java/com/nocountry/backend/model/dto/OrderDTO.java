package com.nocountry.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.nocountry.backend.model.dto.Response.OrderResponse;
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
    private String total;

    //TODO devolver el usuario
    //private UserEntity user;

    //TODO terminar de hacer funcionar devolucion de los productos
    private List<OrderResponse> products;
}
