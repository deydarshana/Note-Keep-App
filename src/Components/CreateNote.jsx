import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
      title:'',
      content:'',
    });

    const InputEvent = (event) =>{
         const { name, value } = event.target;
         setNote((prevdata) => {
             return{
                 ...prevdata,
                 [name] : value,
             }
         })
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
           title:'',
           content:'',
        });
    };
    const expandit = () => {
        setExpand(true);
    }
    const backtnormal = () => {
        setExpand(false);
    }
    
  return(
      <>
      <div className="main_note" onDoubleClick={backtnormal}>
          <form>
        {expand?
            <input 
            type="text" 
            placeholder="Title" 
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={InputEvent}
            />:null}

              <textarea 
              rows="" 
              column="" 
              placeholder="Write a Note..."
              name="content"
              value={note.content}
              onChange={InputEvent}
              onClick={expandit}
              />
              {expand?
               <Button>
                  <AddIcon className="plus_sign" onClick={addEvent} />
                  
               </Button>:null}
          </form>
      </div>
     
        
      </>
  );
}

export default CreateNote;