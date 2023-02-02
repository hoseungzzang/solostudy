package org.zerock.api01.common.image.dto;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
public class SaveImagesDto {
    private List<MultipartFile> files;

    private String title;

    public SaveImagesDto(List<MultipartFile> files, String title) {
        this.files = files;
        this.title = title;
    }
}
