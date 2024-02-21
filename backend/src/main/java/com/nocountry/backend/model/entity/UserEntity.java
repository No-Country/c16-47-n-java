package com.nocountry.backend.model.entity;

import com.nocountry.backend.model.enums.ERole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_tbl")
@Builder
public class UserEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String address;
    private String cellphone;


    @Enumerated(EnumType.STRING)
    private ERole role;

    @OneToMany(mappedBy = "user")
    private List<Order> orders = new ArrayList<>();


}
