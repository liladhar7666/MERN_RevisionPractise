function Hello(){

  let username = "Meshram"
  let userfullname = () =>{
    return "NILESH MESHRAM"
  }

   return <div>
    <h3> Hello this is your instructor Nilesh {username} {userfullname()}</h3>
   </div>
}

export default Hello;