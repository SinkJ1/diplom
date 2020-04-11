package com.diplom.controllers;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Country;
import com.diplom.entity.dto.CountryDto;
import com.diplom.entity.dto.CountryDtoFilms;
import com.diplom.services.CountryService;
import com.diplom.services.MapperService;

@CrossOrigin // (origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/countries")
public class CountryController {

	@Autowired
	CountryService countryService;

	private List<CountryDto> mapToDto() {
		List<CountryDto> dtoList = new ArrayList<CountryDto>();

		for (Country countryList : countryService.getAll()) {
			dtoList.add(new MapperService<Country, CountryDto>(Country.class, CountryDto.class).toDto(countryList));
		}

		return dtoList;
	}

	private List<CountryDto> sortedCountryByName(List<CountryDto> dtoList) {
		dtoList = dtoList
				.stream()
				.sorted(Comparator.comparing(CountryDto::getName))
				.collect(Collectors.toList());

		return dtoList;
	}

	@GetMapping(value = "/all")
	public List<CountryDto> getAll() {
		return sortedCountryByName(mapToDto());
	}

	@GetMapping(value = "/{name}")
	public CountryDtoFilms getCountryByName(@PathVariable("name") String name) {
		return new MapperService<Country, CountryDtoFilms>(Country.class, CountryDtoFilms.class)
				.toDto(countryService.findByName2(name));
	}

}
