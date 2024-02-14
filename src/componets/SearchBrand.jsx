import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
]

const SearchBrand = () => {
    const [keyword,setKeyword] = useState()
  return (
    <div className='container mx-auto my-8'>
    <div className='search-brand space-y-[20px]'>
            <div className='flex justify-between'>
                <h1></h1>
            <h1 className='text-[25px] font-medium'>Find Your favourite Brand Here </h1>
            <a className='sm:block hidden' href="#"><p>KNOW MORE</p></a>
            </div>
            <p className='text-[15px] font-medium text-center '>Sell it on Zingoy Marketplace, it's fast, easy and safe! Most gift cards will be sold in a few hours</p>
    
            <div className='flex justify-center'>
            <Autocomplete
      id="country-select-demo"
      sx={{ width: 400 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <div className='w-full flex justify-between'>
                <div className='inline-block flex space-x-2'>
                <div className='rounded inline-block bg-blue-800 p-2 max-w-[75px]'>
                <img
                    loading="lazy"
                    width="75"
                    
                    srcSet={`https://res-5.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1525073601/linkisin/production/store/Paytm_hpur6x.png`}
                    src={`https://res-5.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1525073601/linkisin/production/store/Paytm_hpur6x.png`}
                    alt=""
                />
                </div>
                <span className='inline-block'>{option.label} ({option.code}) +{option.phone}</span>
                </div>
                <KeyboardArrowRightIcon />
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
            className='rounded'
          {...params}
          label="Search for any Brand or Store"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            endAdornment: (
                <InputAdornment position="start"><SearchIcon sx={{ color: 'gray' }} /></InputAdornment>
                 // Replace with your search icon component
              ),
        }}

        InputLabelProps={{
            sx:{backgroundColor:"white",padding:"2px 8px 2px 8px",borderRadius:"5px"},
            //shrink: keyword==='', // Prevent placeholder text from shifting to top
          }}
        
          sx={{ backgroundColor: 'white'}} 
          value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          
        />
      )}

      InputProps={{
        
        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
      }}
     
    />
            </div>
    </div>
    </div>
  )
}

export default SearchBrand