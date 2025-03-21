package com.Intertherapy.IntertherapySiteBackend.Employer;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Employers")
@Entity(name = "intertherapyLocal")
public class EmployerClass {

    @Id @GeneratedValue
    private int id;
    private String Name;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String Resume;
    private String ImageUrl;
    private String Area;

    public EmployerClass(Integer o, String Name, String Resume, String ImageUrl, String Area) {
        this.Name = Name;
        this.Resume = Resume;
        this.ImageUrl = ImageUrl;
        this.Area = Area;

        if(this.Name.isEmpty()||this.Resume.isEmpty()||this.ImageUrl.isEmpty()||this.Area.isEmpty()){
            System.out.println("dados faltando\n{{this.Name}}\n{{this.Resume}}\n{{this.ImageUrl}}");
            return;
        }
    }
}
