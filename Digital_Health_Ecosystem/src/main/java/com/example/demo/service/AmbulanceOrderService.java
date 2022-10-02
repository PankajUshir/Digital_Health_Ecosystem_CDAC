package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.AmbulanceOrder;
import com.example.demo.entities.Patient;
import com.example.demo.repository.AmbulanceOrderRepository;

@Service
public class AmbulanceOrderService {

	@Autowired
	AmbulanceOrderRepository aorepo;

	public AmbulanceOrder bookedAmbulance(AmbulanceOrder aorder) {
		try {
			System.out.println("Order = "+aorder.getOrder_status() + " "+ aorder.getPatient().getPid());
			aorepo.save(aorder);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return aorder;
	}
	
	public List<AmbulanceOrder> yourOrders(int pid){
		System.out.println("PID : "+pid);
		
		List<AmbulanceOrder> newlist = new ArrayList<AmbulanceOrder>();
//		try {
//			list = aorepo.yourOrders(pid);
//			System.out.println(list);
//		}
//		catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
		try {
//			 new ArrayList<>();
//			aorepo.yourOrders(pid);
			List<AmbulanceOrder> list= aorepo.findAll();
			for(AmbulanceOrder a: list)
			{
				if(a.getPatient().getPid()==pid)
				{
					newlist.add(a);
				}
			}
			
			
		} catch (Exception e) {
		System.out.println("some prn ocure in YourOrder");
		e.printStackTrace();
		}
		return newlist;

	}
	
	//for ambulanace dashbord to get all orders 
		public List<AmbulanceOrder> getAllOrders(int aid)
		{
			int order=1;
			int aprove_status=0;
			List<AmbulanceOrder> list = new ArrayList<AmbulanceOrder>();
			try {
				list=aorepo.getAllOrders(aid,order,aprove_status);
			} catch (Exception e) {
				e.printStackTrace();
			}

			return list;
		}

		//for accepting oeder from ambulance owner/dashbord
		public int updateOrderStatus(int aoid)
		{
			int aprove_status=1;
			int noofrowsaffected=0;
			try {
				noofrowsaffected=aorepo.updateOrderStatus(aoid, aprove_status);

			} catch (Exception e) {
				System.out.println("Some prb occured in UPDATEORDER TABLE");
				e.printStackTrace();
			}
			return noofrowsaffected;
		}

		//	for getting all order history
		public List<AmbulanceOrder> getOrderHistory(int aid)
		{
//			int aprove_status=1;
////			int order = 1;
//			List<AmbulanceOrder> list = new ArrayList<AmbulanceOrder>();
//			try {
//				list=aorepo.getOrderHistory(aprove_status,aid);
//			} catch (Exception e) {
//				e.printStackTrace();
//				System.out.println("some prb occure");		
//			}
//			System.out.println(list);
//			return list;
			int aprove_status=1;
			List<AmbulanceOrder> newList=new ArrayList<>();

			try {
				List<AmbulanceOrder> list=aorepo.findAll();
				for(AmbulanceOrder a: list)
				{
					if(a.getAmbulance().getAid()==aid && a.getAprove_status()==1)
					{
						newList.add(a);
					}
				}
				
			} catch (Exception e) {
				System.out.println("some error occure");
				e.printStackTrace();
			}
			return newList;
			
		}
}
