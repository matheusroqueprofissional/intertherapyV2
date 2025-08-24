package com.Intertherapy.IntertherapySiteBackend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://intertherapy.com.br")
public class RootController {
  @GetMapping("/")
  public ResponseEntity<String> root() {
    return ResponseEntity.ok("API Intertherapy – OK");
  }
}
