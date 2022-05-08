import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import { Product } from "@frontend-starter/sdk";
import { GridContainer, makeStyles, CircularProgress, TextField, GridItem } from "@frontend-starter/ui-components";
import ProductItem from "./ProductItem";
import useFetch from "./useFetch";

const useStyles = makeStyles((theme) => ({
  cardImg: {
    height: '100px'
  },
  outline: {
    border: '1px solid black',
    borderRadius: 8
  },
  wrapper: {
    '&.MuiGrid-root': {
      marginLeft: '0',
      paddingRight: '16px'
    },
    // overflow: 'auto',
    // height: '700px'
  },
  spinner: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    padding: '16px'
  }
}))

// type ProductsResp = {
//   data: Product[]
// };

const isBottom = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const Products = () => {
  const [pageNo, setPageNo] = useState(1);
  const [chars, setChars] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, error, products } = useFetch(pageNo, searchQuery);
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (isBottom(contentRef)) {
        setPageNo(pageNo => pageNo + 1);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [pageNo]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(' search is clicked', e.target.value);
    // e.preventDefault();
    setChars(e.target.value);
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      setSearchQuery(chars);
    }
  }

  if (loading) return <div className={classes.spinner}><CircularProgress /></div>;
  if (error) return <div>Something went wrong ...</div>;

  return <>
    <GridContainer className={`${classes.outline}`}>
      <GridItem className={classes.searchBox}>
        <TextField 
          label="Search Text" 
          variant="outlined"
          onChange={onSearch}
          onKeyUp={onKeyUp}
        />
      </GridItem>
      <GridItem>
        <GridContainer className={classes.wrapper} spacing={2}>
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </GridContainer>
      </GridItem>
    </GridContainer>
    <div ref={contentRef}></div>
  </>
};

export default Products;
