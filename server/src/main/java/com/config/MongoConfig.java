package com.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.user")
public class MongoConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "medi_connect";
    }

    @Override
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb+srv://medezadmin:123@newcluster.ecrflkv.mongodb.net");
    }
}