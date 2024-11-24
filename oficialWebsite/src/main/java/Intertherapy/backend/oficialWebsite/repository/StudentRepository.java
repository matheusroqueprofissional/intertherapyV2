package Intertherapy.backend.oficialWebsite.repository;

import Intertherapy.backend.oficialWebsite.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
