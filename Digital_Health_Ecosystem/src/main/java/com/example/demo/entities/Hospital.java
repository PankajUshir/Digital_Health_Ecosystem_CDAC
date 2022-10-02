package com.example.demo.entities;

import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="hospital")
public class Hospital {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int hid;
	@Column
	private String hname;
	@Column
	private String hregno;
	@Column
	private String hinfo;
	@Column
	private int genralbed;
	@Column
	private int icubed;
	@Column
	private String email;
	@Column
	private String mono;
	@Column
	private String state;
	@Column
	private String city;
	@Column
	private int pincode;
	@Column
	private String landmark;
	@Column
	private String website;
	@Column
	private Blob himg;
	@Column
	private int genbedlastupdate;
	@Column
	private int icubedlastupdate;
	@Column
	private int ac_status;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="lid")
	private LoginAll lid;
	
	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Hospital(String hname, String hregno, String hinfo, int genralbed, int icubed, String email, String mono,
			String state, String city, int pincode, String landmark, String website,int genbedlastupdate,
			int icubedlastupdate, int ac_status, LoginAll lid) {
		super();
		this.hname = hname;
		this.hregno = hregno;
		this.hinfo = hinfo;
		this.genralbed = genralbed;
		this.icubed = icubed;
		this.email = email;
		this.mono = mono;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.landmark = landmark;
		this.website = website;
		this.genbedlastupdate = genbedlastupdate;
		this.icubedlastupdate = icubedlastupdate;
		this.ac_status = ac_status;
		this.lid = lid;
	}
	
	
	public Hospital(String hname, String hregno, String hinfo, int genralbed, int icubed, String email, String mono,
			String state, String city, int pincode, String landmark, String website, Blob himg, int genbedlastupdate,
			int icubedlastupdate, int ac_status, LoginAll lid) {
		super();
		this.hname = hname;
		this.hregno = hregno;
		this.hinfo = hinfo;
		this.genralbed = genralbed;
		this.icubed = icubed;
		this.email = email;
		this.mono = mono;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.landmark = landmark;
		this.website = website;
		this.himg = himg;
		this.genbedlastupdate = genbedlastupdate;
		this.icubedlastupdate = icubedlastupdate;
		this.ac_status = ac_status;
		this.lid = lid;
	}
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public String getHregno() {
		return hregno;
	}
	public void setHregno(String hregno) {
		this.hregno = hregno;
	}
	public String getHinfo() {
		return hinfo;
	}
	public void setHinfo(String hinfo) {
		this.hinfo = hinfo;
	}
	public int getGenralbed() {
		return genralbed;
	}
	public void setGenralbed(int genralbed) {
		this.genralbed = genralbed;
	}
	public int getIcubed() {
		return icubed;
	}
	public void setIcubed(int icubed) {
		this.icubed = icubed;
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
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public Blob getHimg() {
		return himg;
	}
	public void setHimg(Blob himg) {
		this.himg = himg;
	}
	public int getGenbedlastupdate() {
		return genbedlastupdate;
	}
	public void setGenbedlastupdate(int genbedlastupdate) {
		this.genbedlastupdate = genbedlastupdate;
	}
	public int getIcubedlastupdate() {
		return icubedlastupdate;
	}
	public void setIcubedlastupdate(int icubedlastupdate) {
		this.icubedlastupdate = icubedlastupdate;
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
		return "Hospital [hid=" + hid + ", hname=" + hname + ", hregno=" + hregno + ", hinfo=" + hinfo + ", genralbed="
				+ genralbed + ", icubed=" + icubed + ", email=" + email + ", mono=" + mono + ", state=" + state
				+ ", city=" + city + ", pincode=" + pincode + ", landmark=" + landmark + ", website=" + website
				+ ", himg=" + himg + ", genbedlastupdate=" + genbedlastupdate + ", icubedlastupdate=" + icubedlastupdate
				+ ", ac_status=" + ac_status + ", lid=" + lid + "]";
	}
	
	
	
	
	
	

}