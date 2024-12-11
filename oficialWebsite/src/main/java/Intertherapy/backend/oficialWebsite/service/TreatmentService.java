package Intertherapy.backend.oficialWebsite.service;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TreatmentService {
    public Treatment create(Treatment treatment);

    List<Treatment> findAll();
}
