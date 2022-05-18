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
    borderRadius: 8,
    minHeight: '475px',
    maxHeight: '475px',
    overflow: 'auto'
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
    // display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    padding: '16px',
    width: '100%'
  }
}))

// type ProductsResp = {
//   data: Product[]
// };

const isBottom = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) {
    return false;
  }
  // console.log('ref.current.getBoundingClientRect().bottom', ref.current.getBoundingClientRect().bottom);
  // console.log('window.innerHeight', window.innerHeight);
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const Products = () => {
  const [pageNo, setPageNo] = useState(1);
  const [chars, setChars] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const { loading, error, products } = useFetch(pageNo, searchQuery);
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);

  const onScroll = (e: any) => {
    if (isBottom(contentRef)) {
      setPageNo(pageNo => pageNo + 1);
      setScrollPosition(e.target.scrollHeight);
      contentRef.current?.scrollTo(0, scrollPosition);
      console.log('#######', contentRef.current?.scrollTo(0, scrollPosition));
    }
  };

  // useEffect(() => {
  //   document.addEventListener('scroll', onScroll);
  //   return () => document.removeEventListener('scroll', onScroll);
  // }, [pageNo]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(' search is clicked', e.target.value);
    // e.preventDefault();
    setChars(e.target.value);
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchQuery(chars);
    }
  }

  // if (loading) return <div className={classes.spinner}><CircularProgress /></div>;
  // if (error) return <div>Something went wrong ...</div>;

  return <>
    <GridContainer className={`${classes.outline} ${classes.spinner}`} onScroll={(e) => onScroll(e)}>
      {loading ? <GridItem>
        <CircularProgress />
      </GridItem> : <>
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
      </>}
      <div ref={contentRef}></div>
    </GridContainer>
  </>
};

export default Products;
