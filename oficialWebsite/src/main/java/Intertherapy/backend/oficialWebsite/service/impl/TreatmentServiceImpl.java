package Intertherapy.backend.oficialWebsite.service.impl;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import Intertherapy.backend.oficialWebsite.repository.TreatmentRepository;
import Intertherapy.backend.oficialWebsite.service.TreatmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentServiceImpl implements TreatmentService {

    @Autowired
    TreatmentRepository treatmentRepository;

    @Override
    public Treatment create(Treatment treatment) {
        return treatmentRepository.save(treatment);
    }

    @Override
    public List<Treatment> findAll() {
        return treatmentRepository.findAll();
    }
}
