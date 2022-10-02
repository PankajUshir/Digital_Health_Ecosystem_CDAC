package com.example.demo.entities;

import java.sql.Blob;
import java.sql.Date;

public class PatientUser {
	
	private String uname;
	private String password;
	private String role;
	private String fname;
	private String lname;
	private String mono;
	private String email;
	private String adharno;
	private String dob;
	private String gender;
	private String bloodgrp;
	private int ac_status;
	private Blob pic;
	private String state;
	private String city;
	private int pincode;
	private String landmark;
	
	
	public PatientUser() {
		super();
	}


	public PatientUser(String uname, String password, String role,String fname, String lname, String mono, String email,
			String adharno, String dob, String gender, String bloodgrp, int ac_status, String state,
			String city, int pincode, String landmark) {
		super();
		this.uname = uname;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.mono = mono;
		this.email = email;
		this.adharno = adharno;
		this.dob = dob;
		this.gender = gender;
		this.bloodgrp = bloodgrp;
		this.ac_status = ac_status;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.landmark = landmark;
	}

	public PatientUser(String fname, String lname, String mono, String email,
			String adharno, String dob, String gender,String bloodgrp,
			String state, String city, int pincode, String landmark) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.mono = mono;
		this.email = email;
		this.adharno = adharno;
		this.dob = dob;
		this.gender = gender;
		this.bloodgrp = bloodgrp;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.landmark = landmark;
	}


	public String getUname() {
		return uname;
	}


	public void setUname(String uname) {
		this.uname = uname;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getMono() {
		return mono;
	}


	public void setMono(String mono) {
		this.mono = mono;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getAdharno() {
		return adharno;
	}


	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getBloodgrp() {
		return bloodgrp;
	}


	public void setBloodgrp(String bloodgrp) {
		this.bloodgrp = bloodgrp;
	}


	public int getAc_status() {
		return ac_status;
	}


	public void setAc_status(int ac_status) {
		this.ac_status = ac_status;
	}


	public Blob getPic() {
		return pic;
	}


	public void setPic(Blob pic) {
		this.pic = pic;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getPincode() {
		return pincode;
	}


	public void setPincode(int pincode) {
		this.pincode = pincode;
	}


	public String getLandmark() {
		return landmark;
	}


	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "PatientUser [uname=" + uname + ", password=" + password + ", role=" + role + ", fname=" + fname
				+ ", lname=" + lname + ", mono=" + mono + ", email=" + email + ", adharno=" + adharno + ", dob=" + dob
				+ ", gender=" + gender + ", bloodgrp=" + bloodgrp + ", ac_status=" + ac_status + ", pic=" + pic
				+ ", state=" + state + ", city=" + city + ", pincode=" + pincode + ", landmark=" + landmark + "]";
	}

}
