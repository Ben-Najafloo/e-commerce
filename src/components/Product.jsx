
"use client"
import { CardContext } from '@/app/contexts/cardContext';
import Link from 'next/link'
import { useContext } from 'react';

// MUI
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Product = ({ product }) => {

    const { addToCart } = useContext(CardContext);
    return (
        <ImageListItem>
            <Link href={`${product._id}`} className='group'>
                <img
                    srcSet={product.image}
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <ImageListItemBar

                    title={product.title.slice(0, 20)}
                    subtitle={`$ ${product.price}`}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`Add to Card`}
                            onClick={() => { addToCart(product) }}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </Link>
        </ImageListItem>

    )
}

export default Product
