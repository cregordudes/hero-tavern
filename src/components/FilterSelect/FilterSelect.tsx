import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type FilterProps = {
   options: string[];
   defaultValue?: string;
};

const FilterSelect = ({ options, defaultValue }: FilterProps) => {
   const [filter, setFilter] = useState(defaultValue || "");

   const handleChange = (event: SelectChangeEvent) => {
      setFilter(event.target.value as string);
   };

   return (
      <Box
         sx={{ minWidth: 120, marginTop: "1rem", marginRight: "1rem" }}
         bgcolor={(theme) => theme.palette.primary.dark}
      >
         <FormControl
            fullWidth
            color="secondary"
            sx={{
               borderColor: (theme) => theme.palette.secondary.main,
               ".MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.secondary.main,
               },
            }}
         >
            <InputLabel
               sx={{
                  color: (theme) => theme.palette.secondary.light,
               }}
            >
               Filter
            </InputLabel>
            <Select
               id="demo-simple-select"
               value={filter}
               label="Age"
               onChange={handleChange}
               sx={{
                  color: (theme) => theme.palette.secondary.contrastText,
                  ".MuiSelect-icon": {
                     color: (theme) => theme.palette.secondary.light,
                  }, // Arrow color
               }} // Ensure the text color is applied to Select
               MenuProps={{
                  PaperProps: {
                     sx: {
                        bgcolor: (theme) => theme.palette.secondary.main, // Dropdown background
                        color: (theme) => theme.palette.secondary.contrastText, // Dropdown text color
                        "& .MuiMenuItem-root": {
                           color: (theme) =>
                              theme.palette.secondary.contrastText, // MenuItem text color
                        },
                     },
                  },
               }}
            >
               {options.map((option) => (
                  <MenuItem key={option} value={option}>
                     {option}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
};

export default FilterSelect;
