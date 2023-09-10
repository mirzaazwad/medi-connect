package com.mediconnect.server.repository;

import com.mediconnect.server.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorRepository extends MongoRepository<Doctor,String> {
}
