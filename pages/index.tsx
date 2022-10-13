import {Button, Htag} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h3'>Тайтл</Htag>
            <Button appearance='primary'>Кнопка</Button>
            <Button appearance='ghost'>Кнопка</Button>
        </div>
    );
}
