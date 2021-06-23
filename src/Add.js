import { useState } from "react"
import { AddprofileMultiImageApi } from './api/profileapi'

const Add = () => {
    const [gender, setGender] = useState("Male")
    const [file, setFile] = useState("")
    const [form, setForm] = useState({
        name: "",
        famile: ""
    })
    const submit = (event) => {
        event.preventDefault();
        const data = new FormData()
        data.append("name", form.name)
        data.append("famile", form.famile)
        data.append("gender", gender)
        for (const key of Object.keys(file))
        {
             data.append('image', file[key])
            }

   
            AddprofileMultiImageApi(data).then((res) => {
            alert("ok")
        }).catch((error) => {
            console.log("error=", error)
        })
    }
    const checkedGender = (event) => {
        if (event.target.checked) {
            setGender(event.target.name)
        }
    }
    const HandleChange = (event) => {
        const newform = { ...form }
        newform[event.target.name] = event.target.value;
        setForm(newform)
    }
    const HandleImage = (event) => {
        const profilImage = event.target.files
        console.log("profilImage=", profilImage)
        setFile(profilImage)
    }
    return (
        <div className="add">
            <form encType="multipart/form-data">
                <label>Male</label>
                <input type="radio" name="Male" checked={gender === "Male"} onClick={(e) => checkedGender(e)} />
                <label>Female</label>
                <input type="radio" name="Female" checked={gender === "Female"} onClick={(e) => checkedGender(e)} />
                <br></br>
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={(e) => HandleChange(e)} />
                <br></br>
                <label>Famile</label>
                <input type="text" name="famile" value={form.famile} onChange={(e) => HandleChange(e)} />
                <br></br>
                <label>Image</label>
                <input type="file" name="image" multiple onChange={HandleImage} />
                <br></br>
                <button onClick={submit}>submit</button>
            </form>
        </div>
    )
}

export default Add


	  //backend ist gleiche onlineshopping
