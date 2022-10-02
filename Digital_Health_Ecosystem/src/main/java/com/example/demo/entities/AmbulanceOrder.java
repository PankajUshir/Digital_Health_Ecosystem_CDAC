package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ambulanceorder")
public class AmbulanceOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int aoid;

	@Column
	private String source;

	@Column
	private String destination;

	@Column
	private String date;
	
	@Column
	private int aprove_status;
	
	@Column
	private int order_status;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "aid")
	private Ambulance ambulance;

//	@JsonIgnoreProperties("ambOrder")
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "aid")
//	private Ambulance ambulance;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "pid")
	private Patient patient;

//	@JsonIgnoreProperties("patOrder")
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "pid")
//	private Patient patient;

	
	
	
	public AmbulanceOrder(String source, String destination, String date, int order_status, int aprove_status,
			Ambulance ambulance, Patient patient) {
		super();
		this.source = source;
		this.destination = destination;
		this.date = date;
		this.order_status = order_status;
		this.aprove_status = aprove_status;
		this.ambulance = ambulance;
		this.patient = patient;
	}
	

	public AmbulanceOrder() {
	super();
}


	public int getAoid() {
		return aoid;
	}

	

	public void setAoid(int aoid) {
		this.aoid = aoid;
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

	public Ambulance getAmbulance() {
		return ambulance;
	}

	public void setAmbulance(Ambulance ambulance) {
		this.ambulance = ambulance;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public int getOrder_status() {
		return order_status;
	}

	public void setOrder_status(int order_status) {
		this.order_status = order_status;
	}

	public int getAprove_status() {
		return aprove_status;
	}

	public void setAprove_status(int aprove_status) {
		this.aprove_status = aprove_status;
	}

	@Override
	public String toString() {
		return "AmbulanceOrder [aoid=" + aoid + ", source=" + source + ", destination=" + destination + ", date=" + date
				+ ", order=" + order_status + ", aprove_status=" + aprove_status + ", ambulance=" + ambulance + ", patient="
				+ patient + "]";
	}

	
}
