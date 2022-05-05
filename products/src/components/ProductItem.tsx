import { Card, GridItem, CardMedia, makeStyles } from "@frontend-starter/ui-components";
import { Product } from "@frontend-starter/sdk";

const useStyles = makeStyles((theme) => ({
    cardImg: {
        height: '100px'
    }
}))

type ProductItemProps = {
    product: Product
};

const ProductItem = (props: ProductItemProps): JSX.Element => {
    const { product: { defaultImage } } = props;
    const classes = useStyles();
    return <GridItem xs={8}>
        <Card variant="outlined">
            <CardMedia image={defaultImage}
                className={classes.cardImg}/>
            Test Hello from PRODUCTS!!</Card></GridItem>
}

export default ProductItem;