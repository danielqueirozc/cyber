import { Banner } from "./banner/banner";
import { Banners } from "./banners/banners";
import { BigSummerSale } from "./bigSummerSale/bigSummerSale";
import { Category } from "./category/category";
import { DiscountsProducts } from "./discountsProducts/discountsPresents";
import { Products } from "./products/products";
import { SmallerBanners } from "./smallerBanners/smallerBanners";

export function Main() {
    return (
        <main>
            <Banner />
            <SmallerBanners />
            <Category />
            <Products />
            <Banners />
            <DiscountsProducts />  
            <BigSummerSale />
        </main>
    );
}