package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.message.ObjectArrayMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.aop.AopAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.AmbulanceOrder;
import com.example.demo.entities.AmbulancePojo;
import com.example.demo.entities.LoginAll;
import com.example.demo.repository.LoginAllRepository;
import com.fasterxml.jackson.databind.ser.std.StdArraySerializers.BooleanArraySerializer;
import com.example.demo.repository.AmbulanceRepository;

@Service
public class AmbulanceService {

	@Autowired
	private AmbulanceRepository srepo;
	@Autowired
	private LoginAllRepository lrepo;

	// signup method to save/register new ambulance data and user data
	public boolean ambulanceSignup(AmbulancePojo apojoobj) {
		boolean status = false;
		boolean loginusersaved = false, signupusersaved = false;
		LoginAll lobj = new LoginAll(apojoobj.getUname(), apojoobj.getPassword(), apojoobj.getRole()); // save user info
		// to LoginAll tbl

		try {
			LoginAll loginallsaveobj = lrepo.save(lobj); // call save mehod with LoginAllRepository
//			int lid=loginallsaveobj.getLid();					//and get stored entity(obj) again for fk 
			loginusersaved = true; // will get pid from this obj
			System.out.println("New user data saved to LoginAll tbl sucess!!");

			System.out.println("----------------------------------------------");

			Ambulance ambulanceobj = new Ambulance(apojoobj.getDrivername(), apojoobj.getAregno(),
					apojoobj.getAvehicalno(), apojoobj.getEmail(), apojoobj.getMono(), apojoobj.getWebsite(),
					apojoobj.getState(), apojoobj.getCity(), apojoobj.getPincode(), apojoobj.getLandmark(),
					apojoobj.getAvailablestatus(), apojoobj.getAc_status(), lobj

			);
			srepo.save(ambulanceobj);
			System.out.println("New ambulance Signup done sucess!!!");
			signupusersaved = true;

		} catch (Exception e) {
			e.printStackTrace();
		}

		if (loginusersaved == true && signupusersaved == true) {
			status = true; // if both data saved in both tbles return true
		}

		return status;
	}

	public Ambulance getProfileDetails(int aid) {
		boolean flag = false;
		Ambulance oamb = null; // hospital calss nm
		try {
			oamb = srepo.findById(aid).get(); // hospital repo
			flag = true;
			System.out.println("ambul--+++=" + oamb);

		} catch (Exception e) {
			e.printStackTrace();
		}
		if (flag == true) {
			return oamb;
		} else {
			System.out.println("Fount null /AID not found");
			return null;
		}
	}

	// for updating work avilable or not ststus

	public int chnageAmbWorkingStatus(int aid, int availablestatus) {

		return srepo.chnageAmbWorkingStatus(aid, availablestatus);

	}

	// for soft delete acount
	public int deleteAccount(int aid) {
		int ac_status = 0;
		return srepo.deleteAccount(aid, ac_status);

	}

	// for update profe data of Ambulance details
	public int updateAmbProfile(int aid, AmbulancePojo apoj) {
//		
		String dname = apoj.getDrivername();
		String aregno = apoj.getAregno();
		String avehicalno = apoj.getAvehicalno();
		String email = apoj.getEmail();
		String mono = apoj.getMono();
		String website = apoj.getWebsite();
		String state = apoj.getState();
		String city = apoj.getCity();
		int pincode = apoj.getPincode();
		String landmark = apoj.getLandmark();

		return srepo.updateAmbProfile(aid, dname, aregno, avehicalno, email, mono, website, state, city, pincode,
				landmark);
	}

	// ***********Patient Task**********
	// get cities for ambulance
	public List<String> getAmbulanceCities() {
		return srepo.getAmbulanceCities();
	}

	// get amb records by city for Patient module
	public List<Ambulance> getAmbulances(String city) {

		List<Ambulance> list = new ArrayList<Ambulance>();
		int availablestatus = 1;
		int ac_status = 1;
		try {
			list = srepo.getAmbulances(city, availablestatus, ac_status);
		} catch (Exception e) {
			System.out.println("Not Found Data");
			list = null;
			e.printStackTrace();
		}
		return list;
	}

////////********************admin task*******************

//get list of all ambulance user to admin
	public List<Ambulance> getAllambulanceList() {
		List<Ambulance> ambulist = srepo.findAll();
		return ambulist;
	}

	// admin delelt list using aid
	public void deleteAmbulanceRecoUsingID(int aid) {
		try {
			srepo.deleteById(aid);

		} catch (Exception e) {
			System.out.println("cant able to dlt usig aid-" + aid);
			e.printStackTrace();
		}
	}

}
