import React from "react";
import { TopHeader } from "./TopHeader";
import { HeaderWrapper } from "./HeaderWrapper";
import { Footer } from "./Footer";
import { ShopCategories } from "./ShopCategories";
import { HomeBestDeals } from "./HomeBestDeals";
import { BrandSection } from "./BrandSection";
import { PopularProducts } from "./PopularProducts";
import { HomeCategorySection } from "./HomeCategorySection";
import { BestSellingProducts } from "./BestSellingProducts";
import "../styles/Home.css";

export const Home = () => {
    return (
        <div className="home">
            <TopHeader />
            <HeaderWrapper className="header-instance" />;
            {/* <CoverPic /> */}
            <ShopCategories />
            <HomeBestDeals />
            <BrandSection />
            <PopularProducts />
            <HomeCategorySection />
            <BestSellingProducts />
            <Footer />
        </div>
    );
};