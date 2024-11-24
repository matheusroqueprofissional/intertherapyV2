package Intertherapy.backend.oficialWebsite.service;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import org.springframework.stereotype.Service;

@Service
public interface TreatmentService {
    public Treatment create(Treatment treatment);

}
