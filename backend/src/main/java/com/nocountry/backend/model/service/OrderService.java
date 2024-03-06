package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.dto.request.OrderRequest;
import java.util.List;

public interface OrderService {
    List<OrderDTO> findAll();
    void save(OrderRequest request, Long id);
}
