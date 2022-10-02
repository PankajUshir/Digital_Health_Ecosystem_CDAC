package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.AmbulanceOrder;

@Transactional
@Repository
public interface AmbulanceOrderRepository extends JpaRepository<AmbulanceOrder, Integer> {


//	@Query(value="select * from ambulanceorder where pid=pid",nativeQuery = true)
//	public List<AmbulanceOrder> yourOrders(int pid);
	
//	@Query(value="select * from ambulanceorder where pid=pid",nativeQuery = true)
////	@Query("select uo from AmbulanceOrder uo where uo.pid")
//	public List<AmbulanceOrder> yourOrders(int pid);

	

	// for ambulanace dashbord to get all orders--------------
	//	@Query("Select ao from AmbulanceOrder ao where ao.order_status=:order_status and ao.aprove_status=:aprove_status and ao.ambulance=:aid")
	@Query(value = "select * from ambulanceorder ao where ao.order_status=:order_status and ao.aprove_status=:aprove_status and ao.aid=:aid", nativeQuery = true)
	public List<AmbulanceOrder> getAllOrders(int aid, int order_status, int aprove_status);

	// for accepting oeder from ambulance owner/dashbord
	@Modifying(clearAutomatically = true)
	@Query("update AmbulanceOrder ao set ao.aprove_status=:aprove_status where aoid=:aoid")
	public int updateOrderStatus(int aoid, int aprove_status);

//	//		for getting all order history
//	//	@Query("select ap from AmbulanceOrder ap where ap.aprove_status=:aprove_status and ap.ambulance=:aid")
//	@Query(value = "select * from AmbulanceOrder op where op.aprove_status= aprove_status and  op.aid= aid ", nativeQuery = true)
//	public List<AmbulanceOrder> getOrderHistory( int aid,int aprove_status);
////	@Query(value = "SELECT * FROM USERS u WHERE u.status = 1", nativeQuery = true)
//	
	
//	@Query("select ap from AmbulanceOrder ap where ap.aprove_status=:aprove_status")
//	public List<AmbulanceOrder> getOrderHistory( int aprove_status);

}
