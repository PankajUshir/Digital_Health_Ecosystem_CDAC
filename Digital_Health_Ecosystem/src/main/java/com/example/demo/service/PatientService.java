package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.LoginAll;
import com.example.demo.entities.Patient;
import com.example.demo.entities.PatientUser;
import com.example.demo.repository.LoginAllRepository;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	PatientRepository prepo;

	@Autowired
	LoginAllRepository lrepo;

	public boolean patientSignUp(PatientUser patientuser) {
		boolean flag = false;
		try {
			LoginAll login = new LoginAll(patientuser.getUname(), patientuser.getPassword(), patientuser.getRole());
			System.out.println(login);
			lrepo.save(login);

			Patient patient = new Patient(patientuser.getFname(), patientuser.getLname(), patientuser.getMono(),
					patientuser.getEmail(), patientuser.getAdharno(), patientuser.getDob(), patientuser.getGender(),
					patientuser.getBloodgrp(), patientuser.getAc_status(), patientuser.getState(),
					patientuser.getCity(), patientuser.getPincode(), patientuser.getLandmark(), login);
			System.out.println(patient);
			prepo.save(patient);

			flag = true;
		} catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}

	// get cities
	public List<String> getAllCities() {
		return prepo.getAllCities();
	}

	public Patient getPatientProfile(int pid) {
		Patient patient = null;
		Optional<Patient> op = prepo.findById(pid);
		try {
			patient = op.get();
			System.out.println(patient);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return patient;
	}

	public int deleteAccount(int pid) {
		int ac_status = 0;
		return prepo.deleteAccount(pid, ac_status);
	}

	public int updatePatientProfile(int pid, PatientUser patientuser) {

		String fname = patientuser.getFname();
		String lname = patientuser.getLname();
		String email = patientuser.getEmail();
		String mono = patientuser.getMono();
		String adharno = patientuser.getAdharno();
		String dob = patientuser.getDob();
		String gender = patientuser.getGender();
		String bloodgrp = patientuser.getBloodgrp();
		String state = patientuser.getState();
		String city = patientuser.getCity();
		int pincode = patientuser.getPincode();
		String landmark = patientuser.getLandmark();

		return prepo.updatePatientProfile(pid, fname, lname, email, mono, adharno, dob, gender, bloodgrp, state, city,
				pincode, landmark);
	}

////////********************admin task*******************

//get list of all ambulance user to admin
	public List<Patient> getAllPatinetList() {
		List<Patient> patientlist = prepo.findAll();
		return patientlist;
	}

//admin delelt list using aid
	public void deletePatinetRecoUsingID(int pid) {
		try {
			prepo.deleteById(pid);

		} catch (Exception e) {
			System.out.println("cant able to dlt usig pid-" + pid);
			e.printStackTrace();
		}
	}

}
