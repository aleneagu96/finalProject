package com.project.repairo.controller;

import com.project.repairo.model.RepairOrder;
import com.project.repairo.repository.RepairOrderRepository;
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
@RequestMapping("/api/repair_order")
@ControllerAdvice
public class RepairOrderController {

    // TODO: implement all operations from CRUD

    private final Logger logger = LoggerFactory.getLogger(RepairOrderController.class);
    private RepairOrderRepository repairOrderRepository;

    public RepairOrderController(RepairOrderRepository repairOrderRepository){
        this.repairOrderRepository = repairOrderRepository;
    }

    @GetMapping
    List<RepairOrder> getAllRepairOrders() {
        return repairOrderRepository.findAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getRepairOrderById(@PathVariable Integer id) {
        Optional<RepairOrder> repairOrder = repairOrderRepository.findById(id);
        return repairOrder.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/newRepairOrder")
    ResponseEntity<RepairOrder> createRepairOrder(@RequestBody RepairOrder repairOrder) throws URISyntaxException {
        logger.info("Request to create a repair order: {}", repairOrder);
        RepairOrder result = repairOrderRepository.save(repairOrder);
        return ResponseEntity.created(new URI("/api/repair_order/newRepairOrder/" + result.getRepairOrderId()))
                .body(result);
    }

    @PutMapping("/edit/{id}")
    ResponseEntity<RepairOrder> updateRepairOrder(@RequestBody RepairOrder repairOrder) {
        logger.info("Request to update repair order: {}", repairOrder);
        RepairOrder result = repairOrderRepository.save(repairOrder);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRepairOrderById(@PathVariable Integer id) {
        logger.info("Request to delete repair order: {}", id);
        repairOrderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/deleteAll")
    public void deleteAll() {
        repairOrderRepository.deleteAll();
    }


}
