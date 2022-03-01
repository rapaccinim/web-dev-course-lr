import CustomMonth from '../../Components/CustomMonth/CustomMonth.js'
import './CustomBody.css'

const CustomBody = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
  return(
    <div className='ContainerBody'>
        {months.map((month, i) => <CustomMonth monthName={month} monthNumber={i} key={i}/>)}
    </div>
  )
}
export default CustomBody;
