import React from "react";
import {Button, Htag, Ptag, Rating, Tag} from "../components";

export default function Home(): JSX.Element {

    const [rating, setRating] = React.useState<number>(4);

    return (
        <div>
            <Htag tag='h3'>Hello world</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Ptag fontSize='14px'>hello world</Ptag>
            <Ptag fontSize='16px'>hello world</Ptag>
            <Ptag fontSize='18px'>hello world</Ptag>
            <Tag color='primary' size='large'>Hello World</Tag>
            <Tag color='primary'>Hello World</Tag>
            <Tag color='red' size='large'>Hello World</Tag>
            <Rating rating={rating} setRating={setRating} isEditable/>
        </div>
    );
}
