import { useState } from "react"
import { AddprofileApi } from './api/profileapi'
const Profile = () => {
    const [gender, setGender] = useState("Male")
    const [file, setFile] = useState("")
    const [form, setForm] = useState({
        name: "",
        familie: ""

    })

    const checkedgender = (event) => {
        if (event.target.checked) {
            setGender(event.target.name)
        }

    }
    const Handlechange = (event) => {
        const newform = { ...form }
        newform[event.target.name] = event.target.value;
        setForm(newform)
    }
    const HandlechangeImage = (event) => {
        const profilImage = event.target.files[0]
        console.log("profilImage=", profilImage)
        setFile(profilImage)
    }

    const submit = (event) => {
        event.preventDefault();
        const data = new FormData()
        data.append("name", form.name)
        data.append("familie", form.familie)
        data.append("gender", gender)
        data.append("image", file)

        AddprofileApi(data).then((res) => {
            console.log("resprofile=", res)

            alert("profile submitted successfully")
        }).catch((error) => {
            console.log(error);

        })
    }
    return (
        <div className="Profile">
            <h1>Profile!</h1>
            <form encType="multipart/form-data">
                <label>Male</label>
                <input type="radio" name="Male" checked={gender === "Male"} onClick={(e) => checkedgender(e)} />
                <label>Female</label>
                <input type="radio" name="Female" checked={gender === "Female"} onClick={(e) => checkedgender(e)} />
                <label>Other</label>
                <input type="radio" name="Other" checked={gender === "Other"} onClick={(e) => checkedgender(e)} />
                <br></br>
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={(e) => Handlechange(e)} />
                <br></br>
                <label>familie</label>
                <input type="text" name="familie" value={form.familie} onChange={(e) => Handlechange(e)} />
                <br></br>
                <label>Image:</label>
                <input type="file" name="image" onChange={HandlechangeImage} />
                <br></br>
                <button onClick={submit} type="submit">submit</button>
            </form>
        </div>
    )
}

export default Profile