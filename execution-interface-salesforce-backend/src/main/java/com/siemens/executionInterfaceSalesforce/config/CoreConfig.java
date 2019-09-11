package com.siemens.executionInterfaceSalesforce.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Handles the bean configuration
 * 
 * @author z003uzwa
 *
 */
@Configuration 
@EnableAutoConfiguration 
@ComponentScan(basePackages= {"com.siemens.executionInterfaceSalesforce"})
public class CoreConfig {
	
}
