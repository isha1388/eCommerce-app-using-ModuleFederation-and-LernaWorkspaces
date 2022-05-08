import {
    Card,
    GridItem,
    CardMedia,
    CardHeader,
    makeStyles,
    Typography,
    IconButton,
    CurrencyRupeeIcon,
    DiscountIcon,
    MoreVertIcon,
    CardContent
} from "@frontend-starter/ui-components";
import { Product } from "@frontend-starter/sdk";
import KebabMenu from "./KebabMenu";

const useStyles = makeStyles((theme) => ({
    cardImg: {
        height: '100px'
    },
    cardHeader: {
        '& .MuiCardHeader-content': {
            overflow: 'hidden'
        }
    },
    cardContent: {
        height: '75px',
        overflow: 'auto'
    },
    priceWrapper: {
        // display: 'flex'
    },
    price: {
        paddingRight: '5px'

    },
    discount: {

    }
}))

type ProductItemProps = {
    product: Product
};

const ProductItem = (props: ProductItemProps): JSX.Element => {
    const { product: { defaultImage, name, description, price, discount } } = props;
    const classes = useStyles();
    return <GridItem xs={4}>
        <Card variant="outlined" sx={{ maxWidth: 245, maxHeight: 300 }}>
            <CardHeader
                className={classes.cardHeader}
                title={
                    <Typography noWrap gutterBottom variant="h6">
                        {name}
                    </Typography>
                }
                subheader={
                    <span className={classes.priceWrapper}>
                        <span className={classes.price}>
                            <IconButton size="small"><CurrencyRupeeIcon /> {price}</IconButton>
                        </span>
                        <span className={classes.discount}>
                            <IconButton size="small"><DiscountIcon />{discount}</IconButton>
                            </span>
                    </span>
                }
                action={
                    <KebabMenu />
                }>
            </CardHeader>
            <CardMedia image={defaultImage} className={classes.cardImg} />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1"> {description}</Typography>
            </CardContent>
        </Card>
    </GridItem>
}

export default ProductItem;