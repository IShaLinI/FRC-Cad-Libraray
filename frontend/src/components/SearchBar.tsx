import React, { useRef, useEffect } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Autocomplete } from "@material-ui/lab";
import { Button, Checkbox, TextField } from "@material-ui/core";
import { SwapHoriz } from "@material-ui/icons";

import "./SearchBar.css";

import { searchOptionsState, searchTextState } from "../utils/atoms";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './insertables/styles';

import SearchBar from 'material-ui-search-bar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      flexShrink: 3
    },
    search: {
      flexGrow: 1,
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        width: "auto",
      },
    },
    searchColor: {
      color: "white"
    },
    
  }),
);

interface SearchbarProps {
  isAdmin: boolean;
  setAdmin: (admin: boolean) => void;
  showAdmin: boolean;
}

let clearRef: HTMLButtonElement | undefined = undefined;

export default function Searchbar(props: SearchbarProps) {
  const classes = useStyles();

  const input = useRef(null);

  const setSearch = useSetRecoilState(searchTextState);

  const setSearchOptions = useSetRecoilState(searchOptionsState);

  const search = useRecoilValue(searchTextState);


  
  // useEffect(() => {
  //   let button = document.querySelectorAll('button')[0];
  //   clearRef = button;
  //   button.addEventListener('click', () => {
  //     setSearch('');
  //   });
  // }, []);

  return (
    <div >
      <AppBar position="static" color={props.isAdmin ? "secondary" : "primary"}>
        <Toolbar>
          <div>
            <div>
              <SearchBar
              
              />
              {(props.showAdmin || true) && <Button
                startIcon={<SwapHoriz />}
                color="inherit"
                onClick={() => props.setAdmin(!props.isAdmin)}>
                {props.isAdmin ? "User" : "Admin"}
              </Button>}
            </div>
            <div>
              
            </div>
          </div>


          {/* <div className={classes.search}> */}
          {/* 
            <Autocomplete
              ref={input}
              multiple
              disableCloseOnSelect
              clearOnBlur={false}
              options={searchOptions}
              limitTags={3}
              classes={{
                input: classes.searchColor
              }}




              color="white"
              getOptionLabel={(o: SearchOption) => o.title}

              filterOptions={(options, state) => options}
              
              inputValue={search}

              renderOption={(option, { selected }) => {
                return (
                  <React.Fragment>
                    <Checkbox
                      checked={selected}
                    />
                  {option.title}
                  </React.Fragment>)
              }}
              onChange={(event, values) => {
                console.log(search);

                let options = {
                  part: false,
                  asm: false,
                  composite: false,
                  config: false
                };

                values.forEach(val => {
                  if (val.tag === 'part') {
                    options.part = true;
                  }
                  if (val.tag === 'asm') {
                    options.asm = true;
                  }
                  if (val.tag === 'config') {
                    options.config = true;
                  }
                });
                setSearchOptions(options);
              }}

              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Search"
                  autoFocus
                  onChange={(event) => {
                    // extremely jank way of keeping clear button visible but who cares 
                    clearRef?.classList.add('MuiAutocomplete-clearIndicatorDirty');

                    setSearch(event.target.value);
                  }}
                />
              )}
            /> */}
          {/* <TextField
              // {...params}
              className={classes.searchColor}
              variant="outlined"
              placeholder="Search"
              autoFocus
              onChange={(event) => {
              // extremely jank way of keeping clear button visible but who cares 
              // clearRef?.classList.add('MuiAutocomplete-clearIndicatorDirty');  
              setSearch(event.target.value);
            }} 
          />
          */}


          {/* </div> */}



          {/* {props.showAdmin && <Button 
            startIcon={<SwapHoriz />}
            color="inherit" 
            onClick={() => props.setAdmin(!props.isAdmin)}>
              {props.isAdmin ? "User" : "Admin"}
          </Button>} */}


        </Toolbar>
      </AppBar>
    </div>
  );
}


const searchOptions: SearchOption[] = [
  { title: 'Part', tag: 'part' },
  { title: 'Assembly', tag: 'asm' },
  // { title: "Composite", tag: "composite" },
  { title: 'Configurable', tag: 'config' }
]

interface SearchOption {
  title: string;
  tag: string
}