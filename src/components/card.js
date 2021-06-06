import React from "react";
import { Collapse, Button} from "@chakra-ui/react";

function CollapseEx() {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <>
        <Collapse startingHeight={20} in={show}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          sdhfdshfdjdfjg
          dhdhfdhfdghgfjfjhjhkh  hoighdfoig hdfghdf ighidfhgfdhg
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          sdhfdshfdjdfjg
          dhdhfdhfdghgfjfjhjhkh  hoighdfoig hdfghdf ighidfhgfdhg
        </Collapse>
        <Button size="sm" onClick={handleToggle} mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
      </>
    )
  }

export default CollapseEx;