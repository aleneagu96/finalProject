package com.project.repairo.components;

import com.project.repairo.dto.ClientDto;
import com.project.repairo.model.Client;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ClientMapper {

    public static Client toEntity(ClientDto clientDto){
        Client client = new Client();
        client.setClientFirstName(clientDto.getClientFirstName());
        client.setClientLastName(clientDto.getClientLastName());
        client.setClientPhoneNumber(clientDto.getClientPhoneNumber());
        return client;
    }

    public static ClientDto toDto(Client client) {
        ClientDto clientDto = new ClientDto();
        clientDto.setClientFirstName(client.getClientFirstName());
        clientDto.setClientLastName(client.getClientLastName());
        clientDto.setClientPhoneNumber(client.getClientPhoneNumber());
        return clientDto;
    }

    public static List<ClientDto> clientToDtoList(Iterable<Client> entities) {
        List<ClientDto> results = new ArrayList<>();
        entities.forEach(entity -> results.add(toDto(entity)));

        return results;
    }


}
