package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Patient;

@Transactional
@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	
	@Query("select distinct p.city from Patient p")
	public List<String> getAllCities();
	
	@Modifying(clearAutomatically = true)
	@Query("update Patient pat set pat.ac_status=:ac_status where pat.pid=:pid ")
	public int deleteAccount( int pid, int ac_status);
	
	
	@Modifying(clearAutomatically = true)
	@Query("update Patient pat set pat.fname=:fname,pat.lname=:lname,pat.email=:email,pat.mono=:mono,pat.adharno=:adharno,pat.dob=:dob,pat.gender=:gender,pat.bloodgrp=:bloodgrp,pat.email=:email,pat.state=:state,pat.city=:city,pat.pincode=:pincode,pat.landmark=:landmark where pat.pid=:pid ")
	public int updatePatientProfile( int pid,String fname, String lname,String email,String mono,String adharno,String dob,String gender, String bloodgrp,String state,String city,int pincode,String landmark );
}
