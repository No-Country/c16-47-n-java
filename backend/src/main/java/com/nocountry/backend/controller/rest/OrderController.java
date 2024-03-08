package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.OrderDTO;
import com.nocountry.backend.model.dto.request.OrderRequest;
import com.nocountry.backend.model.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping(value = "/findall")
    public ResponseEntity<List<OrderDTO>> findAll() {
        return ResponseEntity.ok().body(orderService.findAll());
    }

    //guardar orden
    @PostMapping(value = "/save")
    public ResponseEntity<?> save(@RequestBody OrderRequest request) {
        System.out.println("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
        System.out.println(request);
        System.out.println("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
        orderService.save(request);
        return ResponseEntity.ok().body(null);
    }
}
