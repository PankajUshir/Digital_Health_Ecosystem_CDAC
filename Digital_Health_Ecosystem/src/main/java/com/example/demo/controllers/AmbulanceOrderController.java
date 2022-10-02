package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.AmbulanceOrder;
import com.example.demo.entities.AmbulanceOrderPojo;
import com.example.demo.entities.Patient;
import com.example.demo.service.AmbulanceOrderService;
import com.example.demo.service.AmbulanceService;
import com.example.demo.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class AmbulanceOrderController {

	@Autowired
	AmbulanceOrderService aoservice;

	@Autowired
	AmbulanceService aservice;

	@Autowired
	PatientService pservice;

	@PostMapping("/bookedambulance")
	public AmbulanceOrder bookedAmbulance(@RequestBody AmbulanceOrderPojo aorder) {

		int aid = aorder.getAid();
		Ambulance amb = aservice.getProfileDetails(aid);
//		System.out.println(amb);

		int pid = aorder.getPid();
		Patient pat = pservice.getPatientProfile(pid);
//		System.out.println("\n pat= "+pat);
		
		int order_status=1;
		String date=aorder.getDate().substring(0,10);
		
		int aprove_status = 0;

		AmbulanceOrder amborder = new AmbulanceOrder(aorder.getSource(), aorder.getDestination(), 
				date, order_status, aprove_status, amb,pat);
		System.out.println("\n  "+pat);
		return aoservice.bookedAmbulance(amborder);
	}

	// for patient your orders to get all orders
	@GetMapping("/yourorders")
	public List<AmbulanceOrder> yourOrders(@RequestParam("pid") int pid) {
		return aoservice.yourOrders(pid);
	}

	// for ambulanace dashbord to get all orders
	@GetMapping("/checkOrders")
	public List<AmbulanceOrder> getAllOrders(@RequestParam("aid") int aid) {
		System.out.println(aid);
		return aoservice.getAllOrders(aid);
	}

	// for accepting oeder from ambulance owner/dashbord
	@PutMapping("/updateOrderStatus")
	public int updateOrderStatus(@RequestParam("aoid") int aoid) {
		return aoservice.updateOrderStatus(aoid);

	}

//		for getting all order history
	@GetMapping("/getOrderHistory")
	public List<AmbulanceOrder> getOrderHistory(@RequestParam("aid") int aid) {
		System.out.println("aid is---"+aid);
		return aoservice.getOrderHistory(aid);
	}

}
