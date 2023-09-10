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

@Data
@Builder
@Document(collection = "doctors")
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
    @Id
    private String bmdc;
    private String phone_number;
    private String nid;
    private String mbbs_from;
    private String mbbs_batch;
    private String md_from;
    private String current_practicing_in;
    private String email;
    @Field("opening_time")
    @DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime opening_time;
    @Field("closing_time")
    @DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime closing_time;

    public Doctor(String email,String phone_number,String nid,LocalTime opening_time,LocalTime closing_time){
        this.email=email;
        this.phone_number=phone_number;
        this.nid=nid;
        this.opening_time=opening_time;
        this.closing_time=closing_time;
    }


}
