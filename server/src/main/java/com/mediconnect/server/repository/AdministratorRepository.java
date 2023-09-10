package com.mediconnect.server.repository;

import com.mediconnect.server.model.Administrator;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdministratorRepository extends MongoRepository<Administrator,String> {
}
