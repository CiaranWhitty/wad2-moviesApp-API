import React, {useState} from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Image } from 'semantic-ui-react'
import ButnLogOut from '../buttons/butnLogOut'
import { Link } from "react-router-dom";

export default function LoggedIn (){
  
  const [isNavShowing, setIsNavShowing] = useState(true);

    return (
      <div>
        <Menu size='massive' stackable pointing>
  
          <Menu.Menu>
            <Menu.Item>
              <a 
              href="#menu"
              onClick={() => { 
                if(isNavShowing){
                  document.getElementById("myNav").style.width = "100%";

                  document.getElementById("buttonRemove").style.display = "none"
                  setIsNavShowing(false)
                }
                else{
                  document.getElementById("myNav").style.width = "0%";

                  document.getElementById("buttonRemove").style.display = "block"
                  setIsNavShowing(true)
                }
              }}>
                <GiHamburgerMenu/>
              </a> 
            </Menu.Item>
          </Menu.Menu>
          
          <Menu.Menu >
          <Menu.Item
              name='Home'
              as={Link} to='/u/'
            />
          </Menu.Menu>
          
          <Menu.Menu position='right'>

            <Menu.Item 
            id="buttonRemove">
              <ButnLogOut />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu >
            <div id="myNav" class="overlay"> 
              <Menu.Item class="closebtn">
                <a
                href="#menu"
                onClick={() => { 
                  if(isNavShowing){
                    document.getElementById("myNav").style.width = "100%";
  
                    document.getElementById("buttonRemove").style.display = "none"
                    setIsNavShowing(false)
                  }
                  else{
                    document.getElementById("myNav").style.width = "0%";
  
                    document.getElementById("buttonRemove").style.display = "block"
                    setIsNavShowing(true)
                  }
                }}>
                  <BiXCircle/>
                </a>
              </Menu.Item>

            <div id="myNavItems"> 

            <Menu.Item
              name='Home'
              as={Link} to='/'
            />

            <Menu.Item
              name='Public'
              as={Link} to='/public'
            />

            <Menu.Item
              name='Movies'
              as={Link} to='/movies'
            />
            
            <Menu.Item
              name='Profile'
              as={Link} to='/profile'
            />

            <Menu.Item
              name='Profile'
              as={Link} to='/u/profile'
            />
            
            <Menu.Item>
              <ButnLogOut />
            </Menu.Item>

            </div>
          </div>

          </Menu.Menu>
          
        </Menu>

      </div>
    );

}