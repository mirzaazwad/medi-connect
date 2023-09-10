package com.mediconnect.server.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collation = "users")
public class User {
    @Id
    private String _id;
    private String email;
    private String username;
    private String password;
    private Boolean email_verified;

}
