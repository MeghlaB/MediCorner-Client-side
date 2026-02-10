

import CategorySection from '@/components/modules/category/category-section';
import FeaturedMedicines from '@/components/modules/home-page/featuresMedicine';

import HeroSection from '@/components/modules/home-page/HeroSection';



const HomePage = async() => {
    
    return (
        <div className="flex flex-col min-h-screen">
            {/* Main content */}
            <main className="flex-1">
                <HeroSection />
                <CategorySection/>
                <FeaturedMedicines/>
                   <TrustSection/>
            </main>
        </div>
    );
};

export default HomePage;
