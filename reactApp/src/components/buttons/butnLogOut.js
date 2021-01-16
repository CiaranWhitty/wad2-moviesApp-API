import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Button} from 'semantic-ui-react'

export default function ButnLogOut() {
  
  const context = useContext(AuthContext);

  return (
    <>
      
      <Button 
          variant="link"
          onClick={() => context.signout()}
          size="big"
          color="red"
          >
        Sign Out
      </Button>
        
    </>
  )
}
