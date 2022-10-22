import React from "react";
import axios from 'axios';
import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import {IMenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = React.useState<number>(4);

    return (
        <>
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
            {menu.map(i => i)}
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: IMenuItem[]
    firstCategory: number
}
