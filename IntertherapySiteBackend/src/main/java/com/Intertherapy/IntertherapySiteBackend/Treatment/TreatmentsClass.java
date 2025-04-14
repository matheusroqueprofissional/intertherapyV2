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
@Entity
public class TreatmentsClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String Name;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String Resume;

    private String ImageUrl;
    private String Area;

    // Você pode deixar esse construtor auxiliar, se quiser validar manualmente
    public TreatmentsClass(String name, String resume, String imageUrl, String area) {
        this.Name = name;
        this.Resume = resume;
        this.ImageUrl = imageUrl;
        this.Area = area;

    }
}
