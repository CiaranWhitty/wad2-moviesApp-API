import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import ButnSignIn from '../buttons/butnSignIn'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function LoggedOut (){
  
  const [isNavShowing, setIsNavShowing] = useState(true);
  
  return (
    
    <div>
      <Menu size='massive' pointing>
        <Menu.Menu>
        
        <Menu.Item>
          <a 
          href="#menu"
          onClick={() => { 
            if(isNavShowing){
              document.getElementById("myNav").style.width = "100%"
              document.getElementById("buttonRemove").style.display = "none"
              setIsNavShowing(false)
            }
            else{
              document.getElementById("myNav").style.width = "0%"
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
              name='Web Dev Api'
              as={Link} to='/'
            />
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item
            id="buttonRemove"
            >
              <ButnSignIn />
            </Menu.Item>
          </Menu.Menu>

        <Menu.Menu >
          <div id="myNav" class="overlay"> 
            <Menu.Item class="closebtn">
              <a
              href="#menu"
              onClick={() => {
                if(isNavShowing){
                  document.getElementById("myNav").style.width = "100%"
                  document.getElementById("buttonRemove").style.display = "none"
                  setIsNavShowing(false)
                }
                else{
                  document.getElementById("myNav").style.width = "0%"
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

                <Menu.Item>
                  <ButnSignIn />
                </Menu.Item>

              </div>
            </div>
            
        </Menu.Menu>
      </Menu>
    </div>

    );
}