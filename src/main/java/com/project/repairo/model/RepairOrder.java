package com.project.repairo.model;

import javax.persistence.*;

@Entity(name="repairOrder")
@Table(name= "repairorder")
public class RepairOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int repairOrderId;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private int phoneNumber;

    @Column
    private String deviceName;

    @Column
    private String repairStatus;

    @Column
    private String dateOfRepairRequest;

    public RepairOrder() {}

    public int getRepairOrderId() {
        return repairOrderId;
    }

    public void setRepairOrderId(int id) {
        this.repairOrderId = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String device) {
        this.deviceName = device;
    }

    public String getRepairStatus() {
        return repairStatus;
    }

    public void setRepairStatus(String status) {
        this.repairStatus = status;
    }

    public String getDateOfRepairRequest() {
        return dateOfRepairRequest;
    }

    public void setDateOfRepairRequest(String date) {
        this.dateOfRepairRequest = date;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + repairOrderId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", device='" + deviceName + '\'' +
                ", status='" + repairStatus + '\'' +
                ", date=" + dateOfRepairRequest +
                '}';
    }
}
