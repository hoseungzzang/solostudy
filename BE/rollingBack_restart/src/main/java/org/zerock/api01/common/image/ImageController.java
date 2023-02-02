package org.zerock.api01.common.image;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.zerock.api01.common.image.dto.SaveImageRequest;
import org.zerock.api01.common.image.dto.SaveImagesRequest;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class ImageController {

    private final ImageService imageService;

    // 이미지 저장
    @PostMapping("/image")
    public String saveImage(SaveImageRequest request) {
        String imageUri = imageService.saveImage(request.convert());

        return imageUri;
    }

    // 이미지 조회
    @GetMapping(value = "/image/{storedName}",
            produces = {MediaType.IMAGE_JPEG_VALUE})
    public Resource getImage(@PathVariable("storedName") String storedName) {
        Resource file = imageService.readImage(storedName);

        return file;
    }

    // 이미지 여러개 저장
    @PostMapping("/images")
    public List<String> saveImages(SaveImagesRequest request) {
        List<String> imageUris = imageService.saveImages(request.convert());

        return imageUris;
    }


}
