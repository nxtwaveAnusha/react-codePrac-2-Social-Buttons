const Button = props => {
  const {text, className} = props
  return <button className={className}>{text}</button>
}

const element = (
  <div className='bg-container'>
    <div className='social-button-container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='buttons-container'>
        <Button text='Like' className='like-btn' />
        <Button text='Comment' className='comme-btn' />
        <Button text='Share' className='share-btn' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
