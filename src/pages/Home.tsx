import { Box, Stack, Button, Container, Typography, Grid, Card, CardMedia, CardContent, Tooltip, IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../@types/models";
import '../App.css'
import { product } from "../services/product";
import { routes } from "../routes/routes";

const Home: React.FC = () => {
    const [products, setProducts] = React.useState<ProductModel[]>([]);

    React.useEffect(() => {
        product.getProducts().then((data) => {
            setProducts(data);
        })
    }, [])

    return(
        <Container className="fullHeight" sx={{display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Box sx={{margin:'auto', width: '80%', height: '100', display: 'flex', flexDirection: 'column', jusfifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Typography variant="h2" sx={{marginTop: 10}} gutterBottom>
                    Let's handle all the party souvenirs for you.
                </Typography>
                <Button className="btnColor" size="large" variant="contained">Get Started</Button>
            </Box>
            <Box sx={{margin:'auto', width: '90%'}}>
                <Typography variant="h4" textAlign={'center'} gutterBottom>Popular products</Typography>
                <Grid container spacing={4}>
                    {products && products.slice(0, 4).map((data) => {
                        return (
                            <Grid item key={data.id} xs={12} md={6} lg={3}>
                                <Link style={{textDecoration: 'none'}} to={`${routes.productDetails.slice(0, 9)}/${data.productName}`}>
                                    <Card sx={{textAlign: 'left', height: 280}}>
                                        <CardMedia
                                            component="div"
                                            sx={{height: 140, backgroundColor: "#e7eaef"}}
                                        />
                                        <CardContent>
                                            <Stack direction={'row'} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {data.productName}
                                                </Typography>
                                                <Tooltip title="Add to cart">
                                                    <IconButton>
                                                        <ShoppingCartIcon/>
                                                    </IconButton>
                                                </Tooltip>   
                                            </Stack>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                {data.description}
                                            </Typography>
                                            <Typography sx={{fontWeight: 'bold'}}>
                                                N{data.productPrice}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    )
}

export default Home;