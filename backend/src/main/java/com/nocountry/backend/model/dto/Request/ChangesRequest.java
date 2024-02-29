package com.nocountry.backend.model.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChangesRequest {
    private String username;
    private String email;
    private String cellphone;
    private String address;
    private String name;
}
