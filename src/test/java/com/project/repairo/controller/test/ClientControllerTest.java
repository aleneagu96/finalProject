//package com.project.repairo.controller.test;
//
//import com.project.repairo.controller.ClientController;
//import com.project.repairo.model.Client;
//import org.junit.internal.runners.JUnit4ClassRunner;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mock.web.MockHttpServletRequest;
//import org.springframework.web.context.request.RequestContextHolder;
//import org.springframework.web.context.request.ServletRequestAttributes;
//
//@ExtendWith(MockitoExtension.class)
//@RunWith(JUnit4ClassRunner.class)
//public class ClientControllerTest {
//
//    @InjectMocks
//    ClientController clientController;
//
//    @Mock
//    Client client;
//
//    @Test
//    public void testAddClient() {
//        MockHttpServletRequest request = new MockHttpServletRequest();
//        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
//
//        Client client = new Client(1, "Jane", "Doe", 740521518);
////        ResponseEntity<Object> responseEntity = clientController.createClient(client);
//
//    }
//}
