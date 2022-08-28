import React from "react";
import "./Key.css";

function Key ( { note } )
{
    
    function NoteIsFlat ({note})
    {
        let keyClassName = "key";
        if ( NoteIsFlat )
        {
            keyClassName += " flat";
        }
        let key;
        if (NoteIsFlat) {
          key = <div className="{keyClassName"></div>;
        } else {
          key = (
            <div className="key">
              <div className="key-text">{note.toUpperCase()}</div>
            </div>
          );
        }
        return note.length > 1;
    }
    
    return (
      <>
        <div className="key">
                <div className="key-text">
                    {note.toUpperCase()}
         </div>
        </div>
      </>
    );
}
export default Key;
