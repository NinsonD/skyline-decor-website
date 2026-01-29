import BlogGridMain from '@/pages/blogs/blog-grid/BlogGridMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Interior Design Blog | Skyline Décor Insights in UAE",
    description: "Read our blog for the latest trends and tips on interior fit-out, design, and renovation in the UAE.",
    keywords: [
        "Interior Fit Out Company in UAE",
        "Interior Fit Out Company in Dubai",
        "Interior Contractors in UAE",
        "Interior Design & Fit Out Dubai",
        "Turnkey Interior Fit Out UAE",
        "Commercial Interior Fit Out Dubai",
        "Office Interior Fit Out UAE",
        "Ceiling & Partition Contractors UAE",
        "Gypsum Ceiling Contractors UAE",
        "Acoustic Ceiling Solutions Dubai",
        "Office Partition Installation UAE",
        "Cladding Contractors UAE",
        "Interior Renovation Dubai",
        "MEP & Interior Fit Out UAE",
        "Interior Design UAE",
        "Fit Out Services Dubai",
        "Commercial Renovation UAE",
        "Residential Interior Fit Out Dubai",
        "Office Renovation UAE",
        "Ceiling Contractors Dubai",
        "Partition Walls UAE",
        "Cladding Solutions Dubai",
        "Interior Contractors UAE",
        "Turnkey Fit Out Company Dubai"
    ]
};

const page = () => {
    return (
        <BlogGridMain />
    );
};

export default page;