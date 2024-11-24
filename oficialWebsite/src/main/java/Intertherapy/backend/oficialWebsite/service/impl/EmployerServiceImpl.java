package Intertherapy.backend.oficialWebsite.service.impl;

import Intertherapy.backend.oficialWebsite.model.Employer;
import Intertherapy.backend.oficialWebsite.repository.EmployerRepository;
import Intertherapy.backend.oficialWebsite.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployerServiceImpl implements EmployerService {

    @Autowired
    EmployerRepository employerRepository;

    @Override
    public Employer create(Employer employer) {
        return employerRepository.save(employer);
    }

}
