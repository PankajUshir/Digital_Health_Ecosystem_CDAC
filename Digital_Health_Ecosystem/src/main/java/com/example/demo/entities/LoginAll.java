package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loginall")
public class LoginAll {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int lid;
	
	@Column
	String uname;
	@Column
	String password;
	@Column 
	String role;
	public LoginAll() {
		super();
	}
	public LoginAll(int lid, String uname, String password, String role) {
		super();
		this.lid = lid;
		this.uname = uname;
		this.password = password;
		this.role = role;
	}
	
	//without primary key (lid) contructor
	public LoginAll(String uname, String password, String role) {
		super();
		this.uname = uname;
		this.password = password;
		this.role = role;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	@Override
	public String toString() {
		return "LoginAll [lid=" + lid + ", uname=" + uname + ", password=" + password + ", role=" + role + "]";
	}
	
	
	
}
