package com.mediconnect.server.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalTime;
import java.util.Date;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "administrators")
public class Administrator {
    @Id
    private String nid;
    private String phone_number;
    private String email;
    private String license_no;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date license_validity;
    private String code;
    private String hospital_name;
    private String employee_id;
    @Field("opening_time")
    @DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime opening_time;
    @Field("closing_time")
    @DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime closing_time;
    public Administrator(String email,String phone_number,String hospital_name,LocalTime opening_time,LocalTime closing_time){
        this.email=email;
        this.phone_number=phone_number;
        this.hospital_name=hospital_name;
        this.opening_time=opening_time;
        this.closing_time=closing_time;
    }
}
