package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalUser;
import com.example.demo.entities.LoginAll;
import com.example.demo.repository.HospitalRepository;
import com.example.demo.repository.LoginAllRepository;

@Service
public class HospitalService {

	@Autowired
	HospitalRepository hrepo;
	@Autowired
	LoginAllRepository lrepo;

	//hb
	public boolean hospitalSignup(HospitalUser huser) {
		boolean status = false;
		boolean loginusersaved = false, signupusersaved = false;
		LoginAll lobj = new LoginAll(huser.getUname(), huser.getPassword(), huser.getRole()); // save user info

		try {
			LoginAll inserted = lrepo.save(lobj); // call save mehod with LoginAllRepository
			// int lid=loginallsaveobj.getLid(); //and get stored entity(obj) again for fk
			loginusersaved = true; // will get pid from this obj
			System.out.println("New user data saved to LoginAll tbl sucess!!");

			System.out.println("----------------------------------------------");

			Hospital h = new Hospital(huser.getHname(), huser.getHregno(), huser.getHinfo(), huser.getGenralbed(),
					huser.getIcubed(), huser.getEmail(), huser.getMono(), huser.getState(), huser.getCity(),
					huser.getPincode(), huser.getLandmark(), huser.getWebsite(), huser.getGenbedlastupdate(),
					huser.getIcubedlastupdate(), huser.getAc_status(), inserted);

			hrepo.save(h);
			System.out.println("New Hospital Registered  sucessfully !!!");
			signupusersaved = true;

		} catch (Exception e) {
			e.printStackTrace();
		}

		if (loginusersaved == true && signupusersaved == true) {
			status = true; // if both data saved in both tbles return true
		}

		return status;
	}

	public Hospital getProfileDetails(int hid) {
		boolean flag = false;
		Hospital hospital = null; // hospital calss nm
		try {
			hospital = hrepo.findById(hid).get(); // hospital repo
			flag = true;
			System.out.println("hospital--+++=" + hospital);

		} catch (Exception e) {
			e.printStackTrace();
		}
		if (flag == true) {
			return hospital;
		} else {
			System.out.println("Hospital ID not Registered yet....");
			return null;
		}
	}

//	public List<String> getHospitalCities() {
//		return hrepo.getHospitalCities();
//	}

////////********************admin task*******************hb

//get list of all Hospital user to admin
	public List<Hospital> getAllHospitalList() {
		List<Hospital> hoslist = hrepo.findAll();
		return hoslist;
	}

//admin delelt list using aid
	public void deleteHospitalRecoUsingID(int hid) {
		try {
			hrepo.deleteById(hid);

		} catch (Exception e) {
			System.out.println("cant able to dlt usig hid-" + hid);
			e.printStackTrace();
		}
	}
	
	// ***********Patient Task********** pu
		// get cities for ambulance
		public List<String> getHospitalCities() {
			return hrepo.getHospitalCities();
		}

		// get amb records by city for Patient module
		public List<Hospital> getHospital(String city) {

			List<Hospital> list = new ArrayList<Hospital>();
			int availablestatus = 1;
			int ac_status = 1;
			try {
				list = hrepo.getHospital(city, ac_status);
			} catch (Exception e) {
				System.out.println("Not Found Data");
				list = null;
				e.printStackTrace();
			}
			return list;
		}
		
		//for soft delete acount mm
				public int deleteAccount( int hid)
				{
					int ac_status=0;
					return hrepo.deleteAccount(hid,ac_status);
					
				}
				
				//updation of Hospital Profile 
				public int updateHospitalProfile( int hid, HospitalUser huser ) 
				{
					
					String hname=huser.getHname();
					String hregno=huser.getHregno();
					String hinfo=huser.getHinfo();
					int genralbed=huser.getGenralbed();
					int icubed=huser.getIcubed();
					int genbedlastupdate=huser.getGenbedlastupdate();
					int icubedlastupdate=huser.getIcubedlastupdate();
					String email=huser.getEmail();
					String mono=huser.getMono();
					String website=huser.getWebsite();
					String state= huser.getState();
					String city=huser.getCity();
					int pincode=huser.getPincode();
					String landmark=huser.getLandmark();
					
					
					return hrepo.updateHospitalProfile(hid, hname,hregno,hinfo,genralbed,icubed,genbedlastupdate,icubedlastupdate,email,mono,website,state,city,pincode,landmark);
					// hid,hname,hinfo,genralbed,icubed,genbedlastupdate,icubedlastupdate,email,mono,website,state,city,pincode,landmark

				}


}
