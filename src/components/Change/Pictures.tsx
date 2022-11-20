import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";

const AllImages = ["https://www.kopiberi.ru/uploads/images/feature_image/screenshot-1-374.jpg",
    "https://gas-kvas.com/uploads/posts/2022-07/1658594639_1-gas-kvas-com-p-krasivie-foto-goroda-las-vegas-nochyu-1.jpg",
    "http://i1.wallbox.ru/wallpapers/main2/201726/berlinskij-kafedralnyj-sobor.jpg","https://i.artfile.ru/2048x1365_1068984_[www.ArtFile.ru].jpg"];


const Pictures = () => {

    const [Images, setImages] = useState(AllImages);
    const [changeble, setChangeble] = useState({ first: 0, second: 0 });

    const handleClickChangePic: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const temp = Images;
        const tempIndex = temp[changeble.first];
        temp[changeble.first] = temp[changeble.second];
        temp[changeble.second] = tempIndex;
        setImages(temp);
        setChangeble(prev => ({ ...prev }));
        console.log(changeble);

    }

    const handleIndexChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target);
        setChangeble(prev => ({ ...prev, [event.target.id]: Number(event.target.value) }));
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
                {
                    Images.map((item, index) => (<img key={index} style={{ marginLeft: "5px", objectFit: "cover", height: "210px" }} src={item} />))
                }
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <FormControl style={{ flex: 1 }}>

                    <InputLabel htmlFor="first">Номер первой картинки</InputLabel>

                    <Input inputProps={{ min: "0", max: "3" }} type="number" id="first" value={changeble.first} onChange={handleIndexChange} />


                </FormControl>

                <FormControl style={{ flex: 1 }}>

                    <InputLabel htmlFor="second">Номер второй картинки</InputLabel>

                    <Input inputProps={{ min: "0", max: "3" }} type="number" id="second" value={changeble.second} onChange={handleIndexChange} />

                </FormControl>

                <Button variant="outlined" onClick={handleClickChangePic}>Поменять местами</Button>
            </div>

        </div>
    );
}

export default Pictures;