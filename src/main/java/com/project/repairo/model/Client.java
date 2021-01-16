package com.project.repairo.model;


import javax.persistence.*;
import java.util.Set;

@Entity(name="client")
@Table(name="client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clientId;

    @Column
    private String clientFirstName;

    @Column
    private String clientLastName;

    @Column
    private int clientPhoneNumber;

    @OneToMany
    private Set<RepairOrder> repairOrder;


    public Client() {
    }

    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    public String getClientFirstName() {
        return clientFirstName;
    }

    public void setClientFirstName(String clientFirstName) {
        this.clientFirstName = clientFirstName;
    }

    public String getClientLastName() {
        return clientLastName;
    }

    public void setClientLastName(String clientLastName) {
        this.clientLastName = clientLastName;
    }

    public int getClientPhoneNumber() {
        return clientPhoneNumber;
    }

    public void setClientPhoneNumber(int clientPhoneNumber) {
        this.clientPhoneNumber = clientPhoneNumber;
    }


    public Set<RepairOrder> getRepairOrder() {
        return repairOrder;
    }

    public void setRepairOrder(Set<RepairOrder> repairOrder) {
        this.repairOrder = repairOrder;
    }



    @Override
    public String toString() {
        return "Client{" +
                "clientId=" + clientId +
                ", clientFirstName='" + clientFirstName + '\'' +
                ", clientLastName='" + clientLastName + '\'' +
                ", clientPhoneNumber=" + clientPhoneNumber +
                '}';
    }
}
