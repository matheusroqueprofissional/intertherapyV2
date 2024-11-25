package Intertherapy.backend.oficialWebsite.service.impl;

import Intertherapy.backend.oficialWebsite.model.Employer;
import Intertherapy.backend.oficialWebsite.repository.sendImagesCarouselRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class sendImagesCarouselImpl {
    @Autowired
    SendImagesCarouselRepository sendImagesCarouselRepository;

    @Override
    public Employer create(SendImagesCarouselImpl sendImagesCarousel) {
        return employerRepository.save(employer);
    }

}
