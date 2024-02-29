package com.nocountry.backend.model.service;


import com.nocountry.backend.model.dto.OrderDTO;

import java.util.List;

public interface OrderService {
    List<OrderDTO> findAll();
}
