import React from 'react';
import styles from './AdvancedSearch.module.css';
import axios from 'axios';

class AdvancedSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchObject: {
            citySearch: "",
            zipSearch: "",
            stateSearch: "",
            clubNameSearch: "",
           
        },
        location: [],
        showLocation: false
    }
        this.searchHandler = this.searchHandler.bind(this);
    }
    
    searchHandler = (event) => {
        const newSearchObject = {...this.state.searchObject};
        newSearchObject[event.target.name] = event.target.value;
        this.setState({searchObject: newSearchObject});
    }

    clicer = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=${'enLuN7AK1OntX9nEbhnGO5uGqx04OtfP'}&location=${position.coords.latitude},${position.coords.longitude}` ).then(
                function(response) {
                    console.log(response)
                    this.setState({location: response.data.results[0].locations})
                }.bind(this)
            )          
        });
        this.setState({showLocation:true})
    }
   
    render() {
        console.log(this.state.location)
        return (
          <div id={styles.advancedSearchContainer}>
            <p id={styles.searchHeader}>Advanced Search</p>
            <div id={styles.actualSearchContainer}>
            <input placeholder="Tennis Club Name" name="clubNameSearch" value={this.state.searchObject.clubNameSearch} className={styles.search} onChange={this.searchHandler}/>
            <input placeholder="City" name="citySearch" value={this.state.searchObject.citySearch} className={styles.search} onChange={this.searchHandler}/>
            <input placeholder="Zip Code" name="zipSearch" value={this.state.searchObject.zipSearch} className={styles.search} onChange={this.searchHandler}/>
            <select name="stateSearch" value={this.state.searchObject.stateSearch} className={styles.search} onChange={this.searchHandler}>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maryland</option>
            <option>Maine</option>
            <option>Montana</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Veromont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
            
              
            </select>
            </div> 
            <p id={styles.helperText}>You can use the box above to find clubs in your area.</p>
            <button style={{position: 'relative', top: '200px'}} onClick={this.clicer}>click for ur location</button>
            {this.state.showLocation && this.state.location.map(element => {
                const newArray = Object.keys(element)
                return <p style={{position: "relative", top: "100px"}}>
                    {element[newArray[0]]}
                </p>
            })}
            </div>
        )
    }
}

export default AdvancedSearch;

// hawaii 
// vermont
// new jersey
// new york
// new mexico
// new hampshire
// calirfornia
// flordia
// texas
// north d
// sout d
// connecticut
// maine
// massachusets
// nebraska
// minnesota
// georgia
// nc
// sc
// alabama
// arkansas
// tennessee
// virginia
// west virginia
// maryland
// delware
// washington
// oregon
// montana
//wisconsin
// utah
// kansas
// colorado
// michigan
// arziona
// ohio
// oklahoma
// missori
// illinois
// idaho
// pennsylvania
// nevada
// louisiana
// alaska
// rhode island
// kentucky
// iowa