import React from "react";
import Key from "./Key";
import "./Piano.css"

function Piano ()
{
    // const keys = keys.map( key =>
    // {
    //     return (
    //         <Key key={ index } note={ note } />
    //     );
    // } );
    return (
      <>
            <div className="piano">
                {/* {keys} */}
          <Key note="c" />
          <Key note="df" />
          <Key note="d" />
          <Key note="ef" />
          <Key note="e" />
          <Key note="f" />
          <Key note="gf" />
          <Key note="g" />
          <Key note="af" />
          <Key note="a" />
          <Key note="bf" />
          <Key note="b" />
        </div>
      </>
    );
}
export default Piano;