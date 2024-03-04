package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.service.impl.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderServiceImpl orderService;

    @GetMapping(value = "/findall")
    public ResponseEntity<List<OrderDTO>> findAll() {
        return ResponseEntity.ok().body(orderService.findAll());
    }

    //guardar orden
    @PostMapping(value = "/save")
    public ResponseEntity<OrderDTO> save(@RequestBody OrderDTO order) {
        return ResponseEntity.ok().body(orderService.save(order));
    }
}
