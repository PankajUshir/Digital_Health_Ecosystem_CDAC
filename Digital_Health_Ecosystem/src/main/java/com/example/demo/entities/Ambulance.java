package com.example.demo.entities;

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
@Table(name = "ambulance")
public class Ambulance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int aid;

	@Column
	private String drivername;
	@Column
	private String aregno;
	@Column
	private String avehicalno;
	@Column
	private String email;
	@Column
	private String mono;
	@Column
	private String website; 
	@Column
	private String state;
	@Column
	private String city ;
	@Column
	private int pincode;
	@Column
	private String landmark; 
	@Column
	private int availablestatus;
	@Column
	private int ac_status;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "lid")
	private LoginAll lid;
	
//	@JsonIgnoreProperties("ambulance")
//	@OneToMany(mappedBy = "ambulance", cascade = CascadeType.ALL)
//	Set<AmbulanceOrder> ambOrder;

	public Ambulance() {
		super();
	}

	public Ambulance( String drivername, String aregno, String avehicalno, String email, String mono,
			String website, String state, String city, int pincode, String landmark, int availablestatus, int ac_status,
			LoginAll lid) {
		super();
//		this.aid = aid;
		this.drivername = drivername;
		this.aregno = aregno;
		this.avehicalno = avehicalno;
		this.email = email;
		this.mono = mono;
		this.website = website;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.landmark = landmark;
		this.availablestatus = availablestatus;
		this.ac_status = ac_status;
		this.lid = lid;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getDrivername() {
		return drivername;
	}

	public void setDrivername(String drivername) {
		this.drivername = drivername;
	}

	public String getAregno() {
		return aregno;
	}

	public void setAregno(String aregno) {
		this.aregno = aregno;
	}

	public String getAvehicalno() {
		return avehicalno;
	}

	public void setAvehicalno(String avehicalno) {
		this.avehicalno = avehicalno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMono() {
		return mono;
	}

	public void setMono(String mono) {
		this.mono = mono;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
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

	public int getAvailablestatus() {
		return availablestatus;
	}

	public void setAvailablestatus(int availablestatus) {
		this.availablestatus = availablestatus;
	}

	public int getAc_status() {
		return ac_status;
	}

	public void setAc_status(int ac_status) {
		this.ac_status = ac_status;
	}

	public LoginAll getLid() {
		return lid;
	}

	public void setLid(LoginAll lid) {
		this.lid = lid;
	}

	@Override
	public String toString() {
		return "Ambulance [aid=" + aid + ", drivername=" + drivername + ", aregno=" + aregno + ", avehicalno="
				+ avehicalno + ", email=" + email + ", mono=" + mono + ", website=" + website + ", state=" + state
				+ ", city=" + city + ", pincode=" + pincode + ", landmark=" + landmark + ", availablestatus="
				+ availablestatus + ", ac_status=" + ac_status + ", lid=" + lid + "]";
	}



	
	

}
