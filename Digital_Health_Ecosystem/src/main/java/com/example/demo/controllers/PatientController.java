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

import com.example.demo.entities.Patient;
import com.example.demo.entities.PatientUser;
import com.example.demo.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class PatientController {

	@Autowired
	PatientService pservice;

	// http://localhost:8080/patientsignup
	@PostMapping("/patientsignup")
	public boolean patientSignUp(@RequestBody PatientUser patientuser) {
		return pservice.patientSignUp(patientuser);
	}

	@GetMapping("/getcities")
	public List<String> getAllCities() {
		return pservice.getAllCities();
	}

	@GetMapping("/getpatientprofile")
	public Patient getPatientProfile(@RequestParam("pid") int pid) {
		return pservice.getPatientProfile(pid);
	}

	@DeleteMapping("/deletepatientaccount")
	public int deleteAccount(@RequestParam("pid") int pid) {
		return pservice.deleteAccount(pid);
	}

	@PutMapping("/updatepatientaccount")
	public int updatePatientProfile(@RequestParam("pid") int pid, @RequestBody PatientUser patientuser) {
		return pservice.updatePatientProfile(pid, patientuser);
	}

////////********************admin task*******************
//get list of all patient user to admin
	@GetMapping("/getAllpatinetList")
	public List<Patient> getAllPatinetList() {
		return pservice.getAllPatinetList();
	}

//admin delelt list using aid
	@DeleteMapping("/deleletPatientList")
	public void deletePatinetRecoUsingID(@RequestParam("pid") int pid) {
		pservice.deletePatinetRecoUsingID(pid);
	}

}
