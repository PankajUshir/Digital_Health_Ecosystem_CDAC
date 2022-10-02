package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.AmbulanceOrder;
import com.example.demo.entities.AmbulancePojo;
import com.example.demo.entities.PatientUser;
import com.example.demo.service.AmbulanceService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class AmbulanceController {

	@Autowired
	private AmbulanceService sservice;

	@PostMapping("/ambulancesignup")
	public boolean ambulanceSignup(@RequestBody AmbulancePojo ambpojoobj) {
		System.out.println(ambpojoobj);
		sservice.ambulanceSignup(ambpojoobj);
		return true;
	}

	@GetMapping("/getprofiledetails")
	public Ambulance getProfileDetails(@RequestParam("aid") int aid) {

		return sservice.getProfileDetails(aid);

	}

	@PutMapping("/changeambuworkingststus")
	public int chnageAmbWorkingStatus(@RequestParam("aid") int aid,
			@RequestParam("availablestatus") int availablestatus) {
		return sservice.chnageAmbWorkingStatus(aid, availablestatus);

	}

	// soft DElete Acount
	@DeleteMapping("/deleteacount")
	public int deleteAccount(@RequestParam("aid") int aid) {
		System.out.println("For delete acount ");
		return sservice.deleteAccount(aid);
	}

	@PutMapping("/updateambprofile")
	public int updateAmbProfile(@RequestParam("aid") int aid, @RequestBody AmbulancePojo apoj) {
		return sservice.updateAmbProfile(aid, apoj);

	}

	// *************Patient Module Task***************
	@GetMapping("/getambulancecities")
	public List<String> getAmbulanceCities() {
		return sservice.getAmbulanceCities();
	}

	@GetMapping("/getAmbulances")
	public List<Ambulance> getAmbulances(@RequestParam("city") String city) {
		System.out.println(city);
		return sservice.getAmbulances(city);
	}

////////********************admin task*******************
//get list of all ambulance user to admin
	@GetMapping("/getAllambulanceList")
	public List<Ambulance> getAllambulanceList() {
		return sservice.getAllambulanceList();
	}

//admin delelt list using aid
	@DeleteMapping("/deleletAmbulnceList")
	public void deleteAmbulanceRecoUsingID(@RequestParam("aid") int aid) {
		sservice.deleteAmbulanceRecoUsingID(aid);
	}

}
