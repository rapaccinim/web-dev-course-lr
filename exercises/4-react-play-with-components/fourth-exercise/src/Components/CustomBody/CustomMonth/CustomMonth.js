import './CustomMonth.css'

const CustomMonth = (props) => {

  // Object literal
  const ordinalConfig = {
    0 : 'st',
    1 : 'nd',
    2 : 'rd',
    'default' : 'th'
  }

  const ordinal = ordinalConfig[props.monthNumber] || ordinalConfig['default']

  // if(props.monthNumber === 0){
  //   ordinal = 'st';
  // }else if (props.monthNumber === 1) {
  //   ordinal = 'nd';
  // }else if (props.monthNumber === 2) {
  //   ordinal = 'rd';
  // }else{
  //   ordinal = 'th';
  // }

  let url = 'https://source.unsplash.com/random/500x200?sig=' + props.monthNumber;

  return(
    <div className='p-month'>
     <p>{props.monthName} is the {props.monthNumber + 1}{ordinal} month of the year</p>
     <img src={url} alt={props.monthName}/>
    </div>
  )
}
export default CustomMonth;
