package com.project.repairo.components;

import com.project.repairo.dto.RepairOrderDto;
import com.project.repairo.model.RepairOrder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RepairOrderMapper {

    public static RepairOrder toEntity(RepairOrderDto repairOrderDto) {
        RepairOrder repairOrder = new RepairOrder();
        repairOrder.setDeviceSpecs(repairOrderDto.getDeviceName());
        repairOrder.setRepairStatus(repairOrderDto.getRepairStatus());
        repairOrder.setClient(repairOrder.getClient());


        return repairOrder;
    }

    public static RepairOrderDto toDto(RepairOrder repairOrder) {
        RepairOrderDto repairOrderDto = new RepairOrderDto();
        repairOrderDto.setDeviceName(repairOrder.getDeviceSpecs());
        repairOrderDto.setRepairStatus(repairOrder.getRepairStatus());
        repairOrderDto.setClient(repairOrder.getClient());


        return  repairOrderDto;
    }

    public static List<RepairOrderDto> repairOrderToDtoList(Iterable<RepairOrder> entities) {
        List<RepairOrderDto> results = new ArrayList<>();
        entities.forEach(entity -> results.add(toDto(entity)));
        return results;
    }
}
