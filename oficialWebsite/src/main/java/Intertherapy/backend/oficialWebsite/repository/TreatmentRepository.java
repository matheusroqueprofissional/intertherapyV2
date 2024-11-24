package Intertherapy.backend.oficialWebsite.repository;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TreatmentRepository extends JpaRepository<Treatment, Integer> {
}
