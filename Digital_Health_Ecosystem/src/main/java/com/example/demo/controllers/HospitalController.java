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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalUser;
import com.example.demo.entities.PatientUser;
import com.example.demo.service.HospitalService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HospitalController {
	@Autowired
	HospitalService hservice;

	//mm
	@PostMapping("/hsignup")
	public boolean hospitalSignup(@RequestBody HospitalUser huser)
	{
		System.out.println(huser);
		hservice.hospitalSignup(huser);
		return true;
	}
	
	@GetMapping("/gethospitalprofiledetails")
	public Hospital getProfileDetails(@RequestParam("hid") int hid)
	{
		
		return hservice.getProfileDetails(hid);
		
	}
	
	//soft DElete Acount 
		@DeleteMapping("/deletehospital")
		public int deleteAccount(@RequestParam("hid") int hid)
		{
			System.out.println("Deleting Account . . .  ");
			return hservice.deleteAccount(hid);
		}
		
		@PutMapping("/updatehospital")
		public int updateHospitalProfile(@RequestParam("hid") int hid, @RequestBody HospitalUser huser ) 
		{
			return hservice.updateHospitalProfile(hid, huser);
			
		}

	//	@GetMapping("/gethospitalcities")
	//	public List<String> getHospitalCities() {
	//		return hservice.getHospitalCities();
	//	}

	///////********************admin task******************* hb
	//get list of all Hospital user to admin

	@GetMapping("/getAllhospitalList")
	public List<Hospital> getAllHospitalList() {
		return hservice.getAllHospitalList();
	}

	//	admin delelt list using aid
	@DeleteMapping("/deleletHospitalList")
	public void deleteHospitalRecoUsingID(@RequestParam("hid") int hid) {
		hservice.deleteHospitalRecoUsingID(hid);
	}

	// *************Patient Module Task*************** pu
	@GetMapping("/gethospitalcities")
	public List<String> getHospitalCities() {
		return hservice.getHospitalCities();
	}

	@GetMapping("/getHospital")
	public List<Hospital> getHospital(@RequestParam("city") String city) {
		System.out.println(city);
		return hservice.getHospital(city);
	}
	
	
}
