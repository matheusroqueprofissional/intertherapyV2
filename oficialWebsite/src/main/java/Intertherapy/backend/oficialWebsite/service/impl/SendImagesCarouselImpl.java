package Intertherapy.backend.oficialWebsite.service.impl;

import Intertherapy.backend.oficialWebsite.model.SendImagesCarousel;
import Intertherapy.backend.oficialWebsite.repository.SendImagesCarouselRepository;
import Intertherapy.backend.oficialWebsite.service.SendImagesCarouselService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SendImagesCarouselImpl implements SendImagesCarouselService {
    @Autowired
    SendImagesCarouselRepository sendImagesCarouselRepository;

    @Override
    public SendImagesCarousel create(SendImagesCarousel sendImagesCarousel) {
        return sendImagesCarouselRepository.save(sendImagesCarousel);
    }

}
