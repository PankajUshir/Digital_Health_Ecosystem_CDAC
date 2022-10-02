package com.example.demo.entities;


public class AmbulancePojo {
	
	private int aid;
	private String drivername;
	private String aregno;
	private String avehicalno;
	private String email;
	private String mono;
	private String website; 
	private String state;
	private String city ;
	private int pincode;
	private String landmark; 
	private int availablestatus;
	private int ac_status;
	private int lid;
	
	//for storing data of user/LoginAll tbl
	private String uname;
	private String password;
	private String role;
	
	public AmbulancePojo() {
		super();
	}

	public AmbulancePojo(int aid, String drivername, String aregno, String avehicalno, String email, String mono,
			String website, String state, String city, int pincode, String landmark, int availablestatus, int ac_status,
			int lid) {
		super();
		this.aid = aid;
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

	public AmbulancePojo(String drivername, String aregno, String avehicalno, String email, String mono, String website,
			String state, String city, int pincode, String landmark, int availablestatus, int ac_status, int lid) {
		super();
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

	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
	}
	
	//uname , password and role getter setter (not table filds used fk )
	
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Ambulance [aid=" + aid + ", drivername=" + drivername + ", aregno=" + aregno + ", avehicalno="
				+ avehicalno + ", email=" + email + ", mono=" + mono + ", website=" + website + ", state=" + state
				+ ", city=" + city + ", pincode=" + pincode + ", landmark=" + landmark + ", availablestatus="
				+ availablestatus + ", ac_status=" + ac_status + ", lid=" + lid + ", uname=" + uname + ", password="
				+ password + ", role=" + role + "]";
	}
	
	
	
	

}
