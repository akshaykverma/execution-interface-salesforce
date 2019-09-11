package com.siemens.executionInterfaceSalesforce.model;

import io.swagger.annotations.ApiModelProperty;

/**
 * Model object for user data
 * 
 * @author z003uzwa
 *
 */
public class User {

	@ApiModelProperty(notes = "User's name")
	private String userName;
	
	@ApiModelProperty(notes = "User's unique ZID")
	private String zid;
	
	@ApiModelProperty(notes = "User's email ID")
	private String emailId;

	public User(String userName, String zid, String emailId) {
		super();
		this.userName = userName;
		this.zid = zid;
		this.emailId = emailId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getZid() {
		return zid;
	}

	public void setZid(String zid) {
		this.zid = zid;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}
