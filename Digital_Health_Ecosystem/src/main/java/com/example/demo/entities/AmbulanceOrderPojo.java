package com.example.demo.entities;

public class AmbulanceOrderPojo {

	private int aid;
	private String source;
	private String destination;
	private String date;
	private int pid;
	
	public AmbulanceOrderPojo(int aid, String source, String destination, String date,int pid) {
		super();
		this.aid = aid;
		this.source = source;
		this.destination = destination;
		this.date = date;
		this.pid = pid;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	@Override
	public String toString() {
		return "AmbulanceOrderPojo [aid=" + aid + ", source=" + source + ", destination=" + destination + ", date="
				+ date + ", pid=" + pid + "]";
	}
	
	
	
	
}
