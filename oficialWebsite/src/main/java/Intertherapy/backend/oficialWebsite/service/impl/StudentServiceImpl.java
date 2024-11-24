package Intertherapy.backend.oficialWebsite.service.impl;

import Intertherapy.backend.oficialWebsite.model.Student;
import Intertherapy.backend.oficialWebsite.repository.StudentRepository;
import Intertherapy.backend.oficialWebsite.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student create(Student student) {
        return studentRepository.save(student);
    }
}
