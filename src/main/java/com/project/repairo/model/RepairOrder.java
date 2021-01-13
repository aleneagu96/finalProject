package com.project.repairo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity(name="repairOrder")
@Table(name= "repairorder")
public class RepairOrder {


    //
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int repairOrderId;

    @Column
    private String deviceSpecs;

    @Column
    private String repairStatus;


    @ManyToOne
    @JsonIgnoreProperties("repairOrder")

    private Client client;

    public RepairOrder() {}

    public int getRepairOrderId() {
        return repairOrderId;
    }

    public void setRepairOrderId(int id) {
        this.repairOrderId = id;
    }

    public String getDeviceSpecs() {
        return deviceSpecs;
    }

    public void setDeviceSpecs(String device) {
        this.deviceSpecs = device;
    }

    public String getRepairStatus() {
        return repairStatus;
    }

    public void setRepairStatus(String status) {
        this.repairStatus = status;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "RepairOrder{" +
                "repairOrderId=" + repairOrderId +
                ", deviceSpecs='" + deviceSpecs + '\'' +
                ", repairStatus='" + repairStatus + '\'' +
                ", client=" + client +
                '}';
    }
}
