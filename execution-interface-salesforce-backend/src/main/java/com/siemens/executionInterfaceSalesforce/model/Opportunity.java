package com.siemens.executionInterfaceSalesforce.model;

import io.swagger.annotations.ApiModelProperty;

/**
 * Model Object for Opportunity Data 
 * 
 * @author z003uzwa
 */
public class Opportunity {

	@ApiModelProperty(notes = "Country under which the Opportunity came")
	private String country;

	@ApiModelProperty(notes = "Status of the Opportunity")
	private String status;

	@ApiModelProperty(notes = "Comment on the Opportunity")
	private String comment;

	@ApiModelProperty(notes = "Opportunity's central department")
	private String centralDept;
	
	public Opportunity(String country, String status, String comment, String centralDept) {
		super();
		this.country = country;
		this.status = status;
		this.comment = comment;
		this.centralDept = centralDept;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCentralDept() {
		return centralDept;
	}

	public void setCentralDept(String centralDept) {
		this.centralDept = centralDept;
	}
	
}
