import React, { useState } from 'react'
import "./index.css"
function Contact() {

  const [data, setData] = useState({
    name : "",
    email: "",
    phone: "",
    company : "",
    message: ""
    
  })
  const [list, setList ] = useState([])

  const onSubmitRequest = () => {
    var datas = []
    datas.unshift({...data})
    setList(datas)

  }
  const onChangeHandler =(e) =>{
     let newData = {...data}
     newData[e.target.name] = e.target.value
     setData(newData)
     
  }
  return (
    
    <div>
      <header className="header">
      <div className="header_logoContainer">
        <img src="./images/Logo.svg" width="150" height="75" alt="PMEntire's logo" />
      </div>
      <div className="header_navContainer">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_list__items whiteText">
              <a href="index.html">About Us</a>
            </li>
            <li className="nav_list__items whiteText">
              <a href="contactus.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section className="banner contactUs">
        <h1 className="heading">Start a conversation today!</h1>
      </section>

      <section className="formWrapper">
        <p className="formWrapper_text">
          Want to try out our software solutions? Or speak to one of our sales representatives who
          can quickly understand your requirements?
          <strong>Fill out the form below to register your interest!</strong>
        </p>
        <div className="formWrapper_container">
          <div className="imageContainer">
            <img
              className="lazy-hidden"
              src="./images/contact-main-img.webp"
              alt="contact-main-img"
              width="685"
              height="765"
            />
          </div>
          <div className="formContainer">
            <h2 className="formContainer_heading">Contact Us</h2>
            <form>
              <div className="inputWrapper">
                <input type="text" id="txtName" value = {data.name} name = "name" onChange = {onChangeHandler} />
                <label>Name</label>
              </div>
              <div className="inputWrapper">
                <input type="text" id="txtEmail" value = {data.email}  name = "email" onChange = {onChangeHandler}/>
                <label>Email Address</label>
              </div>
              <div className="inputWrapper">
                <input type="text" id="txtPhone" value = {data.phone}  name = "phone" onChange = {onChangeHandler} />
                <label>Phone Number</label>
              </div>
              <div className="inputWrapper">
                <input type="text" id="txtCompanyName"  value = {data.company}  name = "company" onChange = {onChangeHandler} />
                <label>Company Name</label>
              </div>
              <div className="inputWrapper">
                <textarea name="message" id="message" cols="30" rows="1" value = {data.message} onChange = {onChangeHandler} ></textarea>
                <label>Message</label>
              </div>
              <div className="inputWrapper">
                <button id="cmdSubmit" type = "button" className="btn whiteBtn" onClick = {onSubmitRequest}>REQUEST FREE TRIAL </button>
              </div>
              <span id="formInput" className="text"> Form Input: </span>
              <div>{
                list.map((each,i) => (<ul key = {i}>
                  <li> Name : {each.name}</li>
                  <li>Email : {each.email}</li>
                  <li>Phone Number: {each.phone}</li>
                  <li>Company: {each.company}</li>
                  <li>Message: {each.message}</li>
                </ul>))
                }
                
              </div>
              
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer_copyrightContainer">
        <div class="coprrightContainer">
          <p class="text">&copy; 2022. PMEntire Pvt. Ltd. All rights are reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact
