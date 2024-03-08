package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.dto.request.OrderRequest;
import com.nocountry.backend.model.dto.response.ProductOrderResponse;
import com.nocountry.backend.model.entity.Order;
import com.nocountry.backend.model.entity.Product;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.repository.OrderRepository;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.OrderService;
import com.nocountry.backend.model.service.ProductService;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;
    private final ProductService productService;
    private final UserRepository userRepository;

    @Override
    public List<OrderDTO> findAll() {
        List<Order> orderDB = orderRepository.findAll();
        return orderDB.stream().map(order -> modelMapper.map(order, OrderDTO.class)).toList();
    }

    @Override
    public void save(OrderRequest request) {

        // creamos la segunda capa con la orderDTO para setear los datos de la request
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setUserId(request.getUserId());
        orderDTO.setOrderDate(LocalDate.now());
        orderDTO.setProducts(request.getProducts());
        orderDTO.setTotal(request.getTotal());

        Order order = modelMapper.map(orderDTO, Order.class);

        Optional<UserEntity> resUser = userRepository.findById(orderDTO.getUserId());
        if (resUser.isPresent()) {
            order.setUser(resUser.get());
        }

        // Recuperar los productos asociados a la orden y asegurarse de que estén
        // administrados

        List<ProductOrderResponse> orderResponses = orderDTO.getProducts();
        List<Product> products = new ArrayList<>();
        for (ProductOrderResponse orderResponse : orderResponses) {
            Product product = productService.findById(orderResponse.getId());
            products.add(product);
        }
        order.setProducts(products);

        orderRepository.save(order);

    }
}
