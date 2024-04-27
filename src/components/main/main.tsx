import { Banner } from "./banner/banner";
import { Category } from "./category/category";
import { SmallerBanners } from "./smallerBanners/smallerBanners";

export function Main() {
    return (
        <main>
            <Banner />
            <SmallerBanners />
            <Category />  
        </main>
    );
}