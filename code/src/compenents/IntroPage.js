import React from 'react'


const IntroPage = ({name, onNameChange, onStepChange}) => {
  
    return (
      <div>
        <article className="letter-container" aria-label="Letter container">
          <form className="form" onSubmit={event => event.preventDefault()}>
            <h1 tabindex="0">Welcome to Hogwarts!</h1>
            <p tabindex="0">Before stepping on the Hogwarts express at Platform 9 3/4, we need to get some information about you so you will have the best 7 years at Hogwarts school of witchcraft and wizardry!</p>
            <h2 tabindex="0">Let's start with your name:</h2>
          
            <div className="input-container">
                  <input
                      className="input-form"
                      id="name"
                      type="text"
                      onChange={onNameChange}
                      value={name}
                  />
              <button className='btn' type="button" onClick={onStepChange} tabindex="0" >Next</button>
            </div>
          </form>
        </article>
      </div>
    )
  }

  export default IntroPage