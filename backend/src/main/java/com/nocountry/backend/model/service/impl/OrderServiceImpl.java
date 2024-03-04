package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.dto.response.OrderResponse;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.repository.OrderRepository;
import com.nocountry.backend.model.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;
    private final ProductServiceImpl productServiceImpl;

    @Override
    public List<OrderDTO> findAll() {
        List<Order> orderDB = orderRepository.findAll();
        return orderDB.stream().map(order -> modelMapper.map(order, OrderDTO.class)).toList();
    }

    @Override
    public OrderDTO save(OrderDTO orderDTO) {
        Order order = modelMapper.map(orderDTO, Order.class);
        order.setOrderDate(LocalDate.now());

        // Recuperar los productos asociados a la orden y asegurarse de que estén administrados
        List<OrderResponse> orderResponses = orderDTO.getProducts();
        List<Product> products = new ArrayList<>();
        for (OrderResponse orderResponse : orderResponses) {
            Product product = productServiceImpl.findById(orderResponse.getId());
            products.add(product);
        }
        order.setProducts(products);

        Order orderDB = orderRepository.save(order);
        return modelMapper.map(orderDB, OrderDTO.class);
    }
}
