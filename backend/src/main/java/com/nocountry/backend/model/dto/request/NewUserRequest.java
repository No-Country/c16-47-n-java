package com.nocountry.backend.model.dto.request;

import com.nocountry.backend.model.entity.ImageData;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewUserRequest {

    @NotBlank(message = "Name is mandatory")
    @NotNull(message = "Name is mandatory")
    private String username;

    @NotBlank
    @NotNull
    @Email(message = "invalid email address")
    private String email;

    @NotBlank(message = "Password is mandatory")
    @NotNull(message = "Password is mandatory")
    private String password;

    private ImageData imageData;

}
