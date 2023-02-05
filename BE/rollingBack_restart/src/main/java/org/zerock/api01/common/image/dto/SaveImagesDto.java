package org.zerock.api01.common.image.dto;

import lombok.Getter;
import org.zerock.api01.rolling.dto.AddImgDTO;

import java.util.List;

@Getter
public class SaveImagesDto {
    private String name;
    private List<AddImgDTO> files;

    public SaveImagesDto(List<AddImgDTO> files, String name) {
        this.files = files;
        this.name= name;
    }
}
