package com.diplom.controllers;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Country;
import com.diplom.entity.dto.CountryDto;
import com.diplom.entity.dto.CountryDtoFilms;
import com.diplom.services.CountryService;
import com.diplom.services.MapperService;

@CrossOrigin ( methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RestController
@RequestMapping(value = "/countries")
public class CountryController extends AbstractController<Country>{

	@Autowired
	CountryService countryService;

	private List<CountryDto> mapToDto() {
		List<CountryDto> dtoList = new ArrayList<CountryDto>();

		for (Country countryList : countryService.getAll()) {
			dtoList.add(new MapperService<Country, CountryDto>(Country.class, CountryDto.class).toDto(countryList));
		}

		return dtoList;
	}
	
	@PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseStatus(code = HttpStatus.OK)
	public void update(@RequestBody CountryDto film) {
		countryService.update(new MapperService<Country, CountryDto>(Country.class, CountryDto.class).toEntity(film));
	}

	@DeleteMapping(value = "/delete", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseStatus(code = HttpStatus.OK)
	public void delete(@RequestBody CountryDto film) {
		countryService.delete(new MapperService<Country, CountryDto>(Country.class, CountryDto.class).toEntity(film));
	}
	
	private List<CountryDto> sortedCountryByName(List<CountryDto> dtoList) {
		dtoList = dtoList
				.stream()
				.sorted(Comparator.comparing(CountryDto::getName))
				.collect(Collectors.toList());

		return dtoList;
	}

	@GetMapping(value = "/all")
	public List<CountryDto> getAllDto() {
		return sortedCountryByName(mapToDto());
	}

	@GetMapping(value = "/{name}")
	public CountryDtoFilms getCountryByName(@PathVariable("name") String name) {
		return new MapperService<Country, CountryDtoFilms>(Country.class, CountryDtoFilms.class)
				.toDto(countryService.findByName2(name));
	}

}
