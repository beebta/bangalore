import React, { useState } from "react";
import "./App.css";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import girl1 from "./images/girl1/1.jpg"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCity, setActiveCity] = useState("Bangalore");

  const cityProducts = {
    Bangalore: [
      {
        id: 1,
        name: "Alisha",
        price: "$50",
        description: "This is a detailed description of Bangalore Product 1.",
        images: [
          girl1,
          girl1,
        ],
      },
      {
        id: 2,
        name: "Akansha",
        price: "$70",
        description: "This is a detailed description of Bangalore Product 2.",
        images: [
          girl1,
          girl1,
        ],
      },
    ],
    Chennai: [
      {
        id: 1,
        name: "Chennai Product 1",
        price: "$60",
        description: "This is a detailed description of Chennai Product 1.",
        images: [
          girl1,
          girl1,
        ],
      },
      {
        id: 2,
        name: "Chennai Product 2",
        price: "$80",
        description: "This is a detailed description of Chennai Product 2.",
        images: [
          girl1,
          girl1,
        ],
      },
    ],
    Delhi: [
      {
        id: 1,
        name: "Delhi Product 1",
        price: "$70",
        description: "This is a detailed description of Delhi Product 1.",
        images: [
          girl1,
          girl1,,
        ],
      },
      {
        id: 2,
        name: "Delhi Product 2",
        price: "$90",
        description: "This is a detailed description of Delhi Product 2.",
        images: [
          girl1,
          girl1,
        ],
      },
    ],
  };

  const filteredProducts = cityProducts[activeCity].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveCity(newValue);
  };

   // WhatsApp API link
   const whatsappLink = `https://wa.me/9876766655?text=Hi, I'm interested in your products. Can you help me?`;

  return (
    <Box>

      <div className="header-wrap">
          <div className="number">
             <strong>Call us at : 9876766655</strong>
          </div>
      </div>

      <div className="hero">
        <div className="overlay">
          {/* Hero Section */}
          <Box sx={{ textAlign: "center", p: 4, color: "white" }}>
            <Typography variant="h3"> Welcome </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Your Comfort, Your Choice – Discreet Companionship at Your Fingertips
            </Typography>

          </Box>
        </div>
      </div>



      {/* City Tabs */}
      <AppBar position="static" className="tabs-wrap">
        <Tabs value={activeCity} onChange={handleTabChange} centered className="tabs" TabIndicatorProps={{ style: { backgroundColor: "red" } }}   >
          {Object.keys(cityProducts).map((city) => (
            <Tab
              key={city}
              label={city}
              value={city}
              sx={{
                color: activeCity === city ? "green" : "yellow", // Active: green, Inactive: yellow
                fontWeight: activeCity === city ? "bold" : "normal",
              }}
            />
          ))}
        </Tabs>
      </AppBar>

      {/* Search and Product Listing */}
      <Box sx={{ p: 4 }}>
        {/* <TextField
          label="Search products"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        /> */}

        <Box className="productswrapper">
          {filteredProducts.map((product) => (
            <Card key={product.id} onClick={() => openModal(product)} className="cardz">
              <CardActionArea>
                <CardContent className="immmg">
                  <div className="cardcontentwrapper">
                      <div className="cardimage">
                      <img src={product.images[0]}/>
                      </div>

                      <div className="cardtext">
                      <Typography variant="h6">{product.name}</Typography>
                      {/* <Typography variant="body2">{product.price}</Typography> */}
                      </div>

                  </div>
                  
                  
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <Dialog open={Boolean(selectedProduct)} onClose={closeModal} fullWidth maxWidth="xl" className="dailogggs">
          <DialogTitle>{selectedProduct.name}</DialogTitle>
          <div className="dailog-wrap">
            <div  className="innerimageswrapper">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.name} image ${index + 1}`}
                 
                />
              ))}
            </div>
            <Typography>{selectedProduct.description}</Typography>
          </div>
          <DialogActions>
            <Button onClick={closeModal}>Close</Button>
          </DialogActions>
        </Dialog>
      )}



      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "10px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "24px", height: "24px" }}
        />
        WhatsApp
      </a>
    </Box>
  );
};

export default App;



