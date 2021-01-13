package com.project.repairo.controller;

import com.project.repairo.model.Client;
import com.project.repairo.repository.ClientRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/clients")
@ControllerAdvice
public class ClientController {


    private final Logger log = LoggerFactory.getLogger(ClientController.class);
    private ClientRepository clientRepository;

    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getClientById(@PathVariable Integer id) {
        Optional<Client> client = clientRepository.findById(id);
        return client.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/newClient")
    ResponseEntity<Client> createClient(@RequestBody Client client) throws URISyntaxException {
        log.info("Request to create client: {}", client);
        Client result = clientRepository.save(client);
        return ResponseEntity.created(new URI("/api/clients/newClient/" + result.getClientId()))
                .body(result);
    }

    @PutMapping("/update/{id}")
    ResponseEntity<Client> updateClient(@RequestBody Client client) {
        log.info("Request to update client: {}", client);
        Client result = clientRepository.save(client);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable Integer id) {
        log.info("Request to delete client: {}", id);
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("deleteAll")
    public void deleteAll() {
       clientRepository.deleteAll();
    }
}




