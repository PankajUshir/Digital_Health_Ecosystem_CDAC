package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.demo.*")
//@EnableEncryptableProperties
public class DigitalHealthEcosystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalHealthEcosystemApplication.class, args);
	}
}
