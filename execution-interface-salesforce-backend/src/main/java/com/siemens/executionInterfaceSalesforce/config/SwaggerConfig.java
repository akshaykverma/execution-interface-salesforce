package com.siemens.executionInterfaceSalesforce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
//import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig extends WebMvcConfigurationSupport {
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.siemens.executionInterfaceSalesforce"))
				// .paths(regex("/product.*"))
				.build()
				.apiInfo(metaData())
				.tags(new Tag("HomeController", "Handles the mapping for Home page"),
						new Tag("OpportunityController", "Handle the request mapping for Opportunity Data"));

	}

	private ApiInfo metaData() {
        return new ApiInfoBuilder()
                .title("Execution Interface Salesforce REST API")
                .description("\"Documentation for Execution Interface Salesforce API\"")
                .version("1.0.0")
                .contact(new Contact("Akshay Kumar Verma", "", "akshaykumar.verma@siemens.com"))
                .build();
    }
	@Override
	protected void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
		registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
	}
}