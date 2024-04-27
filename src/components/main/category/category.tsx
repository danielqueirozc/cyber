import { CategoryCard } from "./categoryCard";

import phonesIcon from '@/assets/icons/Phones.svg';
import smartWatchsIcon from '@/assets/icons/Smart-Watches.svg';
import camerasIcon from '@/assets/icons/Cameras.svg';
import headephonesIcon from '@/assets/icons/Headphones.svg';
import computersIcon from '@/assets/icons/Computers.svg';
import gamingIcon from '@/assets/icons/Gaming.svg';

const categories = [
    {
        "id": 1,
        "Image": phonesIcon,
        "Name": "Phones",
    },
    {
        "id": 2,
        "Image": smartWatchsIcon,
        "Name": "Smart Watches",
    },
    {
        "id": 3,
        "Image": camerasIcon,
        "Name": "Cameras",
    },
    {
        "id": 4,
        "Image": headephonesIcon,
        "Name": "Headphones",
    }
    ,
    {
        "id": 5,
        "Image": computersIcon,
        "Name": "Computers",
    },
    {
        "id": 6,
        "Image": gamingIcon,
        "Name": "Gaming",
    }

]

export function Category() {
    return (
        <section className="w-full h-[352px] px-40 py-[60px] flex flex-col gap-8">
            <h1 className="text-2xl font-medium">
                Browse By Category
            </h1>

            <div className="w-[1120px] h-32 flex gap-8">
                {categories.map(category => {
                    return <CategoryCard category={category} key={category.id} />
                })}
            </div>
        </section>
    );
}