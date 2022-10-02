package com.example.demo.entities;

import java.sql.Blob;
import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="patient")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String mono;
	@Column
	private String email;
	@Column
	private String adharno;
	@Column
	private String dob;
	@Column
	private String gender;
	@Column
	private String bloodgrp;
	@Column
	private int ac_status;

	@Column
	private String state;
	@Column
	private String city;
	@Column
	private int pincode;
	@Column
	private String landmark;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "lid")
	private LoginAll lid;
	
//	@JsonIgnoreProperties("patient")
//	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
//	Set<AmbulanceOrder> patOrder;
	
	
	public Patient() {
		super();
	}

	public Patient(String fname, String lname, String mono, String email, String adharno, String dob, String gender,
			String bloodgrp, int ac_status, String state, String city, int pincode, String landmark,
			LoginAll lid) {
		super();
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
		this.lid = lid;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
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

	public LoginAll getLid() {
		return lid;
	}

	public void setLid(LoginAll lid) {
		this.lid = lid;
	}

	@Override
	public String toString() {
		return "Patient [pid=" + pid + ", fname=" + fname + ", lname=" + lname + ", mono=" + mono + ", email=" + email
				+ ", adharno=" + adharno + ", dob=" + dob + ", gender=" + gender + ", bloodgrp=" + bloodgrp
				+ ", ac_status=" + ac_status + ", state=" + state + ", city=" + city + ", pincode="
				+ pincode + ", landmark=" + landmark + ", lid=" + lid + "]";
	}



	
	




	
	
	
}
