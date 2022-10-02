package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Ambulance;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.LoginAll;
import com.example.demo.entities.Patient;
import com.example.demo.repository.AmbulanceRepository;
import com.example.demo.repository.HospitalRepository;
import com.example.demo.repository.LoginAllRepository;
import com.example.demo.repository.PatientRepository;

@Service
public class LoginAllService {

	@Autowired
	LoginAllRepository lrepo;		//login all repo instance

	@Autowired
	AmbulanceRepository arepo;		//ambulance repo instance
	
	@Autowired
	HospitalRepository hrepo;
	
	@Autowired
	PatientRepository prepo;
	
	//add bloddbank

	public LoginAll signUp(LoginAll loginallobj )
	{
		return lrepo.save(loginallobj);
	}

	public Object loginReq(LoginAll loginallobj)
	{
		Object commanobj=null;
		try
		{
			LoginAll lallobj= lrepo.loginReq(loginallobj.getUname(), loginallobj.getPassword());
			System.out.println(lallobj);

			if(lallobj==null)
			{
				System.out.println("Can not found data with Uname and Password /Not registerd??");
				return commanobj;
			}
			int lid=lallobj.getLid();
			System.out.println("Got LID from LoginALL tbl -"+lid);
			System.out.println("-------------------------------------------------");


			List<Ambulance> aall=arepo.findAll();
			List<Hospital> hall= hrepo.findAll();
			List<Patient> pall= prepo.findAll();
			//add bloodbank

			if(lallobj.getRole().equalsIgnoreCase("hospital"))
			{
//				Ambulance tempobj=null;
					for(int i=0;i<hall.size();i++) //for each loop
					{
						Hospital ha= hall.get(i);
						int lid2= ha.getLid().getLid();
						if( lid==lid2 && ha.getAc_status()==1 )
						{
							commanobj= ha;
						}
					}
					System.out.println("GOT Hospital with login- "+commanobj);
			}
			else if(lallobj.getRole().equalsIgnoreCase("ambulance"))
			{ 
				//			Ambulance tempobj=null;
				for(int i=0;i<aall.size();i++)
				{
					Ambulance la= aall.get(i);
					int lid1= la.getLid().getLid();
					if( lid==lid1 && la.getAc_status()==1)
					{
						commanobj= la;
					}
				}
				System.out.println("GOT Ambulance with login- "+commanobj);
			}
			else if(lallobj.getRole().equalsIgnoreCase("patient"))
			{
				for(int i=0;i<pall.size();i++)
				{
					Patient pa= pall.get(i);
					int lid2= pa.getLid().getLid();
					if( lid==lid2 && pa.getAc_status()==1)
					{
						commanobj= pa;
					}
				}
				System.out.println("GOT Patient with login- "+commanobj);
			}
			//admin login
			else if(lallobj.getRole().equalsIgnoreCase("admin"))
			{
				System.out.println("\n\nI am in Admin section\n\n");
				System.out.println(lallobj);
				commanobj=lallobj;
			}
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}

		if(commanobj==null )
			return null;
		else
			return commanobj;
	}

	//	public boolean loginReq(String uname, String password)
	//	{
	//		boolean sucess=false;
	//		LoginAll la=lrepo.loginReq(uname, password);
	//		System.out.println(la);
	//		if((la!=null) && ( la.getUname().equals(uname) && la.getPassword().equals(password)) )
	//		{
	//			sucess=true;
	//		}
	//		return sucess;
	//	}

}
