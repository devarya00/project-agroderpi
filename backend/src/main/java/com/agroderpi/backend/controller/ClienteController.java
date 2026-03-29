package com.agroderpi.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @GetMapping("/test")
    public String testSecurity() {
        return "Success! Your Supabase token unlocked the Java backend!";
    }
}