import React, {useState} from 'react'
import SearchBar from './searchBar'

export default function FilterSubMenu({ item,
                                        searchFilterAuthor, 
                                        setSearchFilterAuthor,
                                        searchFilterAdviser,
                                        setSearchFilterAdviser,
                                        filterArray,
                                        setfilterArray,
                                        fieldArray,
                                        setfieldArray,
                                        searchFilterTitle,
                                        setSearchFilterTitle,
                                        searchFilterYear,
                                        setSearchFilterYear,
                                        }){
    const [subnav, setSubnav] = useState(false)
    const [moreSubnav, setmoreSubnav] = useState(false)

    // functions for opening and closing submenus
    const showSubnav = () => setSubnav(!subnav)
    const showMoreSubnav = () => setmoreSubnav(!moreSubnav)
        
    // fixed warning for handlesearch filter
    const handleFilter = (data, parent) => {
        let filter = data.label ?  data.label : null;
        if (filter === "MORE") {
            return;
        }
        // get all selected filters
        // check if filter is already in the array
        let filterIndex = filterArray.indexOf(filter);
        let fieldIndex = fieldArray.indexOf(parent.label);

        // (SELECT FILTER)
        if( parent.label === "Author"||
            parent.label === "Adviser"||
            parent.label === "Title"||
            parent.label === "Year"
        ){ return;}
        if(fieldIndex < 0){
            // field and filter not in the array
            // add if filter is not in array
            setfilterArray([...filterArray, filter]);
            // add if field is not in field array
            setfieldArray([...fieldArray, parent.label]);
        }else{
            // remove from the array if clicked again (DESELECT FILTER)
            // change the filter
            filterArray.splice(filterIndex, 1);
            setfilterArray([...filterArray, filter]);
            fieldArray.splice(fieldIndex, 1);
            setfieldArray([...fieldArray, parent.label]);
        }
    }

    return (
        <div>
            {/*displays the submenu*/}
            <span style={sidebarLink} className="sidebarLink" to={item.link} onClick={item.subNav && showSubnav} >
                <div>
                    <span style={sidebarLabel}> {item.label} </span>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </span>
            {subnav && item.subNav.map((item2, index) => {
                return (
                    <span style={dropdownNav} 
                        className="dropdownNav" 
                        to={item2.link} key={index} 
                        onClick={() => handleFilter(item2, item)}
                    >
                        <span style={sidebarLabel}>

                            {/* SHOW MORE FILTERS */}
                            <div className="row">
                                <div className="column" onClick={item2.moreSubNav && showMoreSubnav}>
                                    {item2.label}
                                </div>
                                <div className="column" style={{alignitem2s:"center"}}>
                                    {item2.moreSubNav && moreSubnav 
                                    ? item2.iconOpened 
                                    : item2.moreSubNav
                                    ? item2.iconClosed
                                    : null}
                                </div>
                            </div>
                            {/* END OF SHOW MORE FILTERS */}
                            {/* {moreSubnav && item2.moreSubNav.map((moreitem2, mIndex) => {
                                return(
                                    <a style={dropdownNav} 
                                        className="dropdownNav" 
                                        key={mIndex} 
                                        onClick={() => handleFilter(moreitem2)}
                                    >
                                        <span>
                                            {moreitem2.mlabel}
                                        </span>

                                    </a>
                                )
                            })} */}

                            {/* ADD a searchbar for authors and advisers */}
                            {item2.searchbarAuthor
                            ?   <SearchBar  searchFilter={searchFilterAuthor} 
                                            setSearchFilter={setSearchFilterAuthor}
                                />
                            : null}
                            {item2.searchbarAdviser
                            ? <SearchBar searchFilter={searchFilterAdviser} 
                                         setSearchFilter={setSearchFilterAdviser}/>
                            : null}
                            {item2.searchbarYear
                            ? <SearchBar searchFilter={searchFilterYear} 
                                         setSearchFilter={setSearchFilterYear}/>
                            : null}
                            {item2.searchbarTitle
                            ? <SearchBar searchFilter={searchFilterTitle} 
                                         setSearchFilter={setSearchFilterTitle}/>
                            : null}

                            {/* <div>
                                {
                                    item.label === "MORE" && moreSubnav
                                }
                            </div> */}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

const sidebarLink = {
    display: "flex",
    color: "black",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5vw 0 0",
    marginLeft: "1vw",
    listStyle: "none",
    height: "3vw",
    fontSize: "1.1em",
    fontWeight: "600",
}

const sidebarLabel = {
    marginLeft: "0.75vw",
}

const dropdownNav = {
    alignItems: "center",
    display: "flex",
    color: "rgb(0, 103, 161)",
    fontSize: "1.3em",
    marginLeft: "3rem",
    marginTop: "0.25em",
    marginBottom: "0.25em",
    textDecoration: "none",
    height: "2.25vw",
}