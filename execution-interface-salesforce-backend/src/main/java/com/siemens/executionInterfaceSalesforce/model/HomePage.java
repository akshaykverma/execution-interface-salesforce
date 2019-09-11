package com.siemens.executionInterfaceSalesforce.model;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;

/**
 * Model Object containing the logged in user data and the list of menu items
 * 
 * @author z003uzwa
 *
 */
public class HomePage {

	@ApiModelProperty(notes = "Logged in user data")
	private User userData;
	
	@ApiModelProperty(notes = "Home page menu items")
	private List<HomePageMenu> menu;

	public HomePage() {
		super();
	}

	public HomePage(User userData, List<HomePageMenu> menu) {
		super();
		this.userData = userData;
		this.menu = menu;
	}

	public User getUserData() {
		return userData;
	}

	public void setUserData(User userData) {
		this.userData = userData;
	}

	public List<HomePageMenu> getMenu() {
		return menu;
	}

	public void setMenu(List<HomePageMenu> menu) {
		this.menu = menu;
	}
	
}
