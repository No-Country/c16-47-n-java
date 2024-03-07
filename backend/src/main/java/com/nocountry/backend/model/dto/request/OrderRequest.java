package com.nocountry.backend.model.dto.request;

import java.time.LocalDate;
import java.util.List;
import com.nocountry.backend.model.dto.response.OrderResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private Long id;
    private LocalDate orderDate;
    private String total;
    private List<OrderResponse> products;
}
