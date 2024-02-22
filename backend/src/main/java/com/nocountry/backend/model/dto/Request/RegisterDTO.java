package com.nocountry.backend.model.dto.Request;

import com.nocountry.backend.model.enums.ERole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterDTO {
    private String username;
    private String password;
    private String email;
    private String cellphone;
    private String address;
    private ERole role;
}
