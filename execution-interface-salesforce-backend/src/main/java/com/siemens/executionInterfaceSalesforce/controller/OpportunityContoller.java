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

import com.siemens.executionInterfaceSalesforce.model.Opportunity;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * @author z003uzwa
 *
 */
@Api(tags = { "OpportunityController" })
@RestController
@RequestMapping("/opportunities")
@CrossOrigin(origins = "http://localhost:4200")
public class OpportunityContoller {

	/**
	 * Logger for the Controller
	 */
	private static final Logger logger = LogManager.getLogger(OpportunityContoller.class);

	@ApiOperation(value = "Request mapping for getting the list of opportunities", response = Opportunity.class, responseContainer = "List")
	@ApiResponses(value = {
	        @ApiResponse(code = 200, message = "Successfully retrieved list of opportunities"),
	        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
	        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
	        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
	})
	@RequestMapping(method=RequestMethod.GET, produces = "application/json")
	public ResponseEntity<List<Opportunity>> getOpportunities(){
		logger.debug(">> getOpportunities() controller <<");
		return new ResponseEntity<>(getOpportunityList(), getHttpHeaders(), HttpStatus.OK);
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
	 * Getting a dummy opportunity list 
	 * 
	 * @return List<Opportunity>
	 */
	private List<Opportunity> getOpportunityList() {
		List<Opportunity> opportunities = new ArrayList<>();
		opportunities.add(new Opportunity("Asia", "In Progress", "cmt1", "dep1"));
		opportunities.add(new Opportunity("Europe", "In Progress", "cmt2", "dep2"));
		opportunities.add(new Opportunity("America", "Done", "cmt3", "dep3"));
		opportunities.add(new Opportunity("Africa", "In Progress", "cmt4", "dep4"));
		opportunities.add(new Opportunity("England", "In Progress", "cmt5", "dep5"));
		
		return opportunities;
	}
}
