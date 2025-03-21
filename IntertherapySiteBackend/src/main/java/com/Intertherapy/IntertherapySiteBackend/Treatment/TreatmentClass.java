package com.Intertherapy.IntertherapySiteBackend.Treatment;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Treatments")
@Entity(name = "intertherapyLocal2")
public class TreatmentClass {
    @Id
    @GeneratedValue
    private int id;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String Name;
    private String Description;
    private String Area;
    private String UrlImage;

    public TreatmentClass(Integer o, String name, String description, String urlImage, String area) {
        this.Name = name;
        this.Description = description;
        this.Area = area;
        this.UrlImage = urlImage;

    }
}
