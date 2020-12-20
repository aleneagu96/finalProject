package com.project.repairo.repository;

import com.project.repairo.model.RepairOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepairOrderRepository extends JpaRepository<RepairOrder, Integer> {
}
