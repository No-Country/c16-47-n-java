package com.nocountry.backend.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenericReponseDTO<T> {
    private Boolean success;
    private String message;
    private T data;
}
