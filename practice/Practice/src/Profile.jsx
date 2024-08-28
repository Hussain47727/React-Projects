import { useState } from "react";
function Profile() {


    const [loggedIn, setLoggedIn] = useState(2)
    return (

        <div>
            {loggedIn == 1 ? <h1>user 1</h1>
                : loggedIn ==2? <h1>user 2</h1>
                    : <h1>user 3</h1>}
<h1>hellow world</h1>
<p>iam a big developer</p>
  </div>
    )
}

export default Profile;