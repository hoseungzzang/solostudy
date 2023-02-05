package org.zerock.api01.common.image.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.zerock.api01.rolling.dto.AddImgDTO;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveImagesRequest {

    private String name;
    private List<AddImgDTO> files;

    public SaveImagesDto convert() {

        return new SaveImagesDto(this.files, this.name);
    }

}
