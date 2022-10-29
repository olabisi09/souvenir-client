import React from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Button, Container, Typography, Grid, Card, CardMedia, CardContent, Tooltip, IconButton} from "@mui/material";
import { ProductModel } from "../@types/models";
import { product } from "../services/product";
import '../App.css';

const ProductDetails : React.FC = () => {
    const {productName} = useParams();
    const [productDetails, setProductDetails] = React.useState<Partial<ProductModel>>({});

    React.useEffect(() => {
        productName && product.getProductByName(productName).then(data => {
            setProductDetails(data);
        })
    }, [])

    return(
        <Container className="fullHeight" sx={{display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Grid spacing={4} container sx={{height: 500, marginTop: 8}}>
                <Grid item xs={12} md={6} lg={6} sx={{backgroundColor: "#e7eaef"}}>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Stack direction={'column'}>
                        <Typography gutterBottom sx={{fontWeight: 'bold'}} variant="h4" component="div">
                            {productDetails.productName}
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            N{productDetails.productPrice}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {productDetails.description}
                        </Typography>
                        <Button className="btnColor" size="large" variant="contained">Add to cart</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetails;