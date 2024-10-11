import React from "react";
import '../../Assets/CSS/PopularProducts.css';
import styled from 'styled-components';
import { GridColumn, Grid } from 'semantic-ui-react'

const StyledText = styled.div`
  font-family: 'Raleway';
  text-transform: capitalize;
  color: #000000;
`;

function PopularProducts() {

    return (
      <div>
        <center><h1><StyledText>Popular Products</StyledText></h1></center>
        <div id="popular-products-container">
            <Grid style={{ marginTop: '2%' }}>
                <GridColumn mobile={16} tablet={8} computer={4}>
                    <div id="products">
                        vinoth
                    </div>
                </GridColumn>
                <GridColumn mobile={16} tablet={8} computer={4} >
                    <div id="products">
                        vinoth
                    </div>
                </GridColumn>
                <GridColumn mobile={16} tablet={8} computer={4} >
                    <div id="products">
                        vinoth
                    </div>
                </GridColumn>
                <GridColumn mobile={16} tablet={8} computer={4} >
                    <div id="products">
                        vinoth
                    </div>
                </GridColumn>
            </Grid>
        </div>
      </div>
    );
}

export default PopularProducts;