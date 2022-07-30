import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette: {
        mode: "dark"
    },
});
const CustomPagination = ({ setPage, numofPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div style={style.CustomPagination}>
            <ThemeProvider theme={theme}>
                <Pagination
                    color="primary"
                    count={numofPages}
                    shape="rounded"
                    variant="outlined"
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;

const style = {
    CustomPagination: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10
    }
}