package com.nocountry.backend.model.dto;

import com.nocountry.backend.model.enums.ERole;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Validaciones
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    @NotNull(message = "El nombre de usuario no puede ser nulo")
    @NotBlank(message = "El nombre de usuario no puede estar en blanco")
    private String username;

    @NotBlank(message = "El correo no puede ser en blanco")
    @Email(message = "Correo no valido")
    private String email;

    @NotNull(message = "La contrasenia no puede ser nulo")
    @NotBlank(message = "La contrasenia no puede ser en blanco")
    private String password;

    @NotNull(message = "La direccion no puede ser nulo")
    @NotBlank(message = "La direccion no puede estar en blanco")
    private String address;

    @NotNull(message = "El nro de celular no puede ser nulo")
    @NotBlank(message = "El nro de celular no puede estar en blanco")
    private String cellphone;

    @NotNull(message = "El nombre no puede ser nulo")
    @NotBlank(message = "El nombre no puede estar en blanco")
    private String name;

    @Enumerated(EnumType.STRING)
    private ERole eRole;
}
