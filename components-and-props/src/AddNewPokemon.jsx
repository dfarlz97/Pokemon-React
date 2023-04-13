import { useState } from 'react';
function AddNewPokeon({addPokemon}){
    const [name, setName] = useState("")  // name is the state
    const [image, setImage] = useState("") // image is the state
    
    function handleName(e){
        setName(e.target.value);
    }
    
    function handleImage(e){
        setImage(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        addPokemon({
            name, 
            image,
        })
        // console.log(name, image, newImage)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                onChange={handleName} 
                type='text' 
                name='name' 
                value={name}>
                </input>
                <label>Image URL</label>
                <input 
                onChange={handleImage} 
                type='text' 
                name='image' 
                value={image}>
                </input>
                <input type='submit'></input>
            </form>
        </div>

    )
}

export default AddNewPokeon;