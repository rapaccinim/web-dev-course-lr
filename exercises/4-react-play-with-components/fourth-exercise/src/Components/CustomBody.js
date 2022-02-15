import CustomMonth from './CustomMonth.js'

const CustomBody = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
  return(
    <div className='ContainerBody'>
        {months.map((month, i) => <CustomMonth monthName={month} monthNumber={i}/>)}
    </div>
  )
}
export default CustomBody;
