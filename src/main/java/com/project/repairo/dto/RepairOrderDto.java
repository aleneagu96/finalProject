package com.project.repairo.dto;


import com.project.repairo.model.Client;

public class RepairOrderDto {

    private int repairOrderId;
    private String deviceName;
    private String repairStatus;
    private Client client;


    public int getRepairOrderId() {
        return repairOrderId;
    }

    public void setRepairOrderId(int repairOrderId) {
        this.repairOrderId = repairOrderId;
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public String getRepairStatus() {
        return repairStatus;
    }

    public void setRepairStatus(String repairStatus) {
        this.repairStatus = repairStatus;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
