package com.siemens.executionInterfaceSalesforce.model;

import io.swagger.annotations.ApiModelProperty;

/**
 * Model object for home page menu
 * 
 * @author z003uzwa
 */
public class HomePageMenu {

	@ApiModelProperty(notes = "Home page menu item name")
	private String menuName;
	
	@ApiModelProperty(notes = "CSS icon class name used for the menu item")
	private String iconCSSClass;

	public HomePageMenu(String menuName, String iconCSSClass) {
		super();
		this.menuName = menuName;
		this.iconCSSClass = iconCSSClass;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getIconCSSClass() {
		return iconCSSClass;
	}

	public void setIconCSSClass(String iconCSSClass) {
		this.iconCSSClass = iconCSSClass;
	}

}
