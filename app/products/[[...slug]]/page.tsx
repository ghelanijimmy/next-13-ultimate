import React from 'react';

interface ProductPageProps {
    params: {
        slug?: string[];
    }
    searchParams: {
        sortOrder: string;
    }
}

const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: ProductPageProps) => {
    return (
        <div>
            <div>Product Page</div>
            <p>{slug?.map((item) => (
                <div>
                    <p>{item}</p>
                </div>
            ))}</p>
            <p>{sortOrder}</p>
        </div>
    );
};

export default ProductPage;