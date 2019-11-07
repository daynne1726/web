import React, { Component } from 'react';
import { Button,Search, Header , Grid, Menu, Image} from 'semantic-ui-react';
import Searchbar from './Searchbar';

const style ={
  backgroundColor:'#31ff2e',
  // padding: '40px 100px',
  boxShadow: '0 20px 20px rgba(0, 0, 0, 0.5)',
  // marginTop: '150px',
  // marginLeft: '900px',
  // borderRadius:'50px',
  height: '100px',
  width: '100%',
}
export default class Headers extends Component {
    constructor(props) {
        super(props);
    }

    Headers = () => (

    <div style = {style}>
    <Header size='huge'></Header>
    <Menu.Item>
        <span><Image src="/images/iCOOK-Logo.png" /></span>
    </Menu.Item>

    <Menu.Item
              name="search"
              style={{ marginLeft: "50%",  }}
              position="right"

            >
              <Searchbar />
            </Menu.Item>
    {/* <Header size='large'>Large Header</Header>
    <Header size='medium'>Medium Header</Header>
    <Header size='small'>Small Header</Header>
    <Header size='tiny'>Tiny Header</Header> */}
  </div>
    )

    render() {
        return (
          <div><this.Headers/>
          
          
            
            </div>

        )
      }

}