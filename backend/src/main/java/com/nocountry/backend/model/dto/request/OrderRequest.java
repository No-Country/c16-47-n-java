package com.nocountry.backend.model.dto.request;

import java.util.List;
import com.nocountry.backend.model.dto.response.ProductOrderResponse;
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
    private Double total;
    private List<ProductOrderResponse> products;
}
