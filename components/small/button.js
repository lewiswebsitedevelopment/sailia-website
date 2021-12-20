import Link from 'next/link'

function Button(props) {

    return (
        <Link href={props.link}>
            <a class="hover:bg-gray-900 bg-custom-800 duration-300 text-white rounded-full  hover:shadow-lg py-1 px-7 ">{props.text}</a>
        </Link>

    )
  }
  
export default Button