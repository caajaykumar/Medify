import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchHospital = () => {
  return (
    <>
     <Box
      component="form"
    //   onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        // value={formData.state}
        // onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {/* {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))} */}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        // value={formData.city}
        // onChange={handleChange}
        // startAdornment={
        //   <InputAdornment position="start">
        //     <SearchIcon />
        //   </InputAdornment>
        // }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {/* {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))} */}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
    
    
    
     </>
  )
}

export default SearchHospital