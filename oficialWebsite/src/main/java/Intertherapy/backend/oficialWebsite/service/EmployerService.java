package Intertherapy.backend.oficialWebsite.service;

import Intertherapy.backend.oficialWebsite.model.Employer;
import Intertherapy.backend.oficialWebsite.model.Treatment;
import org.springframework.stereotype.Service;

@Service
public interface EmployerService {
    public Employer create(Employer employer);

}
