package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.LoginAll;

@Transactional ///
@Repository
public interface LoginAllRepository extends JpaRepository<LoginAll, Integer> {
	
	
	//get using uname pass an role
	@Query("Select lr from LoginAll lr where uname=:uname and password=:password")
	public LoginAll loginReq(String uname, String password);
	
	



}
