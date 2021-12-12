import Link from 'next/link'

function Button(props) {

    return (
        <Link href={props.link}>
            <a class="bg-transparent hover:bg-gray-900 duration-300 text-gray-900 hover:text-white rounded-full  hover:shadow-lg py-1 px-7 border border-gray-900 hover:border-transparent">{props.text}</a>
        </Link>

    )
  }
  
export default Button