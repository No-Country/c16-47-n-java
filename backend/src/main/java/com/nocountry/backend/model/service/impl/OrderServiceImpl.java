package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.model.repository.OrderRepository;
import com.nocountry.backend.model.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<OrderDTO> findAll() {
        List<Order> orderDB = orderRepository.findAll();
        return orderDB.stream().map(order -> modelMapper.map(order, OrderDTO.class)).toList();
    }
}
