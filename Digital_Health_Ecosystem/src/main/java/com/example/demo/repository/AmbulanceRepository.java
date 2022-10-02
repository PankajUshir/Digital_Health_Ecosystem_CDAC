package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.AmbulancePojo;

@Transactional
@Repository
public interface AmbulanceRepository extends JpaRepository<Ambulance, Integer> {
	
//	@Query("Select lr from Ambulance lr where lid=:lid")
//	public Ambulance findusingLid(int lid);
	
	@Query(value = "select * from ambulance where lid=lid", nativeQuery = true)
	public Ambulance findusingLid(int lid);
	
	//for updating ambulance woking or not status
	@Modifying(clearAutomatically = true)
	@Query("update Ambulance amb set amb.availablestatus=:availablestatus where amb.aid=:aid ")
	public int chnageAmbWorkingStatus( int aid,int availablestatus);
	
	//for softdelete i.e just chage ac status

	@Modifying(clearAutomatically = true)
	@Query("update Ambulance amb set amb.ac_status=:ac_status where amb.aid=:aid ")
	public int deleteAccount( int aid, int ac_status);
	
	//for update ambulance profile information
	@Modifying(clearAutomatically = true)
	@Query("update Ambulance amb set amb.drivername=:dname,amb.aregno=:aregno,amb.avehicalno=:avehicalno,amb.email=:email,amb.mono=:mono,amb.website=:website,amb.state=:state,amb.city=:city,amb.pincode=:pincode,amb.landmark=:landmark where amb.aid=:aid ")
	public int updateAmbProfile( int aid,String dname,String aregno,String avehicalno,String email,String mono,String website, String state,String city,int pincode,String landmark ); 
//	aid, drivername, aregno, avehicalno, email, mono, website, state, city, pincode, landmark, availablestatus, ac_status, lid

	@Query("select distinct a.city from Ambulance a")
	public List<String> getAmbulanceCities();
	
//	@Query(value = "select * from ambulance where city=city and ac_status=1 and availablestatus=1", nativeQuery = true)
//	public List<Ambulance> getAmbulances(String city );
	
	
	@Query("select a from Ambulance a where a.city=:city and a.ac_status=:ac_status and a.availablestatus=:availablestatus")
	public List<Ambulance> getAmbulances(String city, int availablestatus,int ac_status);

}
