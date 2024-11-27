import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

function MenuCategories({ selectedCategory, onCategoryChange }) {
    const categories = ["Containers", "Entrees", "Sides", "Appetizers", "Drinks"];

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs 
                value={selectedCategory}
                onChange={(e, newValue) => onCategoryChange(newValue)}
                variant="scrollable"
                scrollButtons="auto"
            >
                {categories.map((category) => (
                    <Tab key={category} label={category} value={category} />
                ))}
            </Tabs>
        </Box>
    );
}

export default MenuCategories;
