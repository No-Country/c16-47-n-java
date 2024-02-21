package com.nocountry.backend.common.exception;

// exception personalizada cuando no se encuentra un usuario, puede ser util en buscarUsuarioPorID
public class UserNotFoundException extends Exception{
    public UserNotFoundException(String message) {
        super(message);
    }
}