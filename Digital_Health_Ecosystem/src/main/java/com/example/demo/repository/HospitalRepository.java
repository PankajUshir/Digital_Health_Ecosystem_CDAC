package com.example.demo.repository;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.Hospital;


@Repository
@Transactional
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {

//	hb
	@Query(value = "select * from hospital where lid=lid", nativeQuery = true)
	public Hospital findusingLid(int lid);

	
	//-------------- mm
	//for softdelete i.e only to change account status

	@Modifying(clearAutomatically = true)
	@Query("update Hospital hospital set hospital.ac_status=:ac_status where hospital.hid=:hid ")
	public int deleteAccount( int hid, int ac_status);



	//for update ambulance profile information
	@Modifying(clearAutomatically = true)
	@Query("update Hospital hospital set hospital.hname=:hname,hospital.hregno=:hregno,hospital.hinfo=:hinfo,hospital.genralbed=:genralbed,hospital.icubed=:icubed,hospital.genbedlastupdate=:genbedlastupdate,hospital.icubedlastupdate=:icubedlastupdate,hospital.email=:email,hospital.mono=:mono,hospital.website=:website,hospital.state=:state,hospital.city=:city,hospital.pincode=:pincode,hospital.landmark=:landmark where hospital.hid=:hid ")
	public int updateHospitalProfile( int hid,String hname,String hregno,String hinfo,int genralbed,int icubed,int genbedlastupdate,int icubedlastupdate, String email,String mono, String website,String state,String city,int pincode,String landmark ); 
	//			aid, drivername, aregno, avehicalno, email, mono, website, state, city, pincode, landmark, availablestatus, ac_status, lid
	//	       hid,hname,hinfo,genralbed,icubed,genralbedlastupdate,icubedlastupdate,email,mono,website,state,city,pincode,landmark

//-------------------pu

	@Query("select distinct h.city from Hospital h")
	public List<String> getHospitalCities();


	@Query("select h from Hospital h where h.city=:city and h.ac_status=:ac_status")
	public List<Hospital> getHospital(String city,int ac_status);

}
