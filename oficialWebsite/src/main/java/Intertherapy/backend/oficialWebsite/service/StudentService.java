package Intertherapy.backend.oficialWebsite.service;

import Intertherapy.backend.oficialWebsite.model.Student;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {

    public Student create(Student student);
}
