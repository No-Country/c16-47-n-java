package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.dto.request.OrderRequest;
import java.util.List;

public interface OrderService {
    List<OrderDTO> findAll();
    List<OrderDTO> findById(Long userId);
    void save(OrderRequest request);
}
