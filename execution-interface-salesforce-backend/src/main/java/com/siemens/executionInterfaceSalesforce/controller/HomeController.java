package com.siemens.executionInterfaceSalesforce.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.siemens.executionInterfaceSalesforce.model.HomePage;
import com.siemens.executionInterfaceSalesforce.model.HomePageMenu;
import com.siemens.executionInterfaceSalesforce.model.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * @author z003uzwa
 */
@Api(tags = { "HomeController" })
@RestController
@RequestMapping("/homePage")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

	/**
	 * Logger for the Controller
	 */
	private static final Logger logger = LogManager.getLogger(HomeController.class);

	@ApiOperation(value = "Request mapping for getting the home page data \r\n" + 
			"containing logged in user info and home page menu list", response = HomePage.class, responseContainer = "ResponseEntity")
	@ApiResponses(value = {
	        @ApiResponse(code = 200, message = "Successfully retrieved home page data"),
	        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
	        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
	        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
	})
	@RequestMapping(method=RequestMethod.GET, produces="application/json")
	public ResponseEntity<HomePage> getWelcomePageData() {
		logger.debug(">> getWelcomePageData() controller <<");
		return new ResponseEntity<>(getHomePageData(), getHttpHeaders(), HttpStatus.OK);
	}
	
	/**
	 * Getting the required HTTP headers
	 * 
	 * @return HttpHeaders contains header information
	 */
	private HttpHeaders getHttpHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.add("content-type", "application/json");
		return headers;
	}
	
	/**
	 * Getting a dummy home page data
	 * 
	 * @return HomePage
	 */
	private HomePage getHomePageData() {
		HomePage homePageData = new HomePage();
		
		List<HomePageMenu> menuList = new ArrayList<>();
		menuList.add(new HomePageMenu("Opportunities", "fa fa-bullhorn fa-5x"));
		menuList.add(new HomePageMenu("Import Data", "fa fa-file fa-5x"));
		menuList.add(new HomePageMenu("Admin", "fa fa-user fa-5x"));
		menuList.add(new HomePageMenu("Notify Users", "fa fa-comment fa-5x"));
		menuList.add(new HomePageMenu("More Options", "fa fa-list fa-5x"));
		
		homePageData.setMenu(menuList);
		homePageData.setUserData(new User("Akshay Verma", "z003jdhh", "xyz@siemens.com"));
		
		return homePageData;
	}
}
