package com.Intertherapy.IntertherapySiteBackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.Intertherapy.IntertherapySiteBackend.UsersMailSender;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;;
@Service
public class emailService {

    @Autowired
    private JavaMailSender javaMailSender;    


    public String enviarEmailTexto(String from, String to, String about,String message){

        try{
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(from);
            simpleMailMessage.setTo(to);
            simpleMailMessage.setSubject(about);
            simpleMailMessage.setText(message);
            javaMailSender.send(simpleMailMessage);
            return "email enviado com sucesso";
        }
        catch(Exception e){
            return "erro ao enviar o email"+e.getLocalizedMessage();
        }
        
    }
}
