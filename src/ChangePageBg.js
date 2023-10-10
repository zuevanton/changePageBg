import { useState } from "react";


const initialValues = {
  colorTop: '',
  colorBottom: '',
  qwerty: '',
};

const ChangePageBG = () => {
  // const [colorTop, setColorTop] = useState('#ffffff');
  // const [colorBottom, setColorBottom] = useState('#ffffff')

  const [values, setValues] = useState(initialValues);
  const [background, setBackground] = useState('')

  const onGoClick = (e) => {
    e.preventDefault();
    setBackground(`linear-gradient(${Object.values(values).join(',')})`)
  }

  const inputChangeHandler = (event) => {
    const {value, name} = event.target;
    setValues(prev => ({...prev, [name]: value}))
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return(
    <form className="page" style={{background}} onSubmit={onGoClick} >
      {/* <input type="text" name="colorTop" value={values.colorTop} onChange={inputChangeHandler} />
      <input type="text" name="colorBottom" value={values.colorBottom} onChange={inputChangeHandler} /> */}
      {
        Object.keys(initialValues).map((name) => {
          return <input type="text" key={name} name={name} value={values[name]} onChange={inputChangeHandler} />
        })
      }
      <button type="submit" >Go</button>
      <button onClick={resetForm} type="button" >Clear</button>
    </form>
  )
}

export default ChangePageBG;